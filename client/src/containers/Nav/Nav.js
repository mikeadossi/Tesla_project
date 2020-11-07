import React, { Component, useEffect } from 'react';
import './Nav.css';
import HeaderLeft from '../../components/Header/HeaderLeft/HeaderLeft.js';
import HeaderRight from '../../components/Header/HeaderRight/HeaderRight.js';
import HeaderCenter from '../../components/Header/HeaderCenter/HeaderCenter.js';

function Nav() {

  useEffect(() => {
    fetch('http://localhost:3002/statedata', { method:'POST', headers:{'Content-Type': 'application/json'}}).then(res => res.json()).then((res) => console.log(res)).catch((err)=> console.log(err))
  });

  return (
    <div className="nav_container">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
}

export default Nav;