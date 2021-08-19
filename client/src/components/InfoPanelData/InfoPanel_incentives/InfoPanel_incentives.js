import React from 'react';
import './InfoPanel_incentives.css';

const InfoPanel_incentives = (props) => {  

  return (
    <div className="InfoPanel_charging_container">
      <div id="infoPanel_loaded_title">INCENTIVES</div>
      <div className="infoPanel_section_data">
        {props.whichComponent === "vehicles" ? (
          <p className="InfoPanel_incentives_container content_vehicle">
            {props.vehicleIncentives}
          </p>
        ) : ("")}
        {props.whichComponent === "solar" ? (
          <p className="InfoPanel_incentives_container content_solar">
            {props.stateAbbr}
            {props.solarIncentives}
          </p>
        ) : ("")}
        <div className="app_source_footer"><a href="https://www.tesla.com/support/vehicle-warranty" target="_blank" rel="noopener noreferrer">Source</a></div>
      </div>
    </div>
  );
}

export default InfoPanel_incentives;