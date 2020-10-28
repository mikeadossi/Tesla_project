import React, { Component } from 'react';
import './Vehicles.css';
import InfoPanel from '../InfoPanel/InfoPanel.js'; 
import InfoModal from '../InfoModal/InfoModal.js'; 
import VehiclePanel from '../VehiclePanel/VehiclePanel.js'; 


class Vehicles extends Component {
  render() {
    return ( 
      <div className="vehicles_container">
          <div className="vehicles_info_panel">
            <InfoPanel /> 
            <InfoModal />
          </div>
      </div>  
    );
  }
}

export default Vehicles;