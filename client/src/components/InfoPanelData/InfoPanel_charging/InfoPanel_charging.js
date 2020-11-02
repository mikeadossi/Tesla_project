import React, { Component } from 'react';
import './InfoPanel_charging.css';

class InfoPanel_charging extends Component {
  render() {
    return (
      <div className="InfoPanel_charging_container">
        <div className="infoPanel_charging_div">Charging content</div>
        <div className="app_source_footer app_seeMore_btn app_noSelect infoPanel_charging_seeMore">See More</div>
      </div> 
    );
  }
}

export default InfoPanel_charging;