import React, { Component } from 'react';
import './SolarConfig.css';
import SolarPanels from '../SolarPanels/SolarPanels';
import SolarRoof from '../SolarRoof/SolarRoof';
import SolarPowerWall from '../SolarPowerWall/SolarPowerWall';
import SolarAddProduct from '../SolarAddProduct/SolarAddProduct';

const SolarConfig = ({
  recommendedProducts,
  solarRecommendations,
  setRecommendedProducts,
  panelOptions,
  recommendedSize,
}) => { 
  return (
    <div className="app_Config_container app_inlineFlex">
      <SolarPanels 
        recommendedProducts={recommendedProducts}
        solarRecommendations={solarRecommendations}
        setRecommendedProducts={setRecommendedProducts}
        panelOptions={panelOptions}
        recommendedSize={recommendedSize}
      />
      <div className="app_config_border"></div>
      <SolarPowerWall recommendedProducts={recommendedProducts} />
    </div>
  ); 
}

export default SolarConfig;