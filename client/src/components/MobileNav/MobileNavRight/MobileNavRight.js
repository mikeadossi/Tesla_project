import React from "react";
import "./MobileNavRight.css";
import { connect } from "react-redux";
import { TOGGLE_MOBILE_MENU } from "../../../config/actions/types";

const MobileNavRight = ({ toggleMobileMenu }) => {
  return (
    <div
      className="mobileNavRight_container"
      onClick={() => toggleMobileMenu()}
    >
      <img
        className="headerRight_hamburger"
        src="../../../../images/Nav/hamburger.png"
        alt="menu"
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileMenu: () => {
      dispatch({ type: TOGGLE_MOBILE_MENU });
    },
  };
}

export default connect(null, mapDispatchToProps)(MobileNavRight);
