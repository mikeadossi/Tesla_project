import React, { Component, useState } from "react";
import "./HeaderRight.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { TOGGLE_MOBILE_MENU } from "../../../config/actions/types";
import { useAuth } from "../../../contexts/AuthContext";

const HeaderRight = ({ toggleMobileMenu }) => {
  const { logOut, currentUser } = useAuth();
  const history = useHistory();
  const [notifications, setNotifications] = useState(2);

  function handleLogOut() {
    try {
      logOut();
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  }

  console.log('currentUser -- ',currentUser)

  return (
    <div className="headerRight app_marginTop"> 
      {currentUser && currentUser.user_email ? (
        <div className="notification_bell_container"> 
        {notifications ? (
          <div className="notifications_number">{notifications}</div> 
        ) : ""}
          <Link className="headerRight_links" to="/Notifications">
            <img
              className="notification_bell"
              src="../../../../images/Nav/bell_icon.png"
              alt="menu"
            />
          </Link>
        </div>
      ) : ("")}
      {currentUser && currentUser.user_email ? (
        <Link className="headerRight_links" to="/">
          <div
            className="headerRight_log_in headerRight_login_btn"
            onClick={() => handleLogOut()}
          >
            LOG OUT
          </div>
        </Link>
      ) : (
        <div>
          <Link className="headerRight_links" to="/userLogin">
            <div
              className="headerRight_log_in headerRight_login_btn" 
            >
              LOG IN
            </div>
          </Link>
          <Link className="headerRight_links" to="/userSignUp">
            <div
              className="headerRight_log_in headerRight_login_btn" 
            >
              SIGN UP
            </div>
          </Link>
        </div>
      )}

      <Link to="/" className="headerRight_links">
        <div className="headerRight_about headerRight_login_btn">ABOUT</div>
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
