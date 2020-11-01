import React, { Component } from 'react';
import './InfoModalData_charging.css';
import InfoModalData_wc_table from '../InfoModalData_table/InfoModalData_wc_table';
import InfoModalData_mc_table from '../InfoModalData_table/InfoModalData_mc_table';

class InfoModalData_charging extends Component {
  render() {
    return ( 
      <div className="infoModalData_charging_container">
          <h1>CHARGING</h1> 
          <div className="app_modalData_content">
            <div className="infoModalData_charging_btn_container">
              <div className="app_seeMore_btn app_NoSelect infoModalData_charging_btn">Wall Connector</div>
              <div className="app_seeMore_btn app_NoSelect infoModalData_charging_btn">Mobile Connector</div>
              <div className="app_seeMore_btn app_NoSelect infoModalData_charging_btn">Charging Stations</div>
            </div>
            <InfoModalData_mc_table />
          </div>
      </div>
    );
  }
}

export default InfoModalData_charging;