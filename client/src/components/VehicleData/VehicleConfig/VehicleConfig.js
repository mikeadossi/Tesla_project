import React, { Component } from 'react';
import './VehicleConfig.css';

const VehicleConfig = ({selectedVehicle}) => {

  const defaultColor = 'white';
  const [selectedColor, setColor] = React.useState(defaultColor);

  return (
    <div className="app_Config_container">
      <div className="app_configTitle app_displayFlex">
          <div className="vehicleConfig_vehicleName">{selectedVehicle.name}</div>
          <div className="vehicleConfig_header_options_container app_displayFlex">
            <div className="app_options_btn">Inventory</div>
            <div className="app_options_btn">Specs</div>
            <div className="vehicleConfig_close_container"> 
              <img className="vehicleConfig_close" src="../../../../images/Nav/close_2.png" alt="close"></img>
            </div>
          </div>
      </div>
      <div className="app_displayFlex">
        <div className="app_inlineFlex app_columns_width vehicleConfig_column1">
          <div className="vehicleConfig_columns_blockContent">

            <div className="vehicleConfig_modelName_container">
              <span className="vehicleConfig_modelName">Standard Range Off Menu RWD</span>
              <span className="vehicleConfig_modelPrice">Cash Price: $100,000</span>
            </div>

            <div className="vehicleConfig_vehicleImg_container">
              <div className="vehicleConfig_image_container">
                <img className="vehicleConfig_img" src="../../../../images/model3/model3_white_std_sport.png" alt="model 3 image" ></img>
              </div>

              <div className="app_Config_specs_container vehicleConfig_specs_container">
                <div className="app_Config_spec vehicleConfig_range">263 miles range</div>
                <div className="app_Config_spec vehicleConfig_topSpeed">140 mph</div>
                <div className="app_Config_spec vehicleConfig_mph">5.3sec 0-60</div>
              </div>
            </div>

            <div className="vehicleConfig_pricing_container">
              <div className="app_displayFlex app_Solar_selectPymt_div">
                  <div className="app_Solar_selectPymt_btn">Cash</div>
                  <div className="app_Solar_selectPymt_btn">Loan</div>
                  <div className="app_Solar_selectPymt_btn">Lease</div>
              </div>
              <div className="vehicleConfig_pricing_subcontainers">
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
                    <div>Trd Value: </div>
                    <div>$100,000</div> 
                  </div>
                  <div className="vehicleConfig_pricing vehicleConfig_tradeinPayoff">
                    <div>Trd Payoff: </div>
                    <div>$100,000</div> 
                  </div>
                  <div className="vehicleConfig_pricing vehicleConfig_tradeinEquity">
                    <div>Trd Equity: </div>
                    <div>$100,000</div> 
                  </div>
                  <div className="vehicleConfig_pricing vehicleConfig_loanToValueRatio">
                    <div>Loan to Value: </div>
                    <div>100%</div> 
                  </div>
                  <div className="vehicleConfig_pricing vehicleConfig_tradeinCashback">
                    <div>Trd cashback: </div>
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
                <div className="vehicleConfig_select_ul vehicleConfig_selectColor_ul">
                  <div onClick={() => setColor('white')} className={`app_noSelect app_inlineFlex color_select_container ${selectedColor == 'white' && 'selected'}`}><img className="color_select vehicleConfig_pearl_white_multicoat" src="../../../../images/paint/white_paint.png" /></div>
                  <div onClick={() => setColor('black')} className={`app_noSelect app_inlineFlex color_select_container ${selectedColor == 'black' && 'selected'}`}><img className="color_select vehicleConfig_solid_black" src="../../../../images/paint/black_paint.png" /></div>
                  <div onClick={() => setColor('silver')} className={`app_noSelect app_inlineFlex color_select_container ${selectedColor == 'silver' && 'selected'}`}><img className="color_select vehicleConfig_midnight_silver_metallic" src="../../../../images/paint/silver_paint.png" /></div>
                  <div onClick={() => setColor('blue')} className={`app_noSelect app_inlineFlex color_select_container ${selectedColor == 'blue' && 'selected'}`}><img className="color_select vehicleConfig_deep_blue_metallic" src="../../../../images/paint/blue_paint.png" /></div>
                  <div onClick={() => setColor('red')} className={`app_noSelect app_inlineFlex color_select_container ${selectedColor == 'red' && 'selected'}`}><img className="color_select vehicleConfig_red_multicoat" src="../../../../images/paint/red_paint.png" /></div>
                </div>
                <input type="text" placeholder="Pearl white - included" className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectColor_input" readonly="readonly" />
              </div>
            </div>

            <div className="vehicleConfig_selectWheelAndInterior_container">
              <div className="vehicleConfig_selectWheel_container">
                <div>Select Wheel: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectwheel_ul">
                  <div className="app_noSelect app_inlineFlex color_select_container selected"><img className="app_noSelect vehicleConfig_wheel_select vehicleConfig_18_inch_aero_wheels" src="../../../../images/wheels/m3_aero_18.png" /></div>
                  <div className="app_noSelect app_inlineFlex color_select_container"><img className="app_noSelect vehicleConfig_wheel_select vehicleConfig_19_inch_sport_wheels" src="../../../../images/wheels/m3_sport_19.png" /></div>
                </ul>
                <input type="text" placeholder='18" Aero wheels - incl.' className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectWheel_input" readonly="readonly" />
              </div>

              <div className="vehicleConfig_selectInteriorColor_container">
                <div>Select Interior Color: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectInteriorColor_ul">
                  <div className="app_noSelect app_inlineFlex color_select_container selected"><img className="app_noSelect color_select vehicleConfig_black_interior" src="../../../../images/interior/black_interior.png" /></div>
                  <div className="app_noSelect app_inlineFlex color_select_container"><img className="app_noSelect color_select vehicleConfig_white_interior" src="../../../../images/interior/white_interior.png" /></div>
                </ul>
                <input type="text" placeholder="All black - included" className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectInteriorColor_input" readonly="readonly" />
              </div>
            </div>

          </div>
        </div>

        <div className="app_config_border"></div>
        
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
              <div className="veicleConfig_userEntry_subcontainer">
                <div className="app_displayFlex app_Solar_selectPymt_div">
                    <div className="app_Solar_selectPymt_btn">Cash</div>
                    <div className="app_Solar_selectPymt_btn">Loan</div>
                    <div className="app_Solar_selectPymt_btn">Lease</div>
                </div>
                <div className="vehicleConfig_userEntry_containers">
                  <div className="vehicleConfig_userEntry_container1">
                    <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateTax">
                      <label>APR: </label>
                      <span className="vehicleConfig_userInput_container">
                        <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                        <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                      </span>
                    </div>
                    <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                      <label>Leasing: </label> 
                      <select className="vehicleConfig_userSelect vehicleConfig_userSelect_lease">
                        <option value="24 months">24 months</option>
                        <option value="36 months">36 months</option>
                      </select>
                      <select className="vehicleConfig_userSelect vehicleConfig_userSelect_miles">
                        <option value="10000 miles">10,000 miles</option>
                        <option value="15000 miles">12,000 miles</option>
                        <option value="20000 miles">15,000 miles</option> 
                      </select>
                    </div>
                    <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_cashAmtDue"> 
                      <label>Finance Term: </label>
                      <select className="vehicleConfig_userSelect vehicleConfig_userSelect_miles">
                        <option value="36 months">36 months</option>
                        <option value="48 months">48 months</option>
                        <option value="60 months">60 months</option>
                        <option value="72 months">72 months</option>
                      </select>
                    </div>
                    <div className="vehicleConfig_pricing vehicleConfig_loanAmtDue">
                      <label>Trade-in Lien Type: </label>
                      <span className="vehicleConfig_userInput_container">
                        <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                        <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                      </span>
                    </div>
                    <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                      <label>Cash Down pymt: </label>
                      <span className="vehicleConfig_userInput_container">
                        <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                        <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                      </span>
                    </div>
                  </div>

                  <div className="vehicleConfig_userEntry_container2">
                    <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateTax">
                      <label>Enter Adjustments: </label>
                      <span className="vehicleConfig_userInput_container">
                        <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                        <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                      </span>
                    </div>
                    <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                      <label>Enter trade-in value: </label>
                      <span className="vehicleConfig_userInput_container">
                        <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                        <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                      </span>
                    </div>
                    <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_cashAmtDue">
                      <label>Enter trade-in payoff: </label>
                      <span className="vehicleConfig_userInput_container">
                        <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                        <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                      </span>
                    </div>
                    <div className="vehicleConfig_pricing vehicleConfig_loanAmtDue">
                      <label>Trade-in Equity: </label>
                      <span className="vehicleConfig_userInput_container">
                        <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                        <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vehicleConfig_submit_btn_container">
                <button className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_setAll_btn app_cursorPointer">APPLY ALL</button>
                <button className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_reset_btn app_cursorPointer">RESET</button>
                <button className="app_removeBlue app_submit_btn app_noSelect vehicleConfig_control_btn vehicleConfig_submit_btn app_cursorPointer">SUBMIT</button>
              </div>
            </div>

          </div>
        </div> 
      </div>


    </div>
  );
}

export default VehicleConfig;