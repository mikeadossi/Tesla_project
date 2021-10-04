import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./DisplayApplyAllWarning.css";
import { connect } from "react-redux";
import { UPDATE_VEHICLE_RENDER_DATA } from "../../../config/actions/types";
import Cookies from 'universal-cookie';

const DisplayApplyAllWarning = ({
  closeApplyAllWarning,
  runApplyAll,
  teslaModels,
  setTeslaModels, 
  activeFormVals,
  setActiveFormVals,
  handleWarning,
  currentModelName,
  setActiveFSDSetting,
  setActiveOffMenuAutopilot,
  activeFSDSetting,
  currentUser,
}) => {
  const cookies = new Cookies();
  const [showToggle, setShowToggle] = useState("");

  const vehiclesRendered = useSelector(
    (state) => state.vehiclesReducer.vehiclesRendered
  );

  const vehicleName = currentModelName; // model3
  const spacedVehicleName = teslaModels["vehicle_render"][currentModelName]["model"]; // Model 3

  const [applyAllBool, setApplyAllBool] = useState("false");

  const changeApplyAllBool = () => {
    let bool;
    if (applyAllBool === "false") {
      bool = "true";
    } else if (applyAllBool === "true") {
      bool = "false";
    }
    setApplyAllBool(bool); 
  };

  const permitToShowToggle = () => {
    // users who disallow cookies lose the option to toggle reset and apply all warnings
    // if user is logged in always show toggle, if user is not logged in adhere to cookie settings
    const applyAllCookie = cookies.get('hideApplyAllWarning');
    const doNotSetCookie = cookies.get('doNotSetCookie');
    if(!currentUser){ 
      if(doNotSetCookie && doNotSetCookie === "true"){
        setShowToggle("false");
        return;
      } else if(applyAllCookie && applyAllCookie === "true" || applyAllCookie === "false"){
        setShowToggle("true");
        return;
      }
    };
    setShowToggle("true");
  };

  useEffect(() => {
    permitToShowToggle();
  }, []);


  return (
    <div className="displayApplyAllWarning">
      <div className="warningContainer">
        <div className="warningCloseContainer">
          <div className="warningHeading">APPLY ALL</div>
          <img
            className="warningModalClose"
            src="../../../../images/Nav/close_2.png"
            alt="close"
            onClick={() => closeApplyAllWarning()}
          ></img>
        </div>
        <div className="warningApplyAllText">
          This action will apply certain configuration options to all vehicle
          models.
        </div>
        {showToggle === "true" ? (
          <div className="reminderContainer">
            <div className="reminderText">Don't show this again</div>
            <input
              className="applyAllReminderToggle"
              type="checkbox"
              onChange={(e) => changeApplyAllBool()}
              checked={applyAllBool === "true"}
            />
          </div>
        ) : (
          ""
        )}
        <div className="app_inline-block warningBtnContainer">
          <div
            className="warningBtn cancelWarningModal"
            onClick={() => {
              closeApplyAllWarning();
              setApplyAllBool("false");
            }}
          >
            Cancel
          </div>
          <div
            onClick={() => {
              runApplyAll(
                spacedVehicleName,
                teslaModels,
                vehiclesRendered,
                vehicleName,
                setTeslaModels,
                activeFormVals,
                activeFSDSetting,
                setActiveFormVals,
                setActiveFSDSetting,
                setActiveOffMenuAutopilot,
              );
              closeApplyAllWarning();
              handleWarning(["applyAll", applyAllBool]);
            }}
            className="warningBtn continueToApplyAll"
          >
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => { 
  return {
    teslaModels: state.vehiclesReducer.vehicleRenderData,
    currentModelName: state.navReducer.currentModelName,
    activeFSDSetting: state.vehiclesReducer.activeFSDSetting,
  };
};


export default connect(
  mapStateToProps, 
  {
    setTeslaModels: (teslaModels) => (dispatch) =>
    dispatch({
      type: UPDATE_VEHICLE_RENDER_DATA,
      payload: teslaModels,
    }),
  }
)(DisplayApplyAllWarning);
