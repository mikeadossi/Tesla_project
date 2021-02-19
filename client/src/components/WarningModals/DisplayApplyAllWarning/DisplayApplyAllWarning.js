import React from 'react';
import './DisplayApplyAllWarning.css';

const DisplayApplyAllWarning  = ({ closeApplyAllWarning }) => { 
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
            <div className="warningApplyAllText">This action will apply certain configuration options to all vehicle models.</div>
            <div className="reminderContainer">
                <div className="reminderText">Turn warning off</div>
                <input className="applyAllReminderToggle" type="checkbox" />
            </div>
            <div className="app_inline-block warningBtnContainer">
                <div className="warningBtn cancelWarningModal">Cancel</div>
                <div className="warningBtn continueToApplyAll">Continue</div>
            </div>
        </div>
    </div>
  ); 
}

export default DisplayApplyAllWarning;