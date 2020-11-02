import React, { Component } from 'react';
import './SolarPanels.css';

class SolarPanels extends Component {
  render() {
    return ( 
      <div className="app_columns_width vehicleConfig_column1">
          <div className="app_configTitle">Solar Panels</div> 
          <div className="solarPanel_Img_container">
              <div className="vehicleConfig_image_container app_solar_image_container">
                <img src="../../public/images/model3.png"></img>
              </div>

              <div className="app_Config_specs_container solarConfig_specs_container">
                <div className="app_Config_spec vehicleConfig_range">Recommended: 8kW</div>
                <div className="app_Config_spec vehicleConfig_topSpeed">8kW = 10-15 kWh/day</div> 
              </div> 
          </div>

          <div className="solarPanel_kw_div">
              <div className="app_displayFlex">
                 <div className="app_seeMore_btn app_noSelect select_kw_btn select_4kw">4.08 kW</div>
                 <div className="app_seeMore_btn app_noSelect select_kw_btn select_8kw">8.16 kW</div>
                 <div className="app_seeMore_btn app_noSelect select_kw_btn select_12kw">12.24 kW</div>
                 <div className="app_seeMore_btn app_noSelect select_kw_btn select_16kw">16.32 kW</div>
              </div>
              <div className="solarPanel_selectKwSize_div"> 
                  <select className="solarPanel_select app_removeBlue">
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
                  <span> Search custom sizes </span>
              </div>
          </div>
          <div className="solarConfig_costs_container">
                <div className="app_displayFlex solarPanel_selectPymt_div">
                    <div className="solarPanel_selectPymt_btn">Cash</div>
                    <div className="solarPanel_selectPymt_btn">Loan</div>
                    <div className="solarPanel_selectPymt_btn">Subscription</div>
                </div>
                <div className="">
                    <div className="solarPanel_cost_div">
                        <span className="app_inline-block">8.16 kW Solar Panels</span>
                        <span className="app_inline-block solarConfig_cost">$16,400</span>
                    </div>
                    <div className="solarPanel_cost_div">
                        <span className="app_inline-block">Federal Tax Credit</span>
                        <span className="app_inline-block solarConfig_cost">-$4,264</span>
                    </div>
                    <div className="solarPanel_cost_div">
                        <span className="app_inline-block">NY Solar Tax Credit</span>
                        <span className="app_inline-block solarConfig_cost">-$4,100</span>
                    </div>
                    <div className="solarPanel_cost_div">
                        <span className="app_inline-block">Local Utility Company?</span>
                        <span className="app_inline-block solarConfig_cost">-$0</span>
                    </div>
                    <div className="solarPanel_cost_div">
                        <span className="app_inline-block">Price After Incentives</span>
                        <span className="app_inline-block solarConfig_cost">-$1,000</span>
                    </div>
                    <div className="solarPanel_cost_div">
                        <span className="app_inline-block">Est. 25 Year Savings</span>
                        <span className="app_inline-block solarConfig_cost">-$1,000</span>
                    </div>
                </div>
          </div>

          <div>*Additional Appliances (show kWh daily needs)</div>
          <div>*Payback Calculator</div>
          <div>*Amortization calculator</div>

      </div> 
    );
  }
}

export default SolarPanels;