import React from "react";
import "./VehicleMenu.css";
import ScrollUp from "../../ScrollUp/ScrollUp";

const VehicleMenu = ({setSelectedVehicleName, menuOptions, vehicleData}) => {
  
  const chooseAndSetVehice = async (vehicle) => {
    setSelectedVehicleName(vehicle);
  };

  const menu = menuOptions.length
  ? menuOptions
  : []; 

  return (
    <div className="app_Menu_container">
      <h3>Select Vehicle</h3>
      <div className="vehicleMenu_models app_displayFlex">
        {menu.map((option) => {
          return(<div className="app_Menu_btn app_noSelect select_Model_3" onClick={() => chooseAndSetVehice(option)}>{option}</div>)
        })}
      </div>
      <ScrollUp vehicleData={vehicleData}/>
    </div>
  );
};

export default VehicleMenu;
