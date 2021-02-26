import React from 'react';
import './HeaderMobileMenu.css';
import { Link }  from 'react-router-dom';

const HeaderMobileMenu  = ({ closeMobileMenu }) => { 
  return (
    <div className="headerMobileMenu">
        <div
          className="vehicleConfig_close_container"
          onClick={() => closeMobileMenu()} 
        >
          <img
              className="vehicleConfig_close"
              src="../../../../images/Nav/close_2.png"
              alt="close" 
          ></img>
        </div>
        <Link to="/" className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_about headerMobileMenu_login_btn">SETTINGS</div>
        </Link>
        <Link to="/" className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_about headerMobileMenu_login_btn">NOTIFICATIONS</div>
        </Link>
        <Link to="/" className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_about headerMobileMenu_login_btn">ABOUT</div>
        </Link> 
        <Link to="/" className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_about headerMobileMenu_login_btn">VEHICLE</div>
        </Link>
        <Link to="/" className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_about headerMobileMenu_login_btn">SOLAR</div>
        </Link>
        <Link to="/userSignup" className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_sign_up headerMobileMenu_login_btn">SIGN UP</div>
        </Link>
        <Link to="/userLogin" className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_log_in headerMobileMenu_login_btn">LOG IN</div>
        </Link> 
        <Link to="/userLogin" className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_log_in headerMobileMenu_login_btn">LOG OUT</div> 
        </Link> 
    </div>
  ); 
}

export default HeaderMobileMenu;