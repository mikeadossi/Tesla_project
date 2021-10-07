import React from 'react';
import './InfoPanel_charging.css';

const InfoPanel_charging = () => {
    return (
      <div className="InfoPanel_charging_container">
        <div id="infoPanel_loaded_title">CHARGING</div>
        <div className="infoPanel_section_data">
          <div className="infoPanel_charging_div">Charging content</div>
          <div className="app_source_footer app_seeMore_btn app_noSelect infoPanel_charging_seeMore">See More</div>
        </div>
      </div>
    );
}

export default InfoPanel_charging;