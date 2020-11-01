import React, { Component } from 'react';
import './VehiclePanel.css';
import VehicleMenu from '../../components/VehicleData/VehicleMenu/VehicleMenu';
import VehicleConfig from '../../components/VehicleData/VehicleConfig/VehicleConfig';

class VehiclePanel extends Component {
  render() {
    return ( 
      <div className="app_Panel_container">
        <VehicleMenu />
        <VehicleConfig />
      </div>  
    );
  }
}

export default VehiclePanel;