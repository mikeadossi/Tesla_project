import React, { Component } from 'react';
import './InfoPanel.css';
import InfoPanel_locations_nearby from '../../components/InfoPanelData/InfoPanel_locations_nearby/InfoPanel_locations_nearby';
import InfoPanel_payments from '../../components/InfoPanelData/InfoPanel_payments/InfoPanel_payments';
import InfoPanel_incentives from '../../components/InfoPanelData/InfoPanel_incentives/InfoPanel_incentives';
import InfoPanel_warranty from '../../components/InfoPanelData/InfoPanel_warranty/InfoPanel_warranty';
import InfoPanel_links from '../../components/InfoPanelData/InfoPanel_links/InfoPanel_links';
import InfoPanel_charging from '../../components/InfoPanelData/InfoPanel_charging/InfoPanel_charging';

class InfoPanel extends Component {
  render() {
    return ( 
      <div className="infoPanel_container">
          <h3 className="infoPanel_title"> 
            INFORMATION
          </h3>
          <div className="infoPanel_payments_div">
            <div className="infoPanel_section app_cursorPointer">PAYMENTS</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_incentives_div">
            <div className="infoPanel_section app_cursorPointer">INCENTIVES</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_locations_div">
            <div className="infoPanel_section app_cursorPointer">LOCATIONS NEARBY</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_charging_div">
            <div className="infoPanel_section app_cursorPointer">CHARGING</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_warranty_div">
            <div className="infoPanel_section app_cursorPointer">WARRANTY</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_links_div">
            <div className="infoPanel_section app_cursorPointer">LINKS</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_section_data">
            <InfoPanel_charging />
          </div>
      </div>
    );
  }
}

export default InfoPanel;