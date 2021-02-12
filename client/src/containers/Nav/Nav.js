import React, { useState } from "react";
import "./Nav.css";
import HeaderLeft from "../../components/Header/HeaderLeft/HeaderLeft.js";
import HeaderRight from "../../components/Header/HeaderRight/HeaderRight.js";
import HeaderCenter from "../../components/Header/HeaderCenter/HeaderCenter.js";
import GrayBackground from "../../components/GrayBackground/GrayBackground.js";
import HeaderCookiePermission from "../../components/Header/HeaderCookiePermission/HeaderCookiePermission.js";

const defaultUsername = "Johnny Bravo";

const Nav = () => { 

  const [menuVisibility, setMenuVisibility] = useState({
    mobileMenu: false,
    applyAllWarning: false,
    resetWarning: false
  });

  const showMobileMenu = (value) => {
    setMenuVisibility({ [value]: true });
  };

  const closeMobileMenu = () => {
    setMenuVisibility({
      mobileMenu: false,
      applyAllWarning: false,
      resetWarning: false
    });
  }

  return (
    <div className="nav_container">
      <HeaderLeft /> 
      <HeaderCenter />
      <HeaderRight showMobileMenu={showMobileMenu} />

      {menuVisibility.mobileMenu ? ( 
        <GrayBackground 
          menuVisibility={menuVisibility} 
          closeMobileMenu={closeMobileMenu} 
        />
        ) : (
          ""
      )}

      <HeaderCookiePermission />
    </div>
  );
};

export default Nav;
