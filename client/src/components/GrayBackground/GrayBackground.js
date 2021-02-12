import React from 'react';
import './GrayBackground.css';
import HeaderMobileMenu from "../Header/HeaderMobileMenu/HeaderMobileMenu.js";

const GrayBackground  = ({ menuVisibility, closeMobileMenu }) => { 
  return (
    <div className="grayBackground app_marginTop">
      {menuVisibility.mobileMenu ? ( 
        <HeaderMobileMenu closeMobileMenu={closeMobileMenu} />
        ) : (
          ""
      )}
    </div>
  ); 
}

export default GrayBackground;