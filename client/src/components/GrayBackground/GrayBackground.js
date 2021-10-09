import React from "react";
import "./GrayBackground.css";
import HeaderMobileMenu from "../Header/HeaderMobileMenu/HeaderMobileMenu.js";
import { connect } from "react-redux";
import {
  TOGGLE_MOBILE_MENU,
} from "../../config/actions/types";

const GrayBackground = ({ 
  toggleMobileMenu,
  displayMobileMenu,
  currentUser,
  handleLogOut,
}) => {
  if (!displayMobileMenu) { return null; }

  const closeMobileMenu = () => toggleMobileMenu();

  return (
    <div className="grayBackground app_marginTop">
      {displayMobileMenu && (
        <div 
          className="exitGrayBackground"
          onClick={() => {closeMobileMenu()}}
        ></div>
      )}

      {displayMobileMenu && (
        <HeaderMobileMenu
          closeMobileMenu={closeMobileMenu}
          currentUser={currentUser} 
          handleLogOut={handleLogOut}
        />
      )}

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMobileMenu: state.navReducer.displayMobileMenu,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileMenu: () => dispatch({ type: TOGGLE_MOBILE_MENU }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GrayBackground);
