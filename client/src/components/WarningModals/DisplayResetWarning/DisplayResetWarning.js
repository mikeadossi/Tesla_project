import React from 'react';
import { useSelector } from "react-redux";
import './DisplayResetWarning.css';

const DisplayResetWarning  = ({ closeResetWarning, runReset }) => { 
    const currentModelName = useSelector(
        (state) => state.navReducer.currentModelName
    );
    const getAllVehicles = useSelector(
        (state) => state.vehiclesReducer.vehicle
    );

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
                <div className="warningApplyAllText">This action will return all selected vehicle options to base options.</div>
                <div className="reminderContainer">
                    <div className="reminderText">Don't show this again</div>
                    <input className="resetReminderToggle" type="checkbox" />
                </div>
                <div className="app_inline-block warningBtnContainer"> 
                    <div
                        className="warningBtn cancelWarningModal"
                        onClick={() => closeResetWarning()}
                    >
                        Cancel
                    </div>
                    <div 
                        onClick={() => runReset(currentModelName,getAllVehicles) }
                        className="warningBtn continueToApplyAll"
                    >
                        Continue
                    </div>
                </div>
            </div>
        </div>
      ); 
    }
export default DisplayResetWarning;
// display render data