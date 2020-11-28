import React, { Component } from 'react';
import './Vehicles.css';
import InfoPanel from '../InfoPanel/InfoPanel.js'; 
import InfoModal from '../InfoModal/InfoModal.js'; 
import VehiclePanel from '../VehiclePanel/VehiclePanel.js';

const Vehicles = (props) => {
  const {statedata} = props;

  return ( 
    <div className="vehicles_container app_pageHeight">
        <div className="vehicles_info_panel app_displayFlex">
          <InfoPanel whichComponent={"vehicles"} />
          <VehiclePanel /> 
        </div>
    </div>  
  ); 
}

export default Vehicles;