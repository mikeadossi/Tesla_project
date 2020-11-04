import React, { Component } from 'react';
import './InfoPanel_neutral_container.css';

class InfoPanel_neutral_container extends Component {
  render() {
    return (
      <div className="InfoPanel_neutral_container_div">
          <div className="infoPanel_payments_div">
            <div className="infoPanel_section app_cursorPointer">PAYMENT</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_incentives_div">
            <div className="infoPanel_section app_cursorPointer">INCENTIVES</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_warranty_div">
            <div className="infoPanel_section app_cursorPointer">WARRANTY</div>
            <div className=""></div>
          </div>
          <div className="infoPanel_links_div">
            <div className="infoPanel_section app_cursorPointer">LINKS</div>
            <div className=""></div>
          </div>
      </div>
    );
  }
}

export default InfoPanel_neutral_container;