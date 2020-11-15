import React, { Component } from 'react';
import './InfoPanel_solar_container.css';

const InfoPanel_solar_container = (props) => { 
  return (
    <div className="InfoPanel_solar_container_div"> 
        <div className="infoPanel_roofTypes_div">
          <div className="infoPanel_section app_cursorPointer" onClick={()=>props.showComponent("InfoPanel_roofTypes")}>ROOF TYPES</div>
          <div className=""></div>
        </div>
        <div className="infoPanel_technical_div">
          <div className="infoPanel_section app_cursorPointer" onClick={()=>props.showComponent("InfoPanel_installation")}>INSTALLATION</div>
          <div className=""></div>
        </div>
    </div> 
  ); 
}

export default InfoPanel_solar_container;