import React, { Component } from 'react';
import './SolarMenu.css';

class SolarMenu extends Component {
  render() {
    return (
      <div>
        <div className="app_Menu_container">
          <h3>Select Solar Product</h3>
          <div className="solarMenu_div app_displayFlex">
            <div className="app_Menu_btn app_noSelect select_sp">Solar Panels</div>
            <div className="app_Menu_btn app_noSelect select_sr">Solar Roof</div>
            <div className="app_Menu_btn app_noSelect select_sp_and_sr">SP vs SR</div>
            <div className="app_Menu_btn app_noSelect select_pw">Powerwall</div>
          </div>
        </div> 
        <div className="app_Menu_container solarMenu_form_container">
          <h3 className="solarMenu_form_title">Submit Energy Use</h3>
          <div className="solarMenu_div">
            <form className="solarMenu_form app_displayFlex">
              <div className="solarMenu_form_bill">
                <label className="solarMenu_form_bill_label">Enter monthly electricity cost:</label>
                <span>$</span><input className="solarMenu_form_bill_input app_main_submit_input app_removeBlue"></input>
              </div>
              <div className="solarMenu_form_kwh">
                <label>Enter kWh use: </label>
                <select className="solarMenu_form_select app_removeBlue">
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
                <span>$</span><input className="solarMenu_form_bill_input app_main_submit_input app_removeBlue"></input>
              </div>
              <button className="solarMenu_form_submit_btn app_submit_btn app_noSelect app_removeBlue">Submit</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default SolarMenu;