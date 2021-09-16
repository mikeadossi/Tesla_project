import React, { useState, useRef } from "react";
import "./Settings.css";
import { useHistory } from "react-router-dom"; 
import axios from "axios";

const Settings = ({  
    currentUser,
    setCurrentUser,
}) => { 
    const currentPasswRef = useRef();
    const newPasswRef = useRef();
    const newPasswConfirmRef = useRef();

    const [settingsError, setSettingsError] = useState("");
    const [settingsSuccessMsg, setSettingsSuccessMsg] = useState(""); 

    const history = useHistory(); 

    // if(currentUser === null || {}){
    //     history.push("/lost"); 
    //     return
    // } 

    const [warnings, setWarnings] = useState({
        apply_all_warning_on: currentUser["apply_all_warning_on"],
        reset_warning_on: currentUser["reset_warning_on"],
        notifications_on: currentUser["notifications_on"],
    }) 

    const handleWarning = async (ObjKey) => {
        let newWarnings = {...warnings} 
        let newCurrentUser = {...currentUser};

        if(newWarnings[ObjKey] === 'true' ){ 
            newWarnings[ObjKey] = 'false';
            newCurrentUser[ObjKey] = 'false';
        } else if(newWarnings[ObjKey] === 'false') { 
            newWarnings[ObjKey] = 'true';
            newCurrentUser[ObjKey] = 'true';
        }
        setWarnings(newWarnings);
        setCurrentUser(newCurrentUser);
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const parcel = {
            id: newCurrentUser.id,
            ourKey: ObjKey,
            ourValue: newCurrentUser[ObjKey],
        }
          
        await axios.post(`http://localhost:3002/updateUserData`, parcel, axiosConfig); 
    }

    const closeAccount = async () => { 
        let newCurrentUser = {...currentUser};

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const parcel = {
            id: newCurrentUser.id,
            email: newCurrentUser.user_email
        }
        
        if(window.confirm("Are you sure you want to delete your account?")){
            await axios.post(`http://localhost:3002/deleteUserData`, parcel, axiosConfig); 
            history.push("/");
            setCurrentUser({});
        } 
    } 

    const changePassword = async (e) => {
        e.preventDefault();

        if(newPasswConfirmRef.current.value !== newPasswRef.current.value){
            setSettingsError("Passwords do not match!");
        } else {
            // confirm submitted "current password" matches users account password
            const axiosConfig = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const body = {
                email: currentUser.user_email,
                password: currentPasswRef.current.value,
            } 

            const user = await axios.post(`http://localhost:3002/logUserIntoApp`, body, axiosConfig);
            
            if(user){ 
                // submitted "current password" matches, now update password
                const parcel = {
                    id: currentUser.id,
                    ourKey: "user_password",
                    ourValue: newPasswRef.current.value,
                } 
                  
                const success = await axios.post(`http://localhost:3002/updateUserData`, parcel, axiosConfig); 

                if(success){   
                    newPasswConfirmRef.current.value = '';
                    newPasswRef.current.value = ''; 
                    currentPasswRef.current.value = ''; 
                    setSettingsSuccessMsg("Password has been changed!");
                }
            } else {
                setSettingsError("Incorrect Current Password given!");
            }
            
        } 
    }



    return <div className="settings_container app_pageHeight"> 
        <h1 className="settings_title">SETTINGS</h1> 
        <div className="settings_signedIn">Signed in as {currentUser && currentUser.user_email}</div> 
        <div className="settings_section">
            <h3 className="">SHOW/HIDE WARNINGS</h3>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Apply All warning</div>
                {warnings["apply_all_warning_on"] === 'true' ? (
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
                {warnings["reset_warning_on"] === 'true' ? (
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
                {warnings["notifications_on"] === 'true' ? (
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
        <form className="settings_section" onSubmit={changePassword}>
            <h3 className="">CHANGE PASSWORD</h3>
            <div className="">
                <div className="settings_subsection app_displayFlex">
                    <div className="settings_text">
                        Current Password
                    </div>
                    <input 
                        className="settings_password_entry" 
                        type="password" 
                        ref={currentPasswRef}
                    />
                </div>
                <div className="settings_subsection app_displayFlex">
                    <div className="settings_text">
                        New Password
                    </div>
                    <input 
                        className="settings_password_entry" 
                        type="password"
                        ref={newPasswRef}
                    />
                </div>
                <div className="settings_subsection app_displayFlex">
                    <div className="settings_text">
                        New Password
                    </div>
                    <input 
                        className="settings_password_entry" 
                        type="password"  
                        ref={newPasswConfirmRef} 
                    />
                </div> 
                {settingsError ? (
                    <div className="register_alert register_alert_password">
                        {settingsError}
                    </div>
                ) : (
                    ""
                )}
                {settingsSuccessMsg ? (
                    <div className="register_alert_success register_alert_password">
                        {settingsSuccessMsg}
                    </div>
                ) : (
                    ""
                )}
            </div>
            <button 
                className="settings_close"
                type="submit" 
            >
                Change Password
            </button>
        </form>
        <div className="settings_section">
            <h3 className="">CANCEL ACCOUNT</h3>
            <div className="settings_subsection app_displayFlex">
                <button 
                    className="settings_close"
                    onClick={() => closeAccount()}
                >
                    Close Account
                </button>
            </div>
        </div> 
    </div>
}

export default Settings;
