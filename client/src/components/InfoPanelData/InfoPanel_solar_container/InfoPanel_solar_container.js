import React, { Component } from 'react';
import './InfoPanel_solar_container.css';

class InfoPanel_solar_container extends Component {
  render() {
    return (
      <div className="InfoPanel_solar_container_div"> 
          <div className="infoPanel_roofTypes_div">
            <div className="infoPanel_section app_cursorPointer">ROOF TYPES</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_technical_div">
            <div className="infoPanel_section app_cursorPointer">INSTALLATION</div>
            <div className=""></div>
          </div>
      </div> 
    );
  }
}

export default InfoPanel_solar_container;