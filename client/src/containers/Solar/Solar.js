import React, { Component } from 'react';
import './Solar.css';
import InfoPanel from '../InfoPanel/InfoPanel.js'; 
import SolarProductPanel from '../SolarProductPanel/SolarProductPanel.js'; 

const Solar = () => { 
  return ( 
    <div className="solar_container">
        <div className="solar_info_panel app_displayFlex">
          <InfoPanel whichComponent={"solar"} />
          <SolarProductPanel />
        </div>
    </div>  
  ); 
}

export default Solar;