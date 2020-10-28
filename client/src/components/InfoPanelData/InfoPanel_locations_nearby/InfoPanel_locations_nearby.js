import React, { Component } from 'react';
import './InfoPanel_locations_nearby.css';

class InfoPanel_locations_nearby extends Component {
  render() {
    return ( 
      <div className="infoPanel_locations_container">
       <div className="infoPanel_location_div">
         <h4 className="infoPanel_location_title">SHOWROOM</h4>
         <p className="infoPanel_location_text">Santa Monica Place</p>
         <p className="infoPanel_location_text">Los Angeles - Century City</p>
       </div>
       <div className="infoPanel_location_div">
         <h4 className="infoPanel_location_title">SERVICE CENTER</h4>
         <p className="infoPanel_location_text">Santa Monica Place</p>
         <p className="infoPanel_location_text">Los Angeles - Century City</p>
       </div>
       <div className="infoPanel_location_div">
         <h4 className="infoPanel_location_title">CHARGING LOCATION</h4>
         <p className="infoPanel_location_text">Santa Monica Place</p>
         <p className="infoPanel_location_text">Los Angeles - Century City</p>
       </div>
      </div>
    );
  }
}

export default InfoPanel_locations_nearby;