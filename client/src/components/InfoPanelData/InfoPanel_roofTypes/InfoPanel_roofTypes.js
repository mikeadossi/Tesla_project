import React from 'react';
import './InfoPanel_roofTypes.css';

const InfoPanel_roofTypes = () => { 

  return (
    <div className="InfoPanel_charging_container">
      <div id="infoPanel_loaded_title">ACCEPTED ROOF TYPES</div>
      <div className="infoPanel_section_data infoPanel_roofTypes_container">
        <ul>
          <li>3-tab composition shingle</li>
          <li>Dimensional or architectural composition shingles</li>
          <li>Concrete tile</li>
          <li>Metal Standing Seam</li>
          <li>Flat roof</li>
          <li>Corrugated Metal</li>
          <li>Slate</li>
          <li>Wood Shake</li>
          <li>Clay Tile</li>
        </ul> 
        <div className="app_source_footer">
          <a 
            href="https://www.tesla.com/support/energy/solar-panels/going-solar/sizing-and-design" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  ); 
}

export default InfoPanel_roofTypes;