import React, { Component } from 'react';
import './SolarMenu.css';

class SolarMenu extends Component {
  render() {
    return (
      <div className="app_Menu_container">
        <h3>Select Solar Product</h3>
        <div className="solarMenu_div">
            <div className="app_Menu_btn app_NoSelect select_sp">Solar Panels</div>
            <div className="app_Menu_btn app_NoSelect select_sr">Solar Roof</div>
            <div className="app_Menu_btn app_NoSelect select_sp_and_sr">SP vs SR</div>
            <div className="app_Menu_btn app_NoSelect select_pw">Powerwall</div>
        </div>
      </div>
    );
  }
}

export default SolarMenu;