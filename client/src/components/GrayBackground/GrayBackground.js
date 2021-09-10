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
  handleResetApply,
  runReset,
  runApplyAll,
  currentUser,
  setCurrentUser
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
        <HeaderMobileMenu 
          closeMobileMenu={closeMobileMenu} 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {displayResetWarning && (
        <DisplayResetWarning 
          closeResetWarning={closeResetWarning} 
          handleResetApply={handleResetApply} 
          runReset={runReset} 
        /> 
      )}
      {displayApplyAllWarning && (
        <DisplayApplyAllWarning 
          closeApplyAllWarning={closeApplyAllWarning} 
          handleResetApply={handleResetApply}
          runApplyAll={runApplyAll}
        />
      )}
    </div>
  );
};
// REDUX TODO - how does mapStat work here? It seems to be assigning values, but how does it toggle?
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
    toggleResetWarning: () => dispatch({ type: TOGGLE_RESET_WARNING}),
    toggleApplyAllWarning: () => dispatch({ type: TOGGLE_APPLY_ALL_WARNING}), 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GrayBackground);
