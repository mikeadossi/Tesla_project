import React, { Component } from 'react';
import './HeaderLeft.css';
import { Link }  from 'react-router-dom';

class HeaderLeft extends Component {
  render() {
    return (
      <div className="headerLeft app_marginTop">
          <i className="fas fa-bars headerRight_hamburger" aria-hidden="true"></i> 
          <Link to="/" className="headerLeft_link">
            <div className="headerLeft_brandname">SIDEKICK <span className="headerLeft_brandname_beta">BETA</span></div>
          </Link> 
      </div>
    );
  }
}

export default HeaderLeft;