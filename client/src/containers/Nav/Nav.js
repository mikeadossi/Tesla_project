import React, { useEffect } from "react";
import "./Nav.css";
import HeaderLeft from "../../components/Header/HeaderLeft/HeaderLeft.js";
import HeaderRight from "../../components/Header/HeaderRight/HeaderRight.js";
import HeaderCenter from "../../components/Header/HeaderCenter/HeaderCenter.js";
import HeaderMobileMenu from "../../components/Header/HeaderMobileMenu/HeaderMobileMenu.js";
import HeaderCookiePermission from "../../components/Header/HeaderCookiePermission/HeaderCookiePermission.js";

const defaultUsername = "Johnny Bravo";

const Nav = () => { 

  return (
    <div className="nav_container">
      <HeaderLeft /> 
      <HeaderCenter />
      <HeaderRight />
      <HeaderMobileMenu username={username} />
      <HeaderCookiePermission />
    </div>
  );
};

export default Nav;
