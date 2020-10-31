import React, { Component } from 'react';
import './InfoPanel_incentives.css';

class InfoPanel_incentives extends Component {
  render() {
    return (
      <div>
        <p className="InfoPanel_incentives_container">
          $2,000 or $4,500 rebate (based on income eligibility) for Model 3 and Model Y*
          $5,000 grant (based on income eligibility)*
          *Review eligibility prior to applying
        </p>
        <div className="app_source_footer"><a href="https://www.tesla.com/support/vehicle-warranty" target="_blank">Source</a></div>
      </div>
    );
  }
}

export default InfoPanel_incentives;