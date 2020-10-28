import React, { Component } from 'react';
import './VehicleMenu.css';

class VehicleMenu extends Component {
  render() {
    return (
      <div className="vehicleMenu_container">
        <h3>Select Vehicle</h3>
        <div className="vehicleMenu_models">
            <div className="vehicleMenu_models_btn app_NoSelect select_Model_3">Model 3</div>
            <div className="vehicleMenu_models_btn app_NoSelect select_Model_S">Model S</div>
            <div className="vehicleMenu_models_btn app_NoSelect select_Model_X">Model X</div>
            <div className="vehicleMenu_models_btn app_NoSelect select_Model_Y">Model Y</div>
            <div className="vehicleMenu_models_btn app_NoSelect select_Cybertruck">Cybertruck</div>
            <div className="vehicleMenu_models_btn app_NoSelect select_Roadster">Roadster</div>
        </div>
      </div>
    );
  }
}

export default VehicleMenu;