import React from "react";
import "./GrayBackground.css"; 
import HeaderMobileMenu from "../Header/HeaderMobileMenu/HeaderMobileMenu.js";
import DisplayResetWarning from "../WarningModals/DisplayResetWarning/DisplayResetWarning.js";
import DisplayApplyAllWarning from "../WarningModals/DisplayApplyAllWarning/DisplayApplyAllWarning.js";
import InfoModal from "../../containers/InfoModal/InfoModal";
import { connect } from "react-redux";
import {
  TOGGLE_MOBILE_MENU,
  TOGGLE_RESET_WARNING,
  TOGGLE_APPLY_ALL_WARNING,
  TOGGLE_LOCATIONS,
} from "../../config/actions/types";

const GrayBackground = ({
  menuVisibility,
  toggleMobileMenu,
  toggleResetWarning,
  toggleApplyAllWarning,
  toggleLocations,
  displayMobileMenu,
  displayResetWarning,
  displayApplyAllWarning,
  displayLocations,
  handleResetApply,
  runReset,
  runApplyAll,
  currentUser,
  setCurrentUser,
  allShowrooms,
  allServiceCenters,
  allChargingLocations, 
}) => { 
  
  if (!displayMobileMenu && !displayResetWarning && !displayApplyAllWarning && !displayLocations) {
    return null;
  }

  const closeMobileMenu = () => toggleMobileMenu();
  const closeResetWarning = () => toggleResetWarning();
  const closeApplyAllWarning = () => toggleApplyAllWarning();
  const closeLocations = () => toggleLocations();

  console.log('*** ',allShowrooms)

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
      {displayLocations && (
        <InfoModal
          closeLocations={closeLocations}
          allShowrooms={allShowrooms}
          allServiceCenters={allServiceCenters}
          allChargingLocations={allChargingLocations} 
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
    displayLocations: state.navReducer.displayLocations,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileMenu: () => dispatch({ type: TOGGLE_MOBILE_MENU }),
    toggleResetWarning: () => dispatch({ type: TOGGLE_RESET_WARNING }),
    toggleApplyAllWarning: () => dispatch({ type: TOGGLE_APPLY_ALL_WARNING }),
    toggleLocations: () => dispatch({ type: TOGGLE_LOCATIONS }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GrayBackground);
