import React, { Component } from 'react';
import './VehicleConfig.css';

class VehicleConfig extends Component {
  render() {
    return (
      <div className="app_Config_container">
        <div className="app_configTitle vehicleConfig_vehicleName">Model 3</div>
        <div className="app_inlineFlex app_columns_width vehicleConfig_column1">
          <div className="vehicleConfig_columns_blockContent">

            <div className="vehicleConfig_modelName_container">
              <span className="vehicleConfig_modelName">Standard Range Off Menu RWD</span>
              <span className="vehicleConfig_modelPrice">Cash Price: $100,000</span>
            </div>

            <div className="vehicleConfig_vehicleImg_container">
              <div className="vehicleConfig_image_container">
                <img src="../../public/images/model3.png"></img>
              </div>

              <div className="app_Config_specs_container vehicleConfig_specs_container">
                <div className="app_Config_spec vehicleConfig_range">263 miles range</div>
                <div className="app_Config_spec vehicleConfig_topSpeed">140 mph</div>
                <div className="app_Config_spec vehicleConfig_mph">5.3sec 0-60</div>
              </div>
            </div>

            <div className="vehicleConfig_pricing_container">
              <div className="vehicleConfig_pricing_subcontainer1 app_inline-block">
                <div className="vehicleConfig_pricing vehicleConfig_lease">
                  <div>Lease: </div>
                  <div>$300/mo.</div>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_loan">
                  <div>Loan: </div>
                  <div>$200/mo.</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_tradein">
                  <div>T.I. Value: </div>
                  <div>$100,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_tradeinPayoff">
                  <div>T.I. Payoff: </div>
                  <div>$100,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_tradeinEquity">
                  <div>T.I. Equity: </div>
                  <div>$100,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_loanToValueRatio">
                  <div>Loan to Value: </div>
                  <div>100%</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_tradeinCashback">
                  <div>T.I. cashback: </div>
                  <div>$100,000</div> 
                </div>
              </div>

              <div className="vehicleConfig_pricing_subcontainer2 app_inline-block">
                <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                  <div>CA Total Fees: </div>
                  <div>$200,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_stateTax">
                  <div>CA Tax: </div>
                  <div>$3,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_leaseTax">
                  <div>Lease Tax: </div>
                  <div>$3,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_cashAmtDue">
                  <div>Amt Due (CASH): </div>
                  <div>$10,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_loanAmtDue">
                  <div>Amt Due (LOAN): </div>
                  <div>$1,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_leaseAmtDue">
                  <div>Amt Due (LEASE): </div>
                  <div>$1,000</div> 
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                  <div>Cash Down Payment: </div>
                  <div>$0</div>
                </div>
              </div>

            </div>

            <div className="vehicleConfig_pricing_subcontainer3 vehicleConfig_pricing vehicleConfig_adjustments">
                  <div className="vehicleConfig_loanToValueRatio">Adjustments: </div>
                  <div>$0</div> 
                </div>

            <div className="vehicleConfig_selectCarAndColor_container">
              <div className="vehicleConfig_selectCar_container">
                <div>Select Battery: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectCar_ul">
                  <li className="vehicleConfig_select_srAndoff">
                    <span className="app_noSelect vehicleConfig_select vehicleConfig_select_sr">Standard</span>
                    <span className="app_noSelect vehicleConfig_select vehicleConfig_select_off">Off</span>
                  </li>
                  <li className="app_noSelect vehicleConfig_select">Long Range</li>
                  <li className="app_noSelect vehicleConfig_select">Performance</li>
                </ul>
              </div>
              <div className="vehicleConfig_selectColor_container">
                <div>Select Color: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectColor_ul">
                  <li className="app_noSelect vehicleConfig_select color_select vehicleConfig_pearl_white_multicoat"></li>
                  <li className="app_noSelect vehicleConfig_select color_select vehicleConfig_solid_black"></li>
                  <li className="app_noSelect vehicleConfig_select color_select vehicleConfig_midnight_silver_metallic"></li>
                  <li className="app_noSelect vehicleConfig_select color_select vehicleConfig_deep_blue_metallic"></li>
                  <li className="app_noSelect vehicleConfig_select color_select vehicleConfig_red_multicoat"></li>
                </ul>
                <input type="text" className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectColor_input" readonly="readonly" />
              </div>
            </div>

            <div className="vehicleConfig_selectWheelAndInterior_container">
              <div className="vehicleConfig_selectWheel_container">
                <div>Select Wheel: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectwheel_ul">
                  <image className="app_noSelect vehicleConfig_select wheel_select vehicleConfig_18_inch_aero_wheels" />
                  <image className="app_noSelect vehicleConfig_select wheel_select vehicleConfig_19_inch_sport_wheels" />
                </ul>
                <input type="text" className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectWheel_input" readonly="readonly" />
              </div>

              <div className="vehicleConfig_selectInteriorColor_container">
                <div>Select Interior Color: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectInteriorColor_ul">
                  <li className="app_noSelect vehicleConfig_select color_select vehicleConfig_black_interior"></li>
                  <li className="app_noSelect vehicleConfig_select color_select vehicleConfig_white_interior"></li>
                </ul>
                <input type="text" className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectInteriorColor_input" readonly="readonly" />
              </div>
            </div>

          </div>
        </div>
        
        <div className="app_inlineFlex app_columns_width vehicleConfig_column2">
          <div className="vehicleConfig_columns_blockContent">

            <div className="vehicleConfig_selectLayout_and_autopilot_container">
              <div className="vehicleConfig_selectLayout_container">
                <div className="app_textalign">Select Layout: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectlayout_ul">
                  <li className="app_noSelect vehicleConfig_select layout_select vehicleConfig_5_seater">5 Seater - Included</li>
                  <li className="app_noSelect vehicleConfig_select layout_select vehicleConfig_6_seater">6 Seater - $1,500</li>
                  <li className="app_noSelect vehicleConfig_select layout_select vehicleConfig_6_seater">7 Seater - $3,000</li>
                </ul>
              </div>

              <div className="vehicleConfig_autopilot_container">
                <div className="app_textalign">Select Autopilot: </div>
                <div>
                  <input type="radio" name="autopilot_radio" value="No Autopilot" className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_noAutopilot_radio"></input>
                  <span className="vehicleConfig_autopilot">No autopilot</span>
                </div>
                <div>
                  <input type="radio" name="autopilot_radio" value="Autopilot" className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_autopilot_radio"></input>
                  <span>Autopilot - $3,000</span>
                </div>
                <div>
                  <input type="radio" name="autopilot_radio" value="Full Self Driving" className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_fsd_radio"></input>
                  <span>FSD - $10,000</span>
                </div>
              </div>
            </div>

            <div className="vehicleConfig_selectTowHitch_container"> 
              <ul className="vehicleConfig_select_ul vehicleConfig_selectTowHitch_ul">
                <input type="checkbox" className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_towHitch_checkbox"></input>
                <span>Tow Hitch - $1,000</span>
              </ul>
            </div>

            <div className="vehicleConfig_incentives">
              <div>Incentives:</div>
              <p className="vehicleConfig_incentives_text">
                $2,000 or $4,500 rebate (based on income eligibility) for Model 3 and Model Y*
                $5,000 grant (based on income eligibility)*
                *Review eligibility prior to applying
              </p>
            </div>

            <div className="veicleConfig_userEntry_container">
              <div className="vehicleConfig_userEntry_container1 app_inline-block">
                <div className="vehicleConfig_pricing vehicleConfig_stateTax">
                  <label>APR: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                  <label>Lease Term: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_cashAmtDue">
                  <label>Finance Term: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_loanAmtDue">
                  <label>Trade-in Lien Type: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_leaseAmtDue">
                  <label>Select Miles: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                  <label>Cash Down pymt: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
              </div>

              <div className="vehicleConfig_userEntry_container2 .app_inline-block">
                <div className="vehicleConfig_pricing vehicleConfig_stateTax">
                  <label>Enter Adjustments: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                  <label>Enter trade-in value: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_cashAmtDue">
                  <label>Enter trade-in payoff: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
                <div className="vehicleConfig_pricing vehicleConfig_loanAmtDue">
                  <label>Trade-in Equity: </label>
                  <input></input>
                  <button className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1">Edit</button>
                </div>
              </div>

              <div>
                <button className="vehicleConfig_reset_btn app_cursorPointer">Reset all entries</button>
              </div>
            </div>

          </div>
        </div> 

      </div>
    );
  }
}

export default VehicleConfig;