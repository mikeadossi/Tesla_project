import React from "react";
import "./MobileNav.css";
import MobileNavCenter from "../../components/MobileNav/MobileNavCenter/MobileNavCenter.js";
import MobileNavRight from "../../components/MobileNav/MobileNavRight/MobileNavRight.js";
import HeaderCookiePermission from "../../components/Header/HeaderCookiePermission/HeaderCookiePermission.js";
import GrayBackground from "../../components/GrayBackground/GrayBackground.js";

const MobileNav = ({
  menuVisibility,
  closeMobileMenu,
  currentUser,
  alertUser,
  setAlertUser,
  handleLogOut,
}) => {
  return (
    <div className="mobileNav_container">
      <MobileNavCenter />
      <MobileNavRight />
      <GrayBackground
        menuVisibility={menuVisibility}
        closeMobileMenu={closeMobileMenu}
        currentUser={currentUser}
        alertUser={alertUser}
        setAlertUser={setAlertUser}
        handleLogOut={handleLogOut}
      />
      <HeaderCookiePermission />
    </div>
  );
};

export default MobileNav;
