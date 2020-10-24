import React, { Component } from 'react';
import './Nav.css';
import HeaderLeft from '../../components/Header/HeaderLeft/HeaderLeft.js';
import HeaderRight from '../../components/Header/HeaderRight/HeaderRight.js';
import HeaderCenter from '../../components/Header/HeaderCenter/HeaderCenter.js';

class Nav extends Component {
  render() {
    return ( 
      <div className="nav_container">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>  
    );
  }
}

export default Nav;