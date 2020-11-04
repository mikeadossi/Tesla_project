import React, { Component } from 'react';
import './InfoPanel_payments.css';

class InfoPanel_payments extends Component {
  render() {
    return (
      <div className="infoPanel_payments_container">
          <div className="content_vehicle">CA Tesla Leasing: <span className="infoPanel_leasing_availability app_available">Available</span></div>
          <div className="content_vehicle">CA Tesla Financing: <span className="infoPanel_financing_availability app_unavailable">Unavailable</span></div>
          <div className="content_neutral">CA State Tax: 7.5%</div>
          <div className="content_neutral">CA Local gov. Tax: ~2.5%</div>
          <div className="content_vehicle">CA Registration fees: $15-500</div> 
          <div className="content_vehicle">CA Plate transfer fees: $65</div>
          <div className="content_vehicle">CA Title Fees: $0</div>
          <div className="content_solar">Notice: There may be additional upgrades required, e.g., electric main panel, or hidden conduit.</div>
          <div className="content_solar">A Federal Investment Tax Credit (ITC) is generally available to anyone who purchases solar panels. Powerwall paired with solar, including existing solar PV systems, is a qualified expenditure. To be eligible for tax credits, you must have tax liability at least equal to the credit. Tesla does not guarantee incentive amounts or your eligibility. Please consult with a tax advisor.</div>
          <div className="app_source_footer"><a href="https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/" target="_blank">Source</a></div>
      </div>
    );
  }
}

export default InfoPanel_payments;