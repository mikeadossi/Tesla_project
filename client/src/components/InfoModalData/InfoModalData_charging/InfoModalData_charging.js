import React, { Component } from 'react';
import './InfoModalData_charging.css';
import InfoModalData_table from '../InfoModalData_table/InfoModalData_table';

class InfoModalData_charging extends Component {
  render() {
    return ( 
      <div className="infoModalData_charging_container">
          <h1>CHARGING</h1>
          <div className="app_modalData_content">
            Charging content!
            <InfoModalData_table />
          </div>
      </div>
    );
  }
}

export default InfoModalData_charging;