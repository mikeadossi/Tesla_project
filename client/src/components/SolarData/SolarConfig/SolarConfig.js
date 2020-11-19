import React, { Component } from 'react';
import './SolarConfig.css';
import SolarPanels from '../SolarPanels/SolarPanels';
import SolarRoof from '../SolarRoof/SolarRoof';
import SolarPowerWall from '../SolarPowerWall/SolarPowerWall';
import SolarAddProduct from '../SolarAddProduct/SolarAddProduct';

class SolarConfig extends Component {
  render() {
    return (
      <div className="app_Config_container app_inlineFlex">
        <SolarPanels />
        <div className="app_config_border"></div>
        <SolarPowerWall />
      </div>
    );
  }
}

export default SolarConfig;