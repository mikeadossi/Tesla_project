import React, { Component } from 'react';
import './HeaderMobileMenu.css';
import { Link }  from 'react-router-dom';

const HeaderMobileMenu  = () => { 
  return (
    <div className="headerMobileMenu app_marginTop">
        <div className="headerMobileMenu_contents">
            <div className="">Welcome username</div>
            <div className="headerMobileMenu_close">X</div>
            <Link to="/" className="headerMobileMenu_links app_textdecorationNone">
              <div className="headerMobileMenu_about headerMobileMenu_login_btn">About</div>
            </Link>
            <Link to="/userSignup" className="headerMobileMenu_links app_textdecorationNone">
              <div className="headerMobileMenu_sign_up headerMobileMenu_login_btn">Sign up</div>
            </Link>
            <Link to="/userLogin" className="headerMobileMenu_links app_textdecorationNone">
              <div className="headerMobileMenu_log_in headerMobileMenu_login_btn">Log in</div>
            </Link> 
            <Link to="/userLogin" className="headerMobileMenu_links app_textdecorationNone">
              <div className="headerMobileMenu_log_in headerMobileMenu_login_btn">Log out</div> 
            </Link> 
        </div>
    </div>
  ); 
}

export default HeaderMobileMenu;