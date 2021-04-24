import React, { useState } from "react";
import "./LandingPageNav.css";
import LandingPageCenter from "../../components/LandingPage/LandingPageCenter/LandingPageCenter.js";
import LandingPageRight from "../../components/LandingPage/LandingPageRight/LandingPageRight.js";
import GrayBackground from "../../components/GrayBackground/GrayBackground.js";
import HeaderCookiePermission from "../../components/Header/HeaderCookiePermission/HeaderCookiePermission.js"; 

const LandingPageNav = ({
    menuVisibility, 
    closeMobileMenu,
    displayMobileMenu,
  }) => {
    
    return (
      <div className="landingPageNav_container">
        <LandingPageCenter />
        <LandingPageRight />

        <GrayBackground
          menuVisibility={menuVisibility}
          closeMobileMenu={closeMobileMenu}
        />  

        <HeaderCookiePermission />
      </div>
    );
  };
  
  
  export default LandingPageNav;