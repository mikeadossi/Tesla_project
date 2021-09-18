import React from "react";
import "./VehicleMenu.css";
import ScrollUp from "../../ScrollUp/ScrollUp";

const VehicleMenu = ({setSelectedVehicleName, menuOptions, vehicleContainerRef, vehicleData}) => {
  
  const chooseAndSetVehice = (vehicle) => { 
    setSelectedVehicleName(vehicle);
  };

  const menu = menuOptions.length
  ? menuOptions
  : []; 


  return (
    <div className="app_Menu_container"> 
      {menuOptions.length ? <h3>Select Vehicle</h3> : <h3>To begin search for any US zip code or area code above.</h3>} 
      <div className="vehicleMenu_models app_displayFlex">
        {menu.map((option) => {
          return(<div className="app_Menu_btn app_noSelect select_Model_3" onClick={() => chooseAndSetVehice(option)}>{option}</div>)
        })}
      </div>
      <ScrollUp vehicleContainerRef={vehicleContainerRef} vehicleData={vehicleData}/>
    </div>
  );
};

export default VehicleMenu;
