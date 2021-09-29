import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./DisplayResetWarning.css";

const DisplayResetWarning = ({
  closeResetWarning,
  runReset,
  handleWarning, 
}) => {
  const currentModelName = useSelector(
    (state) => state.navReducer.currentModelName
  );

  const getAllVehicles = useSelector((state) => state.vehiclesReducer.vehicle);
  const vehicleRenderData = useSelector(
    (state) => state.vehiclesReducer.vehicleRenderData
  );

  const [resetBool, setResetBool] = useState("false");

  const changeResetBool = () => {
    let bool;
    if (resetBool === "false") {
      bool = "true";
    } else if (resetBool === "true") {
      bool = "false";
    }
    setResetBool(bool); 
  };

  return (
    <div className="displayApplyAllWarning">
      <div className="warningContainer">
        <div className="warningCloseContainer">
          <div className="warningHeading">RESET CONFIGURATION</div>
          <img
            className="warningModalClose"
            src="../../../../images/Nav/close_2.png"
            alt="close"
            onClick={() => closeResetWarning()}
          ></img>
        </div>
        <div className="warningApplyAllText">
          This action will return all selected vehicle options to base options.
        </div>
        {resetBool ? ( // TODO: this should search for dontShowResetWarning cookie or currentUser not resetBool
          <div className="reminderContainer">
            <div className="reminderText">Don't show this again</div>
            <input
              className="resetReminderToggle"
              type="checkbox"
              onChange={(e) => changeResetBool()}
              checked={resetBool === "true"}
            />
          </div>
        ) : (
          ""
        )}
        <div className="app_inline-block warningBtnContainer">
          <div
            className="warningBtn cancelWarningModal"
            onClick={() => {
              closeResetWarning();
              setResetBool("false");
            }}
          >
            Cancel
          </div>
          <div
            onClick={() => {
              runReset(currentModelName, vehicleRenderData);
              closeResetWarning();
              handleWarning(["reset", resetBool]);
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
export default DisplayResetWarning;
// display render data
