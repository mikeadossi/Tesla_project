import React, { useState } from "react";
import "./Settings.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Settings = () => { 
    const { currentUser } = useAuth();

    const [warnings, setWarnings] = useState({
        apply_all_warning_on: true,
        reset_warning_on: true,
        notifications_on: true,
    }) 

    const handleWarning = (ObjKey) => { 
        setWarnings(() => {
            if(warnings[ObjKey] === true){
                warnings[ObjKey] = false
            } else {
                warnings[ObjKey] = true
            } 
            console.log(warnings[ObjKey])
            return warnings;
        }) 
    }

    const closeAccount = () => {
        console.log('account closed!')
    }

    

    return <div className="settings_container app_pageHeight">
        <h1 className="settings_title">SETTINGS</h1> 
        <div className="settings_signedIn">Signed in as {currentUser && currentUser.email}</div> 
        <div className="settings_section">
            <h3 className="">SHOW/HIDE WARNINGS</h3>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Apply All warning</div>
                {warnings["apply_all_turned_on"] ? (
                    <button 
                        onClick={() => handleWarning("apply_all_warning_on")} 
                        className="settings_close"
                    >
                        Turn Off
                    </button>
                ) : (
                    <button 
                        onClick={() => handleWarning("apply_all_warning_on")} 
                        className="settings_close"
                    >
                        Turn On
                    </button>
                )} 
            </div>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Reset warning</div>
                {warnings["reset_warning_on"] ? (
                    <button 
                        onClick={() => handleWarning("reset_warning_on")} 
                        className="settings_close"
                    >
                        Turn Off
                    </button>
                ) : (
                    <button 
                        onClick={() => handleWarning("reset_warning_on")} 
                        className="settings_close"
                    >
                        Turn On
                    </button>
                )} 
            </div>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Notifications</div>
                {warnings["notifications_on"] ? (
                    <button 
                        onClick={() => handleWarning("notifications_on")} 
                        className="settings_close"
                    >
                        Turn Off
                    </button>
                ) : (
                    <button 
                        onClick={() => handleWarning("notifications_on")} 
                        className="settings_close"
                    >
                        Turn On
                    </button>
                )} 
            </div>
        </div> 
        <div className="settings_section">
            <h3 className="">CHANGE PASSWORD</h3>
            <div className="">
                <div className="settings_subsection app_displayFlex">
                    <div className="settings_text">Current Password</div>
                    <input className="settings_password_entry" />
                </div>
                <div className="settings_subsection app_displayFlex">
                    <div className="settings_text">New Password</div>
                    <input className="settings_password_entry" />
                </div>
                <div className="settings_subsection app_displayFlex">
                    <div className="settings_text">New Password</div>
                    <input className="settings_password_entry" />
                </div> 
            </div>
            <button className="settings_close">Change Password</button>
        </div>
        <div className="settings_section">
            <h3 className="">CANCEL ACCOUNT</h3>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Close account</div>
                <button 
                    className="settings_close"
                    onClick={() => closeAccount()}
                >
                    Close
                </button>
            </div>
        </div> 
    </div>
}

export default Settings;
