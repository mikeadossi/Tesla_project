import React, { Component, useState, useEffect } from "react";
import { createStore } from "redux";
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";
import { connect } from "react-redux";
import { getAllVehicles } from "../../config/actions/vehicleActions";

const VehiclePanel = (props) => {
  let [vehicleData, setVehicleData] = useState([]);
  const [vehicleContent, setVehicleContent] = useState({});
  const [teslaModels, setTeslaModels] = useState({});
  const [selectedVehicleName, setSelectedVehicleName] = useState("");

  useEffect(() => {
    setVehicleData((data) => {
      if (!selectedVehicleName) return data; // ensures vehicleData array has no starting empty value

      let newVehicleNames = data.filter(
        (modelName) => modelName !== selectedVehicleName
      ); // checks for and removes vehicle from array
      newVehicleNames = [selectedVehicleName, ...newVehicleNames]; // sets selected vehicle atop vehicleData array
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

  const addTowHitch = (trim,value) => { //trim=long_range value=model3
      const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    setTeslaModels((vehicles) => {
      let newTeslaModels = { ...vehicles };
      const renderedVehicle = vehicles.vehicle_render[model];
      const towHitchPrice = vehicles.vehicle_details[model][trim]["tow_hitch"]["price"]; // ex: 1000
      let tow_hitch = renderedVehicle["tow_hitch"];
      let currentVehiclePrice = renderedVehicle["cash_price"];

      if(tow_hitch !== null && tow_hitch === "optional"){ 
        currentVehiclePrice += towHitchPrice;
        tow_hitch = towHitchPrice;
      } else if(tow_hitch !== null && tow_hitch === towHitchPrice) {
        currentVehiclePrice -= towHitchPrice;
        tow_hitch = "optional";
      }

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["tow_hitch"] = tow_hitch;

      return newTeslaModels;
    })
  }

  const changeVehicleLayout = async (trim, layoutSelected, value) => { // ex: trim="long_range" layoutSelected="Five Seat Interior" value="modelX"
    const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    setTeslaModels((vehicles) => {
      let newTeslaModels = { ...vehicles };
      let renderedVehicle = vehicles.vehicle_render[model];
      let layoutOptionsObj = vehicles.vehicle_details[model][trim]["layout"][layoutSelected]; // ex: { price: "included" }

      let newPrice = layoutOptionsObj["price"]; 
      let currentLayoutPrice = renderedVehicle["layout"][2];

      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentLayoutPrice !== "included") {
        currentVehiclePrice -= currentLayoutPrice;
      }

      if (newPrice !== "included") {
        currentVehiclePrice += newPrice;
      }

      let altName = layoutOptionsObj["altName"];

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["layout"] = [
        layoutSelected,
        altName, 
        newPrice
      ];

      return newTeslaModels;
    })
  };
   

  const changeVehicleBattery = async (batterySelected, value) => {
    const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    setTeslaModels((vehicles) => {
      let newTeslaModels = { ...vehicles };
      // we want to get and change the battery, and all other related render options
      let renderedVehicle = vehicles.vehicle_render[model];
      let batteryOptionsObj = vehicles.vehicle_details[model][batterySelected];
      const wheelObject = batteryOptionsObj["wheel"];
      const interiorObject = batteryOptionsObj["interior"];
      let img = batteryOptionsObj["image_trim"]; // ex: "_std"

      let newPrice = batteryOptionsObj.purchase_price;

      let currentBatteryPrice = renderedVehicle["battery"][2];
      let batteryName = batteryOptionsObj["specs"]["Battery"];

      let currentVehiclePrice = renderedVehicle["cash_price"];
      currentVehiclePrice -= currentBatteryPrice;
      currentVehiclePrice += newPrice;

      const currentWheelSelected = renderedVehicle["wheel"][0]; // ex: "18 inch Aero Wheels"
      const currentWheelPrice = renderedVehicle["wheel"][1];
      const wheelKeysArr = Object.keys(wheelObject);
      const newBatteryStandardWheelSize =
        wheelObject[wheelKeysArr[0]]["image_wheel"]; // ex: "_18"
      const newBatteryStandardWheelName = wheelKeysArr[0]; // ex: "18 inch Aero Wheels"
      const newBatteryStandardWheelPrice =
        wheelObject[wheelKeysArr[0]]["price"]; // ex: "included"

      // If user selected wheel needs to be replaced it is handled just below
      if (!wheelKeysArr.includes(currentWheelSelected)) {
        const newWheels = [
          newBatteryStandardWheelName,
          newBatteryStandardWheelPrice,
        ]; // ex: ["18 inch Aero Wheels","included"]
        newTeslaModels.vehicle_render[model]["wheel"] = newWheels;
        newTeslaModels.vehicle_render[model][
          "image_wheels"
        ] = newBatteryStandardWheelSize;
      }
      // If both prices are the same (such as both return "included") make no price changes, otherwise make changes.


      if (newBatteryStandardWheelPrice === "included" && currentWheelPrice !== "included") {
        currentVehiclePrice -= currentWheelPrice;
      } else if (
        currentWheelPrice === "included" &&
        newBatteryStandardWheelPrice !== "included"
      ) {
        currentVehiclePrice += newBatteryStandardWheelPrice;
      } else if (currentWheelPrice !== newBatteryStandardWheelPrice){
        currentVehiclePrice -= currentWheelPrice;
        currentVehiclePrice += newBatteryStandardWheelPrice;
      }

      // set new vehicle_image in state
      let vehicleImage = renderedVehicle["vehicle_image"]; // ex: "model3_white_std_18"
      let wheelName = renderedVehicle["wheel"][0];
      const newWheelSize = batteryOptionsObj["wheel"][wheelName]["image_wheel"];
      vehicleImage = vehicleImage.split("_");
      vehicleImage[2] = img.split("_")[1]; // ex: "perf"
      if (model === "modelS" && vehicleImage[2] == "plaid") {
        vehicleImage[2] = "lr";
      }
      vehicleImage[3] = newWheelSize.split("_")[1];
      vehicleImage = vehicleImage.join("_"); // ex: "model3_white_perf_20"

      // Handle interior state change
      const currentInteriorName = renderedVehicle["interior"][0]; // ex: "All Black"
      const currentInteriorImage = renderedVehicle["interior"][1]; // ex: "ui_bundle_black"
      const newBatteryImage = interiorObject[currentInteriorName]["image"]; // ex: "ui_bundle_black_cf"

      if (newBatteryImage !== currentInteriorImage) {
        newTeslaModels.vehicle_render[model]["interior"][1] = newBatteryImage;
      }

      newTeslaModels.vehicle_render[model]["image_wheels"] =
        wheelObject["image_wheel"]; // ex: "_18"
      newTeslaModels.vehicle_render[model]["zero_to_sixty_seconds"] =
        batteryOptionsObj["zero_to_sixty"];
      newTeslaModels.vehicle_render[model]["mph"] =
        batteryOptionsObj["topspeed_mph"];
      newTeslaModels.vehicle_render[model]["miles_range"] =
        batteryOptionsObj["miles_range"];
      newTeslaModels.vehicle_render[model]["vehicle_image"] = vehicleImage;
      newTeslaModels.vehicle_render[model]["image_trim"] = img;
      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["battery"] = [
        batteryName,
        batterySelected,
        newPrice,
      ];

      return newTeslaModels;
    });
  };

  const changeVehicleInterior = async (trim, interiorSelected, value) => {
    const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    setTeslaModels((vehicles) => {
      let newTeslaModels = { ...vehicles };
      let renderedVehicle = vehicles.vehicle_render[model];
      let interiorOptionsObj = vehicles.vehicle_details[model][trim]["interior"][interiorSelected];

      let newPrice = interiorOptionsObj.price;
      let img = interiorOptionsObj.image;
      let currentInteriorPrice = renderedVehicle["interior"][2];

      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentInteriorPrice !== "included") {
        currentVehiclePrice -= currentInteriorPrice;
      }

      if (newPrice !== "included") {
        currentVehiclePrice += newPrice;
      }

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["interior"] = [
        interiorSelected,
        img,
        newPrice,
      ];

      return newTeslaModels;
    });
  };

  const changeVehicleWheel = async (trim, wheelSelected, value) => {
    const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    setTeslaModels((vehicles) => {
      let newTeslaModels = { ...vehicles };
      let renderedVehicle = vehicles.vehicle_render[model];
      let detailsObj = vehicles.vehicle_details[model][trim];

      // let colorObj = detailsObj["paint_options"][color];
      let wheelObj = detailsObj["wheel"][wheelSelected]; // wheel should be "18 inch Aero Wheels" for example. 
      let img = wheelObj.image_wheel; // store this in renderObj 
      let newPrice = wheelObj.price; // store this in renderObj
      let currentWheelPrice = renderedVehicle["wheel"][1];

      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentWheelPrice !== "included") {
        currentVehiclePrice -= currentWheelPrice;
      }

      if (newPrice !== "included") {
        currentVehiclePrice += newPrice;
      }

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["wheel"] = [wheelSelected, newPrice];
      newTeslaModels.vehicle_render[model]["image_wheels"] = img;
      const currentImage =
        newTeslaModels.vehicle_render[model]["vehicle_image"]; // ex: "model3_white_std_18"
      const currentWheel = currentImage.split("_")[3]; // ex: "_19"
      const imgNoUnderscore = img.split("_")[1]; // ex: "19"
      const newImage = currentImage.replace(currentWheel, imgNoUnderscore); // ex: "model3_white_std_19"
      newTeslaModels.vehicle_render[model]["vehicle_image"] = newImage;

      return newTeslaModels;
    });
  };

  const changeVehicleColor = async (color, value) => {
    const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    setTeslaModels((vehicles) => {
      let newTeslaModels = { ...vehicles };
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

      if (newPrice !== "included") {
        currentVehiclePrice += newPrice;
      }

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["paint"] = [color, newPrice];
      newTeslaModels.vehicle_render[model]["image_paint"] = img;
      const currentImage =
        newTeslaModels.vehicle_render[model]["vehicle_image"]; // ex: "model3_white_std_18"
      const currentPaint = currentImage.split("_")[1];
      const imgNoUnderscore = img.split("_")[1];
      const newImage = currentImage.replace(currentPaint, imgNoUnderscore);
      newTeslaModels.vehicle_render[model]["vehicle_image"] = newImage;

      return newTeslaModels;
    });
  };

  // selectedWheel={selectedWheel}
  // selectedInterior={selectedInterior}
  // selectedBattery={selectedBattery}
  // selectedLayout={selectedLayout}
  // selectedColor={selectedColor}

  return (
    <div className="app_Panel_container">
      <VehicleMenu setSelectedVehicleName={setSelectedVehicleName} />

      {vehicleData.map((ele) => (
        <VehicleConfig
          removeModel={removeModel}
          vehicleContent={teslaModels}
          selectedVehicle={ele}
          changeVehicleColor={changeVehicleColor}
          changeVehicleWheel={changeVehicleWheel}
          changeVehicleInterior={changeVehicleInterior}
          changeVehicleLayout={changeVehicleLayout}
          changeVehicleBattery={changeVehicleBattery}
          addTowHitch={addTowHitch}
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
