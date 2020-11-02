import React, { Component } from 'react';
import './Solar.css';
import InfoPanel from '../InfoPanel/InfoPanel.js'; 
import SolarProductPanel from '../SolarProductPanel/SolarProductPanel.js'; 

class Solar extends Component {
  render() {
    return ( 
      <div className="solar_container">
          <div className="solar_info_panel app_displayFlex">
            <InfoPanel />
            <SolarProductPanel />
          </div>
      </div>  
    );
  }
}

export default Solar;