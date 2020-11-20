import React, { Component } from 'react';
import './LocationDetails.css'; 

class LocationDetails extends Component {
  render() {
    return ( 
      <div className="locationDetails_container app_displayFlex">
        <div className="locationDetails_subcontainers locationDetails_subcontainer_1">
          <div className="LocationDetails_zipcode LocationDetails_element">90210</div>
          <div className="LocationDetails_city LocationDetails_element">Beverly Hills, CA</div>
          <div className="LocationDetails_county LocationDetails_element">Los Angeles county</div>
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="locationDetails_subcontainers locationDetails_subcontainer_2">
          <div className="locationDetails_areacode">(213)</div>
          <div className="locationDetails_areacode_subtext">area code</div> 
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="locationDetails_subcontainers locationDetails_subcontainer_3">
          <div className="locationDetails_time_digital">12:39 PM</div>
          <div className="locationDetails_timezone">Pacific Time</div>
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="locationDetails_subcontainers locationDetails_subcontainer_4">
          <div className="locationDetails_day">Monday</div>
          <div className="locationDetails_date">Oct. 26, 2020</div>
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="locationDetails_subcontainers locationDetails_subcontainer_4">
          <div className="locationDetails_region_name">BAY AREA</div>
          <div className="locationDetails_region_tag">Region</div>
        </div>

        <div className="app_locationDetails_border"></div>
        
        <div className="locationDetails_subcontainers locationDetails_subcontainer_5">
          <a className="locationDetails_icons locationDetails_projectSun_container">
            <div>Project Sun</div>
            <img className="locationDetails_projectSun" src="../../../../images/Nav/project_sunroof_icon.png" alt="project sun icon" />
          </a>
          <a className="locationDetails_icons">
            <div>Weather</div>
            <img className="locationDetails_weather" src="../../../../images/Nav/weather_icon.svg" alt="weather icon" />
          </a>
        </div>
      </div>  
    );
  }
}

export default LocationDetails;