import React from 'react';
import './DisplayResetWarning.css';

const DisplayResetWarning  = ({ closeResetWarning }) => { 
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
                    <div className="reminderText">Turn warning off</div>
                    <input className="resetReminderToggle" type="checkbox" />
                </div>
                <div className="app_inline-block warningBtnContainer">
                    <div className="warningBtn cancelWarningModal">Cancel</div>
                    <div className="warningBtn continueToApplyAll">Continue</div>
                </div>
            </div>
        </div>
      ); 
    }
export default DisplayResetWarning;