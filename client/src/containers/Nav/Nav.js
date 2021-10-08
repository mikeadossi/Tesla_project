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
  setToggleNotification,
  setCurrentUser,
  updateDB,
  viewedNotifications, 
}) => {


  const openNotification = () => {
    if(toggleNotification === "closed"){ 
      setToggleNotification("open");
    } else if (toggleNotification === "open"){ 
      setToggleNotification("closed");
      let newCurrentUser = { ...currentUser };
      newCurrentUser["notifications_last_viewed_on"] = new Date();
      setCurrentUser(newCurrentUser);
      updateDB("notifications_last_viewed_on", newCurrentUser);
      if(newCurrentUser["viewed_welcome_notification"] === "false"){
        newCurrentUser["viewed_welcome_notification"] = "true";
        updateDB("viewed_welcome_notification", newCurrentUser);
      };
    };
  };



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
