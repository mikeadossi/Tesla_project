import React, { Component } from 'react';
import './HeaderRight.css';
import { Link }  from 'react-router-dom';

const HeaderRight  = ({ showMobileMenu }) => { 
  return (
    <div className="headerRight app_marginTop">
        <Link to="/" className="headerRight_links">
          <div className="headerRight_about headerRight_login_btn">ABOUT</div>
        </Link>
        <Link to="/userSignup" className="headerRight_links">
          <div className="headerRight_sign_up headerRight_login_btn">SIGN UP</div>
        </Link>
        <Link to="/userLogin" className="headerRight_links">
          <div className="headerRight_log_in headerRight_login_btn">LOG IN</div>
        </Link> 
        <Link to="/userLogin" className="headerRight_links">
          <div className="headerRight_log_in headerRight_login_btn">LOG OUT</div>
        </Link> 
        <img 
          className="headerRight_hamburger" 
          src="../../../../images/Nav/hamburger.png" 
          alt="menu"
          onClick={() => showMobileMenu()}
        />
    </div>
  ); 
}

export default HeaderRight;