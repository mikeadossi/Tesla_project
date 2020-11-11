import React, { Component } from 'react';
import './InfoPanel_locations_nearby.css';

class InfoPanel_locations_nearby extends Component {
  render() {
    return ( 
      <div className="infoPanel_locations_container">
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
            <div className="infoPanel_location_findUs"><a className="" href="https://www.tesla.com/findus?search=90210%2C%20USA&bounds=34.151956579194035%2C-118.30060511874998%2C34.05402148312065%2C-118.52033168124998&zoom=13&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger" target="_blank" rel="noopener noreferrer">Tesla Find Us</a></div>
            <div className="app_seeMore_btn infoPanel_locations_seeMore">See More</div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoPanel_locations_nearby;