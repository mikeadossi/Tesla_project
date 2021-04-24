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
            <div className="app_Menu_btn app_noSelect select_sr select_unavailable">Solar Roof</div>
            <div className="app_Menu_btn app_noSelect select_sp_and_sr select_unavailable">SP vs SR</div>
            <div className="app_Menu_btn app_noSelect select_pw select_unavailable">Powerwall</div>
          </div>
        </div> 
        <div className="app_Menu_container solarMenu_form_container">
          <h3 className="solarMenu_form_title">Submit Energy Use</h3>
          <div className="solarMenu_div">
            <form className="solarMenu_form">
              <div className="app_displayFlex">
                <div className="solarMenu_form_bill">
                  <label className="solarMenu_form_bill_label">Average monthly electricity cost:</label>
                  <span>$</span><input className="solarMenu_form_bill_input app_main_submit_input app_removeBlue"></input>
                </div>
                <div className="solarMenu_form_kwh">
                  <label>Energy use: </label>
                  <select className="solarMenu_form_select app_removeBlue">
                      <option value="Daily">Daily</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Yearly">Yearly</option>
                  </select>
                  <input className="solarMenu_form_bill_input app_main_submit_input app_removeBlue"></input><span>kWh</span>
                </div>
              </div>
              <div className="app_displayFlex">
                <div className="solarMenu_utility_container">
                  <label>Customers Utility Company: </label>
                  <select className="app_inline-block solarMenu_utiltiy_select app_removeBlue"> 
                      <option value="CentralHudsonGasElecCorp">Central Hudson Gas Elec Corp.</option>
                      <option value="NYStateGasElecCorp">NY State Gas Elec Corp.</option>
                      <option value="RochesterGasAndElecCorp">Rochester Gas and Elec Corp.</option>
                      <option value="no_solar_given"></option>
                  </select>
                </div>
                <div className="solarMenu_utility_container">
                  <label>Do you have Solar?: </label>
                  <input placeholder="Enter system size"></input>kW
                </div>
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