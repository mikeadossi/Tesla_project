import React, { Component } from 'react';
import './InfoModalData_charging.css';
import InfoModalData_wc_table from '../InfoModalData_table/InfoModalData_wc_table';
import InfoModalData_mc_table from '../InfoModalData_table/InfoModalData_mc_table';
import InfoModalData_charging_calculator from '../InfoModalData_table/InfoModalData_charging_calculator';
import InfoModalData_charging_stations from '../InfoModalData_table/InfoModalData_charging_stations';

class InfoModalData_charging extends Component {
  render() {
    return ( 
      <div className="infoModalData_charging_container">
          <h1>CHARGING</h1> 
          <div className="app_displayFlex app_Solar_selectPymt_div">
              <div className="app_Solar_selectPymt_btn app_noSelect infoModalData_charging_btn">Calculator</div>
              <div className="app_Solar_selectPymt_btn app_noSelect infoModalData_charging_btn">Mobile Connector</div>
              <div className="app_Solar_selectPymt_btn app_noSelect infoModalData_charging_btn">Wall Connector</div>
              <div className="app_Solar_selectPymt_btn app_noSelect infoModalData_charging_btn">Charging Stations</div>
          </div>
          <div className="app_modalData_content">
            <InfoModalData_charging_stations />
          </div>
      </div>
    );
  }
}

export default InfoModalData_charging;