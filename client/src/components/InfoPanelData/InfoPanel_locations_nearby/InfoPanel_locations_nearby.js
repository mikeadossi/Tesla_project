import React from 'react';
import './InfoPanel_locations_nearby.css';

const InfoPanel_locations_nearby = ({ 
  vehicleOrder, 
  stateAbbr, 
  showInfoModal 
}) => { 

  return ( 
    <div className="InfoPanel_charging_container">
      <div id="infoPanel_loaded_title">LOCATIONS</div>
      <div className="infoPanel_section_data infoPanel_locations_container">
        <div>
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

          <div className="app_source_footer">
            <div className="infoPanel_location_findUs"><a className="" href="https://www.tesla.com/findus" target="_blank" rel="noopener noreferrer">Tesla Find Us</a></div>
            <div 
              className="app_seeMore_btn infoPanel_locations_seeMore"
              onClick={() => {showInfoModal("locationsModal")}}
            >
              See More
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default InfoPanel_locations_nearby;