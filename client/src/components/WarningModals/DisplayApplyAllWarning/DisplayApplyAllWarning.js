import React from "react";
import { useSelector } from "react-redux";
import "./DisplayApplyAllWarning.css";

const DisplayApplyAllWarning = ({ closeApplyAllWarning, handleSuccess }) => {
  const vehicleRenderData = useSelector(
    (state) => state.vehiclesReducer.vehicleRenderData
  );
  const currentModelName = useSelector(
    (state) => state.navReducer.currentModelName
  );
  console.log("vehicleRenderData >>", vehicleRenderData[currentModelName]);
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
        <div className="reminderContainer">
          <div className="reminderText">Don't show this again</div>
          <input className="applyAllReminderToggle" type="checkbox" />
        </div>
        <div className="app_inline-block warningBtnContainer">
          <div
            className="warningBtn cancelWarningModal"
            onClick={() => closeApplyAllWarning()}
          >
            Cancel
          </div>
          <div
            onClick={() => handleSuccess("applyAll")}
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
