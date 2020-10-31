import React, { Component } from 'react';
import './InfoPanel_payments.css';

class InfoPanel_payments extends Component {
  render() {
    return (
      <div className="infoPanel_payments_container">
          <div>CA Tesla Leasing: <span className="infoPanel_leasing_availability app_available">Available</span></div>
          <div>CA Tesla Financing: <span className="infoPanel_financing_availability app_unavailable">Unavailable</span></div>
          <div>CA State Tax: 7.5%</div>
          <div>CA Local gov. Tax: ~2.5%</div>
          <div>CA Registration fees: $15-500</div> 
          <div>CA Plate transfer fees: $65</div>
          <div>CA Title Fees: $0</div>
          <div className="app_source_footer"><a href="https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/" target="_blank">Source</a></div>
      </div> 
    );
  }
}

export default InfoPanel_payments;