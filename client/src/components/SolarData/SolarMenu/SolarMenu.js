import React, { Component } from 'react';
import './SolarMenu.css';

class SolarMenu extends Component {
  render() {
    return (
      <div>
        <div className="app_Menu_container solarMenu_form_container">
          <h3 className="solarMenu_form_title">Submit Energy Use</h3>
          <div className="solarMenu_div">
            <form className="solarMenu_form">
              <div className="app_displayFlex">
                <div className="solarMenu_form_bill">
                  <label className="solarMenu_form_bill_label">Average monthly electricity cost:</label>
                  <span>$</span><input className="solarMenu_form_bill_input app_main_submit_input app_removeBlue"></input>
                </div>
                <button className="solarMenu_form_submit_btn app_submit_btn app_noSelect app_removeBlue">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default SolarMenu;