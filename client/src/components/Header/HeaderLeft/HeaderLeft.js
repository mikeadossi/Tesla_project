import React, { Component } from 'react';
import './HeaderLeft.css';
import { Link }  from 'react-router-dom';

class HeaderLeft extends Component {
  render() {
    return (
      <div className="headerLeft"> 
          <div>Bar</div>
          <i className="fas fa-bars" aria-hidden="true"></i> 
          <Link to="/" className="headerLeft_link">
            <div>SIDEKICK</div>
          </Link> 
      </div>
    );
  }
}

export default HeaderLeft;