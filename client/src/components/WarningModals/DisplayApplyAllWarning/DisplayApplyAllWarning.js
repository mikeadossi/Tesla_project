import React from "react";
import { useSelector } from "react-redux";
import "./DisplayApplyAllWarning.css";

const DisplayApplyAllWarning = ({ 
  closeApplyAllWarning, 
  runApplyAll,
  setTeslaModels, 
}) => {
  const vehicleRenderData = useSelector(
    (state) => state.vehiclesReducer.vehicleRenderData
  );
  const currentModelName = useSelector(
    (state) => state.navReducer.currentModelName
  ); 
  const vehiclesRendered = useSelector(
    (state) => state.vehiclesReducer.vehiclesRendered
  );

  const vehicleName = currentModelName["name"] // model3 
  const spacedVehicleName = currentModelName["renderedTesla"]["model"] // Model 3 

  console.log('**vehiclesRendered - ',vehiclesRendered)

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
          <input 
            className="applyAllReminderToggle" 
            type="checkbox" 
            onChange={(e) => {
              const value = e.target.value;
              // currentUser["apply_all_warning_on"] = 'false';

            }}
          />
        </div>
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
                vehiclesRendered, 
                vehicleName,
                setTeslaModels
              )
              closeApplyAllWarning()}
            }
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
