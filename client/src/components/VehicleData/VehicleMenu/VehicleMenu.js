import React, { Component, useState } from "react";
import "./VehicleMenu.css";
import ScrollUp from "../../ScrollUp/ScrollUp";

const VehicleMenu = ({ vehicleChoice, getVehicleData, setVehicleContent }) => {
  const defaultVehicle = "";
  const [selectedVehicle, setVehicle] = useState(defaultVehicle);


  const chooseAndSetVehice = async (vehicle) => {
    let str = vehicle.replace(/ /g,'');
    str = str.toLowerCase();
    let data = await getVehicleData(str); 
    setVehicleContent(data);
    vehicleChoice(vehicle);
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
