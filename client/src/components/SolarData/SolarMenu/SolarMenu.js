import React, { useState } from "react";
import { connect } from "react-redux";
import "./SolarMenu.css";
import {
  SET_SOLAR_PYMT,
} from "../../../config/actions/types";

const SolarMenu = ({
  zip,
  setShowSolarConfig,
  solarRecommendations,
  setRecommendedProducts,
  setRecommendedSize, 
  alertUser,
  setAlertUser,
  setUserEntry,
}) => {
  const [userEnergyCost, setUserEnergyCost] = useState(""); 

  const validateMonthlyCost = (e, value) => { 
    e.preventDefault(); 
    if( isNaN(value) ){
      setAlertUser([{"color": "red"},`${value} is not a number, please try again.`, "solarMenu"]); 
    } else if( value > 2000){
      setAlertUser([{"color": "red"},`submission can't be more than $2,000, please try again.`, "solarMenu"]); 
    } else {
      setUserEntry(value);
      openSolarConfig(value);
    };
  }
  const openSolarConfig = (value) => {
      setAlertUser([]);
      setShowSolarConfig(true);
      submitEnergyCost(value);
  };

  const submitEnergyCost = (v) => {
    if (v < 101) {
      setRecommendedProducts(solarRecommendations[101]);
      setRecommendedSize("4.08");
    } else if (v > 100 && v < 151) {
      setRecommendedProducts(solarRecommendations[151]);
      setRecommendedSize("8.16");
    } else if (v > 150 && v < 201) {
      setRecommendedProducts(solarRecommendations[201]);
      setRecommendedSize("12.24");
    } else if (v > 200 && v < 301) {
      setRecommendedProducts(solarRecommendations[301]);
      setRecommendedSize("16.32");
    } else if (v > 300 && v < 401) {
      setRecommendedProducts(solarRecommendations[401]);
      setRecommendedSize("20.40");
    } else if (v > 400 && v < 501) {
      setRecommendedProducts(solarRecommendations[501]);
      setRecommendedSize("24.28");
    } else if (v > 500 && v < 601) {
      setRecommendedProducts(solarRecommendations[601]);
      setRecommendedSize("28.56");
    } else if (v > 600) {
      setRecommendedProducts(solarRecommendations[701]);
      setRecommendedSize("32.64");
    }
  };

  return (
    <div>
      <div className="app_Menu_container solarMenu_form_container">
        {zip ? <h3 className="solarMenu_form_title">Submit Energy Use</h3> : <h3>To begin search for any US zip code or area code above.</h3>} 
        {zip ? (
          <div className="solarMenu_div">
            <form className="solarMenu_form">
              <div className="app_displayFlex">
                <div className="solarMenu_form_bill">
                  <label className="solarMenu_form_bill_label">
                    Average monthly electricity cost:
                  </label>
                  <span>$</span>
                  <input
                    className="solarMenu_form_bill_input app_main_submit_input app_removeBlue"
                    onChange={(e) => {
                      setUserEnergyCost(e.target.value)
                    }}
                  ></input>
                </div>
                <button
                  className="solarMenu_form_submit_btn app_submit_btn app_noSelect app_removeBlue"
                  onClick={(e) => {
                    validateMonthlyCost(e, userEnergyCost);
                  }} 
                >
                  Submit
                </button>
              </div>
              {alertUser[2] === "solarMenu" ? (<div style={alertUser[0]} className="solarMenu_alert">{alertUser[1]}</div>) : ""}
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    userPymtEntry: state.solarReducer.userPymtEntry,
  };
}

export default connect(mapStateToProps, {
  setUserEntry: (entry) => (dispatch) =>
    dispatch({
      type: SET_SOLAR_PYMT,
      payload: entry,
    }),
})(SolarMenu);
