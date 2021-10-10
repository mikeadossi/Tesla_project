import React, { useState } from "react";
import "./Nav.css";
import HeaderLeft from "../../components/Header/HeaderLeft/HeaderLeft.js";
import HeaderRight from "../../components/Header/HeaderRight/HeaderRight.js";
import HeaderCenter from "../../components/Header/HeaderCenter/HeaderCenter.js";
import GrayBackground from "../../components/GrayBackground/GrayBackground.js";
import NotificationDropdown from "../../components/NotificationDropdown/NotificationDropdown.js"; 

const Nav = ({
  menuVisibility,
  closeMobileMenu,
  currentUser,
  newNotificationsNum,
  warnings,
  changeRegion,
  zipcode,
  setzipcode,
  alertUser,
  setAlertUser,
  submitZipOrAreacode,
  handleLogOut,
  toggleNotification, 
  viewedNotifications, 
  openNotification,
}) => {



  return (
    <div className="nav_container">
      <HeaderLeft currentUser={currentUser} />
      <HeaderCenter
        changeRegion={changeRegion}
        zipcode={zipcode}
        setzipcode={setzipcode}
        submitZipOrAreacode={submitZipOrAreacode}
      />
      <HeaderRight 
        currentUser={currentUser}
        newNotificationsNum={newNotificationsNum}
        warnings={warnings}
        handleLogOut={handleLogOut}
        openNotification={openNotification}
      />
      <GrayBackground
        menuVisibility={menuVisibility}
        closeMobileMenu={closeMobileMenu}
        currentUser={currentUser}
        alertUser={alertUser}
        setAlertUser={setAlertUser}
        handleLogOut={handleLogOut}
      />
      {currentUser && toggleNotification === "open" ? (
        <NotificationDropdown 
          toggleNotification={toggleNotification} 
          viewedNotifications={viewedNotifications}
          currentUser={currentUser}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
