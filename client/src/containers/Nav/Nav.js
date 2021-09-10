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
}) => {
  
  return (
    <div className="nav_container">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
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
