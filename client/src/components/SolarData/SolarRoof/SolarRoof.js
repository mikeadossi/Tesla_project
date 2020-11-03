import React, { Component } from 'react';
import './SolarRoof.css';

class SolarRoof extends Component {
  render() {
    return (
      <div className="app_columns_width vehicleConfig_column1">
          <div className="app_configTitle">Solar Roof</div> 
          <div className="app_Solar_Img_container">
              <div className="vehicleConfig_image_container app_solar_image_container">
                <img src="../../public/images/model3.png"></img>
              </div>

              <div className="app_Config_specs_container app_Solar_specs_container">
                <div className="app_Config_spec vehicleConfig_range">Recommended: 8kW</div>
                <div className="app_Config_spec vehicleConfig_topSpeed">8kW = 10-15 kWh/day</div> 
              </div> 
          </div>

          <div className="app_Solar_kw_div">
              <div className="app_displayFlex">
                 <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_4kw">4.08 kW</div>
                 <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_8kw">8.16 kW</div>
                 <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_12kw">12.24 kW</div>
                 <div className="app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_16kw">16.32 kW</div>
              </div>
              <div className="app_Solar_selectKwSize_div"> 
                  <select className="app_Solar_select app_removeBlue">
                     <option value="Daily">~20 kW</option>
                     <option value="Monthly">~24 kW</option>
                     <option value="Yearly">~28 kW</option>
                     <option value="Daily">~32 kW</option>
                     <option value="Monthly">~36 kW</option>
                     <option value="Yearly">~40 kW</option>
                     <option value="Daily">~44 kW</option>
                     <option value="Monthly">~48 kW</option>
                     <option value="Yearly">~52 kW</option>
                  </select>
                  <span> Select custom size </span>
              </div>
          </div>
          <div className="app_Solar_costs_container">
                <div className="app_displayFlex app_Solar_selectPymt_div">
                    <div className="app_Solar_selectPymt_btn">Cash</div>
                    <div className="app_Solar_selectPymt_btn">Loan</div>
                    <div className="app_Solar_selectPymt_btn">Subscription</div>
                </div>
                <div className="">
                    <div className="app_Solar_cost_div">
                        <span className="app_inline-block">8.16 kW Solar Roof</span>
                        <span className="app_inline-block app_Solar_cost">$16,400</span>
                    </div>
                    <div className="app_Solar_cost_div">
                        <span className="app_inline-block">Federal Tax Credit</span>
                        <span className="app_inline-block app_Solar_cost">-$4,264</span>
                    </div>
                    <div className="app_Solar_cost_div">
                        <span className="app_inline-block">NY Solar Tax Credit</span>
                        <span className="app_inline-block app_Solar_cost">-$4,100</span>
                    </div>
                    <div className="app_Solar_cost_div">
                        <span className="app_inline-block">Utility (Central Hudson Gas Elec Corp.): </span>
                        <span className="app_inline-block app_Solar_cost">-$10,000</span>
                    </div>
                    <div className="app_Solar_cost_div">
                        <span className="app_inline-block">Price After Incentives</span>
                        <span className="app_inline-block app_Solar_cost">-$1,000</span>
                    </div>
                    <div className="app_Solar_cost_div">
                        <span className="app_inline-block">Est. 25 Year Savings</span>
                        <span className="app_inline-block app_Solar_cost">-$1,000</span>
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
                  <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Hot Tub Electric Heater</div> 
                  <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Pool Filter Pump 2hp</div>
                  <div className="app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn">Pool Single Spd. Pump</div>
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
}

export default SolarRoof;