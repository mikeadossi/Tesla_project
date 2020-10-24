import React, { Component } from 'react';
import './HeaderLeft.css';

class HeaderLeft extends Component {
  render() {
    return (
      <div className="headerLeft"> 
          <div>Bar</div>
          <i className="fas fa-bars" aria-hidden="true"></i> 
          <div>SIDEKICK</div> 
      </div>
    );
  }
}

export default HeaderLeft;