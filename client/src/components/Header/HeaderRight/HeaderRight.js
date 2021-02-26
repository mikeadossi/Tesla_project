import React, { Component } from "react";
import "./HeaderRight.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { TOGGLE_MOBILE_MENU } from "../../../config/actions/types";

const HeaderRight = ({ toggleMobileMenu }) => {
  return (
    <div className="headerRight app_marginTop">
      <div className="notification_bell_container">
        <div className="notifications_number">9+</div>
        <img 
          className="notification_bell"
          src="../../../../images/Nav/bell_icon.png"
          alt="menu"
        />
      </div>
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
        onClick={() => toggleMobileMenu()}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileMenu: () => {
      dispatch({ type: TOGGLE_MOBILE_MENU });
    },
  };
}

export default connect(null, mapDispatchToProps)(HeaderRight);
