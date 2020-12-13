import React, { Component, useState, useEffect } from "react";
import { createStore } from "redux";
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";
import { connect } from "react-redux";
import { getAllVehicles } from "../../config/actions/vehicleActions";

const VehiclePanel = (props) => {
  let [vehicleData, setVehicleData] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [vehicleContent, setVehicleContent] = useState({});
  const [teslaModels, setTeslaModels] = useState({});
  const [loadData, setLoadData] = useState(true);

  const vehicleChoice = (model) => {
    setVisibility(true);
    // setVehicleData([{ name: model }, ...vehicleData]);
  };

  useEffect(() => {
    props.getAllVehicles();
    getTeslaData();
  }, []);

  const removeModel = (model) => {
    const stateData = vehicleData;
    for (let i = 0; i < stateData.length; i++) {
      if (stateData[i].name === model && i > -1) {
        stateData.splice(i, 1);
      }
    }

    setVehicleData([...stateData]);
  };

  const getTeslaData = () => {
    const vehicle = props.vehicle;
    const vehicleObj = {};

    if (vehicle.length > 0) {
      for (var i = 0; i < vehicle.length; i++) {
        vehicleObj[vehicle[i].model] = vehicle[i];
      }
    }

    setTeslaModels(vehicleObj);
  };

  const getVehicleData = async (model) => {
    // TODO write code to get model data from state
  };

  return (
    <div className="app_Panel_container">
      <VehicleMenu
        vehicleData={vehicleData}
        vehicleChoice={vehicleChoice}
        getVehicleData={getVehicleData}
        setVehicleContent={setVehicleContent}
        setVehicleData={setVehicleData}
      />

      {vehicleData.map((ele) => (
        <VehicleConfig
          removeModel={removeModel}
          vehicleContent={vehicleContent}
          selectedVehicle={ele}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  console.log({ state });

  return {
    error: state.vehiclesReducer.error,
    vehicle: state.vehiclesReducer.vehicle,
  };
}

export default connect(mapStateToProps, { getAllVehicles })(VehiclePanel);
