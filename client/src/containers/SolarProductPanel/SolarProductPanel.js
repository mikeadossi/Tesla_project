import React, { Component } from 'react';
import './SolarProductPanel.css';
import SolarMenu from '../../components/SolarData/SolarMenu/SolarMenu';
import SolarConfig from '../../components/SolarData/SolarConfig/SolarConfig';

class SolarProductPanel extends Component {
  render() {
    return ( 
      <div className="app_Panel_container"> 
        <SolarMenu />
        <SolarConfig />
      </div>
    );
  }
}

export default SolarProductPanel;