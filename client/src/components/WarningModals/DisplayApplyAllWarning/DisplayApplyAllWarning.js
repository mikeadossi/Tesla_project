import React from "react";
import { useSelector } from "react-redux";
import "./DisplayApplyAllWarning.css";

const DisplayApplyAllWarning = ({
  closeApplyAllWarning,
  runApplyAll,
  setTeslaModels,
  currentUser,
  activeFormVals,
  setActiveFormVals,
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

  // console.log(vehicleName+' adj 1- '+vehicleRenderData["vehicle_render"][vehicleName]["payment_object"]["adjustments"])

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
        {currentUser ? (
          <div className="reminderContainer">
            <div className="reminderText">Don't show this again</div>
            <input
              className="applyAllReminderToggle"
              type="checkbox"
            />
          </div>
        ) : (
          ""
        )}
        <div className="app_inline-block warningBtnContainer">
          <div
            className="warningBtn cancelWarningModal"
            onClick={() => closeApplyAllWarning()}
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
