import React from "react";
import "./GrayBackground.css";
import HeaderMobileMenu from "../Header/HeaderMobileMenu/HeaderMobileMenu.js";
import DisplayResetWarning from "../WarningModals/DisplayResetWarning/DisplayResetWarning.js";
import DisplayApplyAllWarning from "../WarningModals/DisplayApplyAllWarning/DisplayApplyAllWarning.js";
import { connect } from "react-redux";
import {
  TOGGLE_MOBILE_MENU,
  TOGGLE_RESET_WARNING,
  TOGGLE_APPLY_ALL_WARNING,
} from "../../config/actions/types";

const GrayBackground = ({
  menuVisibility,
  toggleMobileMenu,
  toggleResetWarning,
  toggleApplyAllWarning,
  displayMobileMenu,
  displayResetWarning,
  displayApplyAllWarning,
  handleSuccess
}) => {
  if (!displayMobileMenu && !displayResetWarning && !displayApplyAllWarning) {
    return null;
  }

  const closeMobileMenu = () => toggleMobileMenu();
  const closeResetWarning = () => toggleResetWarning();
  const closeApplyAllWarning = () => toggleApplyAllWarning();

  return (
    <div className="grayBackground app_marginTop">
      {displayMobileMenu && (
        <HeaderMobileMenu closeMobileMenu={closeMobileMenu} />
      )}
      {displayResetWarning && (
        <DisplayResetWarning closeResetWarning={closeResetWarning} handleSuccess={handleSuccess} /> 
      )}
      {displayApplyAllWarning && (
        <DisplayApplyAllWarning closeApplyAllWarning={closeApplyAllWarning} handleSuccess={handleSuccess} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMobileMenu: state.navReducer.displayMobileMenu,
    displayResetWarning: state.navReducer.displayResetWarning,
    displayApplyAllWarning: state.navReducer.displayApplyAllWarning,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileMenu: () => dispatch({ type: TOGGLE_MOBILE_MENU }),
    toggleResetWarning: () => dispatch({ type: TOGGLE_RESET_WARNING }),
    toggleApplyAllWarning: () => dispatch({ type: TOGGLE_APPLY_ALL_WARNING }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GrayBackground);
