import React, { useEffect, useState } from "react";
import "./Nav.css";
import HeaderLeft from "../../components/Header/HeaderLeft/HeaderLeft.js";
import HeaderRight from "../../components/Header/HeaderRight/HeaderRight.js";
import HeaderCenter from "../../components/Header/HeaderCenter/HeaderCenter.js";
import HeaderMobileMenu from "../../components/Header/HeaderMobileMenu/HeaderMobileMenu.js";
import HeaderCookiePermission from "../../components/Header/HeaderCookiePermission/HeaderCookiePermission.js";

const defaultUsername = "Johnny Bravo";

const Nav = () => { 

  const [menuVisibility, setMenuVisibility] = useState(false);

  const showMobileMenu = () => {
    setMenuVisibility(true);
  };

  const closeMobileMenu = () => {
    setMenuVisibility(false);
  }

  return (
    <div className="nav_container">
      <HeaderLeft /> 
      <HeaderCenter />
      <HeaderRight showMobileMenu={showMobileMenu} />

      {menuVisibility ? ( 
        <HeaderMobileMenu closeMobileMenu={closeMobileMenu} />
        ) : (
          ""
      )}

      <HeaderCookiePermission />
    </div>
  );
};

export default Nav;
