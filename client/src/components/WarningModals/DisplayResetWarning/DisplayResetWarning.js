import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./DisplayResetWarning.css";
import Cookies from 'universal-cookie';

const DisplayResetWarning = ({
  closeResetWarning,
  runReset,
  currentUser,
  handleWarning, 
}) => {
  const cookies = new Cookies();
  const [resetBool, setResetBool] = useState("false");
  const [showToggle, setShowToggle] = useState("");

  const currentModelName = useSelector(
    (state) => state.navReducer.currentModelName
  );

  const vehicleRenderData = useSelector(
    (state) => state.vehiclesReducer.vehicleRenderData
  );

  const changeResetBool = () => {
    let bool;
    if (resetBool === "false") {
      bool = "true";
    } else if (resetBool === "true") {
      bool = "false";
    }
    setResetBool(bool); 
  };
  
  const permitToShowToggle = () => {
    // if user is logged in always show toggle, if user is not logged in adhere to cookie settings
    const resetCookie = cookies.get('hideResetWarning');
    const doNotSetCookie = cookies.get('doNotSetCookie');
    if(!currentUser){ 
      if(doNotSetCookie && doNotSetCookie === "true"){
        setShowToggle("false");
        return;
      } else if(resetCookie && resetCookie === "true" || resetCookie === "false"){
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
        {showToggle === "true" ? (
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
