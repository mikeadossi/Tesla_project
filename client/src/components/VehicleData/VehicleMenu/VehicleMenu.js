import React, { Component, useState, useEffect } from "react";
import "./VehicleMenu.css";
import ScrollUp from "../../ScrollUp/ScrollUp";

const VehicleMenu = ({ vehicleData, getVehicleData, setVehicleContent, setVehicleData , retrievedVehicleData, setSelectedVehicleName}) => {
  const defaultVehicle = "";
  const [selectedVehicle, setVehicle] = useState(defaultVehicle);
  const [alreadyInState, setAlreadyInState] = useState(false);
  
  const chooseAndSetVehice = async (vehicle) => {
    setSelectedVehicleName(vehicle);
  }; 

  return (
    <div className="app_Menu_container">
      <h3>Select Vehicle</h3>
      <div className="vehicleMenu_models app_displayFlex">
        <div className="app_Menu_btn app_noSelect select_Model_3" onClick={() => chooseAndSetVehice("Model 3")}>Model 3</div>
        <div className="app_Menu_btn app_noSelect select_Model_S" onClick={() => chooseAndSetVehice("Model S")}>Model S</div>
        <div className="app_Menu_btn app_noSelect select_Model_X" onClick={() => chooseAndSetVehice("Model X")}>Model X</div>
        <div className="app_Menu_btn app_noSelect select_Model_Y" onClick={() => chooseAndSetVehice("Model Y")}>Model Y</div>
      </div>
      <ScrollUp />
    </div>
  );
};

export default VehicleMenu;
