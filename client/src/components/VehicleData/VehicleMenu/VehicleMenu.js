import React, { Component } from 'react';
import './VehicleMenu.css';
import ScrollUp from '../../ScrollUp/ScrollUp';

const VehicleMenu = ({vehicle}) => {

  const defaultVehicle = '';
  const [selectedVehicle, setVehicle] = React.useState(defaultVehicle);

  return (
    <div className="app_Menu_container">
      <h3>Select Vehicle</h3>
      <div className="vehicleMenu_models app_displayFlex">
          <div className="app_Menu_btn app_noSelect select_Model_3" onClick={()=>vehicle("model-3")}>Model 3</div>
          <div className="app_Menu_btn app_noSelect select_Model_S" onClick={()=>vehicle("model-s")}>Model S</div>
          <div className="app_Menu_btn app_noSelect select_Model_X" onClick={()=>vehicle("model-x")}>Model X</div>
          <div className="app_Menu_btn app_noSelect select_Model_Y" onClick={()=>vehicle("model-y")}>Model Y</div>
          <div className="app_Menu_btn app_noSelect select_Cybertruck" onClick={()=>vehicle("cybertruck")}>Cybertruck</div>
          <div className="app_Menu_btn app_noSelect select_Roadster" onClick={()=>vehicle("roadster")}>Roadster</div>
      </div>
      < ScrollUp />
    </div>
  );
}

export default VehicleMenu;