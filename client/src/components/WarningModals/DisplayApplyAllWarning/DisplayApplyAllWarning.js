import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./DisplayApplyAllWarning.css";
import { connect } from "react-redux";
import { UPDATE_VEHICLE_RENDER_DATA } from "../../../config/actions/types";

const DisplayApplyAllWarning = ({
  closeApplyAllWarning,
  runApplyAll,
  teslaModels,
  setTeslaModels,
  currentUser,
  activeFormVals,
  setActiveFormVals,
  handleWarning,
  currentModelName,
}) => {
  // const currentModelName = useSelector(
  //   (state) => state.navReducer.currentModelName
  // );
  const vehiclesRendered = useSelector(
    (state) => state.vehiclesReducer.vehiclesRendered
  );
  const vehicleContent = useSelector(
    (state) => state.vehiclesReducer.vehicleContent
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


  if (currentUser) {
    console.log("currentUser here- ", currentUser);
  }

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
        {applyAllBool ? ( // TODO: this should search for dontShowApplyAllWarning cookie or currentUser not applyAllBool
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
                setActiveFormVals,
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
