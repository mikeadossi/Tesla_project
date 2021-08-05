import React, { Component } from 'react';
import './SolarPowerWall.css';

const SolarPowerWall = (recommendedProducts) => { 
  return (
    <div className="app_columns_width vehicleConfig_column2">
        <div className="app_configTitle app_displayFlex">
          <div className="app_productName">Powerwall</div>
        </div> 
        <div className="app_Solar_Img_container solarPowerWall_Img_container">
            <div className="solar_image_container app_solar_image_container">
              <img className="solar_img" src="../../../../images/solar/powerwall.png" alt="powerwall image"></img>
            </div>

            <div className="app_Config_specs_container app_Solar_specs_container">
              <div className="app_Config_spec vehicleConfig_range">Recommended: <span>2 Powerwalls</span></div>
              <div className="app_Config_spec vehicleConfig_range"><span>10 Powerwalls</span> Cost: $<span>100,000</span></div>
              <div className="app_Config_spec vehicleConfig_topSpeed"><span>2 Powerwalls</span> = <span>1</span> day backup</div>
            </div> 
        </div>

        <div className="app_Solar_kw_div">
            <div className="app_displayFlex">
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_4kw">1</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_8kw">2</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_12kw">3</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_16kw">4</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_4kw">5</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_8kw">6</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_12kw">7</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_16kw">8</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_12kw">9</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_16kw">10</div>
            </div>
        </div>
        <div className="app_Solar_costs_container">
              <div className="app_displayFlex app_Solar_selectPymt_div">
                  <div className="app_Solar_selectPymt_btn">Cash</div>
                  <div className="app_Solar_selectPymt_btn">Loan</div> 
              </div>
              <div className="solarPowerWall_pricing_container"> 
                  <div className="app_Solar_cost_div">
                      <span className="app_inline-block">2 Powerwalls</span>
                      <span className="app_inline-block app_Solar_cost">$16,400</span>
                  </div>
                  <div className="app_Solar_cost_div">
                      <span className="app_inline-block">Gateway</span>
                      <span className="app_inline-block app_Solar_cost">$4,264</span>
                  </div>
                  <div className="app_Solar_cost_div">
                      <span className="app_inline-block">Power Installation</span>
                      <span className="app_inline-block app_Solar_cost">$4,100</span>
                  </div>
                  <div className="app_Solar_cost_div">
                      <span className="app_inline-block">Cash Price</span>
                      <span className="app_inline-block app_Solar_cost">$10,000</span>
                  </div>
                  <div className="app_Solar_cost_div">
                      <span className="app_inline-block">Federal Tax Credit</span>
                      <span className="app_inline-block app_Solar_cost">-$1,000</span>
                  </div>
                  <div className="app_Solar_cost_div">
                      <span className="app_inline-block">Price After Incentives (excludes sales tax)</span>
                      <span className="app_inline-block app_Solar_cost">$100,000</span>
                  </div>
              </div>
        </div>

        <div className="app_Solar_additions_container">
          <div className="app_padding_bottom_10px">Add Future Purchase</div>
          <div>
              <div className="app_Solar_additions_select_div">
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item">Model 3</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item">Model S</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item">Model X</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item">Model Y</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Electric Water Heater</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Heat Pump Water Heater (50–75 gal)</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Heat Pump Water Heater (>75 gal)</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Instantaneous (110 v 29 amp) @1gpm 70°F</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Instantaneous (240v 50amp) @2.5gpm 83°F</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Energy Star Refrigerator 14 cu. ft.</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Energy Star Refrigerator 25 cu. ft.</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Refrigerator frost-free, 15 cu. ft. (1996)</div>
                <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Freezer (manual defrost), 15 cu. ft.</div> 
              </div>
              <div className="app_Solar_additions_details">
                  <div>Additional kWh/day: <span>20 kWh</span></div>
                  <div>Additional kWh/month: <span>600 kWh</span></div>
                  <div>Additional monthly cost (w/o Solar): <span>$1,000</span></div>
                  <div>New Recommended Size: <span>16.32 kW</span></div>
              </div>
          </div>
        </div>
    </div> 
  ); 
}

export default SolarPowerWall;