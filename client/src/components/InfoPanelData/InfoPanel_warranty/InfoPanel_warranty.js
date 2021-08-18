import React from 'react';
import './InfoPanel_warranty.css';

const InfoPanel_warranty = (props) => { 

  return (
    <div className="InfoPanel_charging_container">
      <div id="infoPanel_loaded_title">WARRANTY</div>
      <div className="infoPanel_section_data  infoPanel_warranty_container">

        {props.whichComponent === "vehicles" ? (
          <div>
            <ul className="InfoPanel_warranty_ul content_vehicle">
              <li>Model S and Model X – 8 years or 150,000 miles, whichever comes first, with minimum 70% retention of Battery capacity over the warranty period.</li>
              <li>Model 3 and Model Y Standard or Standard Range Plus - 8 years or 100,000 miles, whichever comes first, with minimum 70% retention of Battery capacity over the warranty period.</li>
              <li>Model 3 and Model Y Long Range or Performance - 8 years or 120,000 miles, whichever comes first, with minimum 70% retention of Battery capacity over the warranty period.</li>
            </ul>
            <div className="app_source_footer content_vehicle"><a href="https://www.tesla.com/support/vehicle-warranty" target="_blank" rel="noopener noreferrer">Vehicle Warranty</a></div>
          </div>
        ) : ("")}

        {props.whichComponent === "solar" ? (
          <div>
            <div className="InfoPanel_warranty_ul content_solar">
              <div>
                <div>25-Year Panel Performance Warranty</div>
                <div>Your solar panels are guaranteed by their manufacturer to at least 80% of nameplate power capacity for at least 25 years. At your request, Tesla will process your claim and perform any related labor at our cost.</div>
              </div>
              <div>
                <div>10-Year Comprehensive Warranty</div>
                <div>Your entire Tesla solar system is covered by a 10-year comprehensive warranty. For a period of at least 10 years, at your request Tesla, will process your claim and perform any related labor at our cost. This includes the following aspects of your solar system. For details and exclusions, you can check your specific purchase agreement.</div>
                <ul>
                  <li>Powerwall</li>
                  <li>Solar inverter</li>
                  <li>Roof mounting and leaks</li>
                </ul>
              </div>
            </div>
            <div className="content_solar"><a href="https://www.tesla.com/support/energy/solar-panels/learn/solar-service-warranty" target="_blank" rel="noopener noreferrer">Solar Warranty</a></div>
          </div>
        ) : ("")}
        
      </div>
    </div>
  );

}

export default InfoPanel_warranty;