import React, { Component } from 'react';
import './InfoPanel.css';
import InfoPanel_locations_nearby from '../../components/InfoPanelData/InfoPanel_locations_nearby/InfoPanel_locations_nearby';

class InfoPanel extends Component {
  render() {
    return ( 
      <div className="infoPanel_container">
          <h3 className="infoPanel_title"> 
            INFORMATION
          </h3>
          <div className="infoPanel_payments_container">
            <div className="infoPanel_section app_cursorPointer">PAYMENTS</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_incentives_container">
            <div className="infoPanel_section app_cursorPointer">INCENTIVES</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_locations_container">
            <div className="infoPanel_section app_cursorPointer">LOCATIONS NEARBY</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_warranty_container">
            <div className="infoPanel_section app_cursorPointer">WARRANTY</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_charging_container">
            <div className="infoPanel_section app_cursorPointer">CHARGING</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_links_container">
            <div className="infoPanel_section app_cursorPointer">LINKS</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_section_data">
            <InfoPanel_locations_nearby />
          </div>
      </div>
    );
  }
}

export default InfoPanel;