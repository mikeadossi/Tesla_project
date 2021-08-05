import React, { Component } from 'react';
import './SolarConfig.css';
import SolarPanels from '../SolarPanels/SolarPanels';
import SolarRoof from '../SolarRoof/SolarRoof';
import SolarPowerWall from '../SolarPowerWall/SolarPowerWall';
import SolarAddProduct from '../SolarAddProduct/SolarAddProduct';

const SolarConfig = (recommendedProducts) => { 
  return (
    <div className="app_Config_container app_inlineFlex">
      <SolarPanels recommendedProducts={recommendedProducts} />
      <div className="app_config_border"></div>
      <SolarPowerWall recommendedProducts={recommendedProducts} />
    </div>
  ); 
}

export default SolarConfig;