import React, { Component, useState, useEffect } from "react";
import { createStore } from "redux";
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";
import { connect } from "react-redux";
import { getAllVehicles } from "../../config/actions/vehicleActions";
import e from "cors";

const VehiclePanel = (props) => {
  let [vehicleData, setVehicleData] = useState([]);
  const [vehicleContent, setVehicleContent] = useState({});
  const [teslaModels, setTeslaModels] = useState({});
  const [selectedVehicleName, setSelectedVehicleName] = useState("");
  const defaultColor = "Pearl White";
  const [selectedColor, setColor] = useState(defaultColor);

  // const [selectedWheel, setWheel] = useState(defaultWheel);
  // const [selectedInterior, setInterior] = useState(defaultInterior);
  // const [selectedBattery, setBattery] = useState(defaultBattery);
  // const [selectedLayout, setLayout] = useState(defaultLayout);


  useEffect(() => {
    setVehicleData((data) => { 
      if(!selectedVehicleName) return data; // ensures vehicleData array has no starting empty value

      let newVehicleNames = data.filter(modelName => modelName !== selectedVehicleName) // checks for and removes vehicle from array
      newVehicleNames = [selectedVehicleName,...newVehicleNames]; // sets selected vehicle atop vehicleData array
      return newVehicleNames;
    });
  }, [selectedVehicleName]);

  
  useEffect(() => {
    props.getAllVehicles();
  }, []);

  useEffect(() => {
    if (props.vehicle.length > 0) {
      getTeslaData();
    }
  }, [props.vehicle]);

  const removeModel = (model) => {
    const stateData = vehicleData;
    for (let i = 0; i < stateData.length; i++) {
      if (stateData[i].name === model && i > -1) {
        stateData.splice(i, 1);
      }
    }

    setVehicleData([...stateData]);
  };

  const convertAllStringValues = (obj) => {
    const objKeys = Object.keys(obj);
    for (let i = 0; i < objKeys.length; i++) {
      let newValue;
      let oldValue = obj[objKeys[i]];

      if (
        (typeof oldValue === "string" && oldValue.charAt(0) === "{") ||
        oldValue === "null"
      ) {
        newValue = JSON.parse(oldValue);
        obj[objKeys[i]] = newValue;
      }
    }

    return obj;
  };

  const getTeslaData = () => {
    const vehicle = props.vehicle;
    const vehicleObj = {
      // vehicle_details should never be user modified, vehicle_render can be.
      vehicle_details: {},
      vehicle_render: {},
    };

    if (vehicle.length > 0) {
      for (var i = 0; i < vehicle.length; i++) {
        let convertedValue = convertAllStringValues(vehicle[i]);
        vehicleObj.vehicle_details[vehicle[i].model] = convertedValue;
        vehicleObj.vehicle_render[vehicle[i].model] =
          convertedValue.default_optioned_vehicle;
      }
    }

    setTeslaModels(vehicleObj);
  };

  const changeVehicleColor = async (color, value) => { 

    const model = `${value}`.split(' ').map((iv , i)=> {
      if(i===0){
        return iv.toLowerCase();
      }
      return iv
    }).join('');

    setColor(color);
    
    setTeslaModels((vehicles) => {
      let newTeslaModels = { ...vehicles };
      // console.log('newTeslaModels: ',newTeslaModels)
      let renderedVehicle = vehicles.vehicle_render[model];
      let detailsObj = vehicles.vehicle_details[model];

      let colorObj = detailsObj["paint_options"][color]; // color should be "Pearl White" for example.
      let img = colorObj.image_paint; // store this in renderObj
      let newPrice = colorObj.price; // store this in renderObj 
      let currentPaintPrice = renderedVehicle["paint"][1];
      
      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentPaintPrice !== "included") {
        currentVehiclePrice -= currentPaintPrice;
      }

      if(newPrice !== "included"){
        currentVehiclePrice += newPrice;
      }
      
      newTeslaModels.vehicle_render[model][
        "cash_price"
      ] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["paint"] = [color, newPrice];
      newTeslaModels.vehicle_render[model]["img_paint"] = img;
      
      return newTeslaModels;
    });

  };

  // selectedWheel={selectedWheel}
  // selectedInterior={selectedInterior}
  // selectedBattery={selectedBattery}
  // selectedLayout={selectedLayout}

  return (
    <div className="app_Panel_container">
      <VehicleMenu
        setSelectedVehicleName={setSelectedVehicleName} 
      />

      {vehicleData.map((ele) => (
        <VehicleConfig
          removeModel={removeModel}
          vehicleContent={teslaModels} 
          selectedVehicle={ele} 
          selectedColor={selectedColor}
          changeVehicleColor={changeVehicleColor}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.vehiclesReducer.error,
    vehicle: state.vehiclesReducer.vehicle,
  };
}

export default connect(mapStateToProps, { getAllVehicles })(VehiclePanel);
