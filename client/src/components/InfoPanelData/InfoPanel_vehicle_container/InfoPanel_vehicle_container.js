import React, { Component } from 'react';
import './InfoPanel_vehicle_container.css';

class InfoPanel_vehicle_container extends Component {
  render() {
    return (
      <div className="InfoPanel_vehicle_container_div">
          <div className="infoPanel_locations_div">
            <div className="infoPanel_section app_cursorPointer">LOCATIONS NEARBY</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_charging_div">
            <div className="infoPanel_section app_cursorPointer">CHARGING</div>
            <div className=""></div>
          </div>
      </div>
    );
  }
}

export default InfoPanel_vehicle_container;