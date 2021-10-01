import React from "react";
import "./LandingPageRight.css";  
import { connect } from "react-redux";
import { TOGGLE_MOBILE_MENU } from "../../../config/actions/types";

const LandingPageRight = ({ toggleMobileMenu }) => {
    
    return (
      <div 
        className="landingPageRight_container"
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
  
  export default connect(null, mapDispatchToProps)(LandingPageRight);