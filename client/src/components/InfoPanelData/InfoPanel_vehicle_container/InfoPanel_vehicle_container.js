import React, { Component } from 'react';
import './InfoPanel_vehicle_container.css'; 

const InfoPanel_vehicle_container = (props) => {

  return (
    <div className="InfoPanel_vehicle_container_div">
        <div className="infoPanel_locations_div">
          <div className="infoPanel_section app_cursorPointer" onClick={()=>props.showComponent("InfoPanel_locations_nearby")}>LOCATIONS NEARBY</div> 
        </div>
        <div className="infoPanel_charging_div">
          <div className="infoPanel_section app_cursorPointer" onClick={()=>props.showComponent("InfoPanel_charging")}>CHARGING</div> 
        </div>
    </div>
  ); 
}

export default InfoPanel_vehicle_container;