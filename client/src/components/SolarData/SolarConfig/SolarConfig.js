import React, { Component } from 'react';
import './SolarConfig.css';
import SolarPanels from '../SolarPanels/SolarPanels';
import SolarRoof from '../SolarRoof/SolarRoof';
import SolarPowerWall from '../SolarPowerWall/SolarPowerWall';

class SolarConfig extends Component {
  render() {
    return (
      <div className="app_Config_container app_inlineFlex">
        <SolarPanels />
        <SolarPowerWall />
      </div>
    );
  }
}

export default SolarConfig;