import React, { Component } from 'react';
import './InfoPanel_warranty.css';

class InfoPanel_warranty extends Component {
  render() {
    return (
      <div className="InfoPanel_warranty_container">
        <ul className="InfoPanel_warranty_ul">
          <li>Model S and Model X – 8 years or 150,000 miles, whichever comes first, with minimum 70% retention of Battery capacity over the warranty period.</li>
          <li>Model 3 and Model Y Standard or Standard Range Plus - 8 years or 100,000 miles, whichever comes first, with minimum 70% retention of Battery capacity over the warranty period.</li>
          <li>Model 3 and Model Y Long Range or Performance - 8 years or 120,000 miles, whichever comes first, with minimum 70% retention of Battery capacity over the warranty period.</li>
        </ul>
        <div className="app_source_footer"><a href="https://www.tesla.com/support/vehicle-warranty" target="_blank">Source</a></div>
      </div>
    );
  }
}

export default InfoPanel_warranty;