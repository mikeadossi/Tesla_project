import React from "react";
import "./Settings.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Settings = () => { 
    const { currentUser } = useAuth();

    return <div className="settings_container app_pageHeight">
        <h1 className="settings_title">SETTINGS</h1> 
        <div className="settings_signedIn">Signed in as {currentUser && currentUser.email}</div> 
        <div className="settings_section">
            <h3 className="">SHOW/HIDE WARNINGS</h3>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Apply All warning</div>
                <button className="settings_close">Turn Off</button>
            </div>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Reset warning</div>
                <button className="settings_close">Turn Off</button>
            </div>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Notifications</div>
                <button className="settings_close">Turn Off</button>
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
                <button className="settings_close">Close</button>
            </div>
        </div> 
    </div>
}

export default Settings;
