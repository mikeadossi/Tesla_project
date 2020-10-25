import React, { Component } from 'react';
import './LocationDetails.css'; 

class LocationDetails extends Component {
  render() {
    return ( 
      <div className="locationDetails_container">
        <div className="locationDetails_container locationDetails_container_1">
          <div className="LocationDetails_zipcode LocationDetails_element">90210</div>
          <div className="LocationDetails_city LocationDetails_element">Beverly Hills, CA</div>
          <div className="LocationDetails_county LocationDetails_element">Alameda county</div>
        </div> 
        <div className="locationDetails_container locationDetails_container_2">
          <div className="locationDetails_areacode">(213)</div>
          <div className="locationDetails_areacode_subtext">area code</div> 
        </div>
        <div className="locationDetails_container locationDetails_container_3">
          <div className="locationDetails_time_digital">2:39 AM</div>
          <div className="locationDetails_timezone">Pacific Time</div>
        </div>
        <div className="locationDetails_container locationDetails_container_4">
          <div className="locationDetails_day">Monday</div>
          <div className="locationDetails_date">Oct 26, 2020</div>
        </div>
        <div className="locationDetails_container locationDetails_container_4">
          <div className="locationDetails_region_name">BAY AREA</div>
          <div className="locationDetails_region_tag">Region</div>
        </div>
        <div className="locationDetails_container locationDetails_container_5">
          <div className="locationDetails_project_sun">proj. sun</div>
          <div className="locationDetails_weather">weather</div>
        </div>
      </div>  
    );
  }
}

export default LocationDetails;