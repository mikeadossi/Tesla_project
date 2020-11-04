import React, { Component } from 'react';
import './InfoPanel.css';
import InfoPanel_locations_nearby from '../../components/InfoPanelData/InfoPanel_locations_nearby/InfoPanel_locations_nearby';
import InfoPanel_payments from '../../components/InfoPanelData/InfoPanel_payments/InfoPanel_payments';
import InfoPanel_incentives from '../../components/InfoPanelData/InfoPanel_incentives/InfoPanel_incentives';
import InfoPanel_warranty from '../../components/InfoPanelData/InfoPanel_warranty/InfoPanel_warranty';
import InfoPanel_links from '../../components/InfoPanelData/InfoPanel_links/InfoPanel_links';
import InfoPanel_charging from '../../components/InfoPanelData/InfoPanel_charging/InfoPanel_charging';
import InfoPanel_solar_container from '../../components/InfoPanelData/InfoPanel_solar_container/InfoPanel_solar_container';
import InfoPanel_vehicle_container from '../../components/InfoPanelData/InfoPanel_vehicle_container/InfoPanel_vehicle_container';
import InfoPanel_neutral_container from '../../components/InfoPanelData/InfoPanel_neutral_container/InfoPanel_neutral_container';

class InfoPanel extends Component {
  render() {
    return ( 
      <div className="infoPanel_container">
          <h3 className="infoPanel_title"> 
            INFORMATION
          </h3> 
          <InfoPanel_vehicle_container />
          <InfoPanel_neutral_container />
          <div className="infoPanel_section_data">
            <InfoPanel_links />
          </div>
      </div>
    );
  }
}

export default InfoPanel;