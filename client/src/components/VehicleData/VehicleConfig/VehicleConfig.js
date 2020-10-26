import React, { Component } from 'react';
import './VehicleConfig.css';

class VehicleConfig extends Component {
  render() {
    return (
      <div className="vehicleConfig_container">
        <div className="vehicleConfig_vehicleName">Model 3</div>
        <div className="vehicleConfig_columns vehicleConfig_column1">
          <div className="vehicleConfig_columns_content">

            <div className="vehicleConfig_image_container">
              <img src="../../public/images/model3.png"></img>
            </div>

            <div className="vehicleConfig_specs_container">
              <div className="vehicleConfig_spec vehicleConfig_range">263 miles range</div>
              <div className="vehicleConfig_spec vehicleConfig_topSpeed">140 mph</div>
              <div className="vehicleConfig_spec vehicleConfig_mph">5.3sec 0-60</div>
            </div>

            <div className="vehicleConfig_pricing_container">
              <div className="vehicleConfig_pricing vehicleConfig_cash">
                <div>Cash: </div>
                <div>$37,990</div>
              </div>
              <div className="vehicleConfig_pricing vehicleConfig_lease">
                <div>Lease: </div>
                <div>$300/mo.</div>
              </div>
              <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Loan: </div>
                <div>$200/mo.</div> 
              </div>
            </div>

          <div className="vehicleConfig_selectCar_container">
            <div>Select Battery: </div>
            <ul className="vehicleConfig_select_ul vehicleConfig_selectCar_ul">
              <li className=".app_NoSelect vehicleConfig_select">Off Menu SR - $100,990</li>
              <li className=".app_NoSelect vehicleConfig_select">Standard R. - $100,990</li>
              <li className=".app_NoSelect vehicleConfig_select">Long Range - $100,990</li>
              <li className=".app_NoSelect vehicleConfig_select">Performance - $100,990</li>
            </ul>
          </div>

          <div className="vehicleConfig_selectColor_container">
            <div>Select Color: </div>
            <ul className="vehicleConfig_select_ul vehicleConfig_selectColor_ul">
              <li className=".app_NoSelect vehicleConfig_select color_select vehicleConfig_pearl_white_multicoat"></li>
              <li className=".app_NoSelect vehicleConfig_select color_select vehicleConfig_solid_black"></li>
              <li className=".app_NoSelect vehicleConfig_select color_select vehicleConfig_midnight_silver_metallic"></li>
              <li className=".app_NoSelect vehicleConfig_select color_select vehicleConfig_deep_blue_metallic"></li>
              <li className=".app_NoSelect vehicleConfig_select color_select vehicleConfig_red_multicoat"></li>
            </ul>
            <input type="text" className="app_NoSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectColor_input" readonly="readonly" />
          </div>

          <div className="vehicleConfig_selectWheel_container">
            <div>Select Wheel: </div>
            <ul className="vehicleConfig_select_ul vehicleConfig_selectwheel_ul">
              <image className="app_NoSelect vehicleConfig_select wheel_select vehicleConfig_18_inch_aero_wheels" />
              <image className="app_NoSelect vehicleConfig_select wheel_select vehicleConfig_19_inch_sport_wheels" />
            </ul>
            <input type="text" className="app_NoSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectWheel_input" readonly="readonly" />
          </div>

          <div className="vehicleConfig_selectInteriorColor_container">
            <div>Select Interior Color: </div>
            <ul className="vehicleConfig_select_ul vehicleConfig_selectInteriorColor_ul">
              <li className="app_NoSelect vehicleConfig_select color_select vehicleConfig_black_interior"></li>
              <li className="app_NoSelect vehicleConfig_select color_select vehicleConfig_white_interior"></li>
            </ul>
            <input type="text" className="app_NoSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectInteriorColor_input" readonly="readonly" />
          </div>

          <div className="vehicleConfig_selectLayout_container">
            <div>Select Layout: </div>
            <ul className="vehicleConfig_select_ul vehicleConfig_selectlayout_ul">
              <li className=".app_NoSelect vehicleConfig_select layout_select vehicleConfig_5_seater">5 Seater - Included</li>
              <li className=".app_NoSelect vehicleConfig_select layout_select vehicleConfig_6_seater">6 Seater - $1,500</li>
              <li className=".app_NoSelect vehicleConfig_select layout_select vehicleConfig_6_seater">7 Seater - $3,000</li>
            </ul>
          </div>

          <div className="vehicleConfig_selectTowHitch_container">
            <div>Select: </div>
            <ul className="vehicleConfig_select_ul vehicleConfig_selectTowHitch_ul">
              <input type="checkbox" className=".app_NoSelect vehicleConfig_select accessory_select vehicleConfig_towHitch_checkbox"></input>
              <span>Tow Hitch - $1,000</span>
            </ul>
            <ul>
              <input type="radio" name="autopilot_radio" value="No Autopilot" className=".app_NoSelect vehicleConfig_select accessory_select vehicleConfig_noAutopilot_radio"></input>
              <span>No autopilot - n/a</span>
              <input type="radio" name="autopilot_radio" value="Autopilot" className=".app_NoSelect vehicleConfig_select accessory_select vehicleConfig_autopilot_radio"></input>
              <span>Autopilot - $3,000</span>
              <input type="radio" name="autopilot_radio" value="Full Self Driving" className=".app_NoSelect vehicleConfig_select accessory_select vehicleConfig_fsd_radio"></input>
              <span>Full Self Driving - $10,000</span>
            </ul>
          </div>

          </div>
        </div>
        <div className="vehicleConfig_columns vehicleConfig_column2">
          <div className="vehicleConfig_incentives">
            <div>Incentives:</div>
            <p className="vehicleConfig_incentives_text">$2,000 or $4,500 rebate (based on income eligibility) for Model 3 and Model Y*
              $5,000 grant (based on income eligibility)*
              *Review eligibility prior to applying</p>
          </div>
        </div> 
      </div>
    );
  }
}

export default VehicleConfig;