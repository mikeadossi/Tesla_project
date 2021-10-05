import React from "react";
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
  notifications,
  warnings,
  changeRegion,
  zipcode,
  setzipcode, 
  alertUser,
  setAlertUser, 
  submitZipOrAreacode, 
  handleLogOut,
}) => {

  return (
    <div className="nav_container">
      <HeaderLeft />
      <HeaderCenter
        changeRegion={changeRegion}
        zipcode={zipcode}
        setzipcode={setzipcode} 
        submitZipOrAreacode={submitZipOrAreacode}
      />
      <HeaderRight
        currentUser={currentUser} 
        notifications={notifications}
        warnings={warnings} 
        handleLogOut={handleLogOut}
      /> 
      <GrayBackground
        menuVisibility={menuVisibility}
        closeMobileMenu={closeMobileMenu}
        currentUser={currentUser} 
        alertUser={alertUser}
        setAlertUser={setAlertUser}
        handleLogOut={handleLogOut}
      /> 
      <NotificationDropdown />
    </div>
  );
};
 

export default Nav;