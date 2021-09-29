import React, { useState } from "react";
import "./Nav.css";
import HeaderLeft from "../../components/Header/HeaderLeft/HeaderLeft.js";
import HeaderRight from "../../components/Header/HeaderRight/HeaderRight.js";
import HeaderCenter from "../../components/Header/HeaderCenter/HeaderCenter.js";
import GrayBackground from "../../components/GrayBackground/GrayBackground.js";
import HeaderCookiePermission from "../../components/Header/HeaderCookiePermission/HeaderCookiePermission.js";

const Nav = ({
  menuVisibility,
  closeMobileMenu,
  displayMobileMenu,
  currentUser,
  setCurrentUser,
  notifications,
  warnings,
  changeRegion,
  zipcode,
  setzipcode,
  acceptZipOrAreacode,
}) => {
  return (
    <div className="nav_container">
      <HeaderLeft />
      <HeaderCenter
        changeRegion={changeRegion}
        zipcode={zipcode}
        setzipcode={setzipcode}
        acceptZipOrAreacode={acceptZipOrAreacode}
      />
      <HeaderRight
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        notifications={notifications}
        warnings={warnings}
      />

      <GrayBackground
        menuVisibility={menuVisibility}
        closeMobileMenu={closeMobileMenu}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <HeaderCookiePermission />
    </div>
  );
};

export default Nav;
