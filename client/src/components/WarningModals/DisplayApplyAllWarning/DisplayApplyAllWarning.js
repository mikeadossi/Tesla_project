import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./DisplayApplyAllWarning.css";

const DisplayApplyAllWarning = ({
  closeApplyAllWarning,
  runApplyAll,
  setTeslaModels,
  currentUser,
  activeFormVals,
  setActiveFormVals,
  handleWarning,
}) => {
  const currentModelName = useSelector(
    (state) => state.navReducer.currentModelName
  );
  const vehiclesRendered = useSelector(
    (state) => state.vehiclesReducer.vehiclesRendered
  );
  const vehicleContent = useSelector(
    (state) => state.vehiclesReducer.vehicleContent
  );

  const vehicleName = currentModelName["name"]; // model3
  const spacedVehicleName = currentModelName["renderedTesla"]["model"]; // Model 3

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
                vehicleContent,
                vehiclesRendered,
                vehicleName,
                setTeslaModels,
                activeFormVals,
                setActiveFormVals
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

export default DisplayApplyAllWarning;
