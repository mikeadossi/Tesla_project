import React from "react";
import "./HeaderRight.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { TOGGLE_MOBILE_MENU } from "../../../config/actions/types"; 

const HeaderRight = ({ 
  toggleMobileMenu,
  currentUser,
  newNotificationsNum,
  warnings, 
  handleLogOut,
  openNotification,
}) => { 

  return (
    <div className="headerRight app_marginTop"> 
      {currentUser && currentUser.user_email ? (
        <div className="notification_bell_container"> 
        {newNotificationsNum && warnings["notifications_on"] === 'true' ? (
          <div className="notifications_number">{newNotificationsNum}</div> 
        ) : ""}
          <div className="headerRight_links">
            <img
              className="notification_bell"
              src="../../../../images/Nav/bell_icon.png"
              alt="menu" 
              onMouseOver={() => openNotification()}
              onMouseLeave={() => openNotification()}
            />
          </div>
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
