import React, { useState } from "react";
import "./Settings.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUserDetails } from "../../config/actions/userActions";

const Settings = ({ 
    updateUserDetails,
    currentUser,
    setCurrentUser,
}) => { 
    // const history = useHistory(); 

    // if(currentUser === null || {}){
    //     history.push("/lost"); 
    //     return
    // } 

    const [warnings, setWarnings] = useState({
        apply_all_warning_on: currentUser["apply_all_warning_on"],
        reset_warning_on: currentUser["reset_warning_on"],
        notifications_on: currentUser["notifications_on"],
    }) 

    const handleWarning = (ObjKey) => {
        let newWarnings = {...warnings} 
        let newCurrentUser = {...currentUser}; 
        if(newWarnings[ObjKey] === true || newWarnings[ObjKey] === ""){ 
            newWarnings[ObjKey] = false;
            newCurrentUser[ObjKey] = false;
        } else if(newWarnings[ObjKey] === false) { 
            newWarnings[ObjKey] = true;
            newCurrentUser[ObjKey] = true;
        }  
        setWarnings(newWarnings);
        setCurrentUser(newCurrentUser);
        const parcel = {
            id: newCurrentUser.id,
            ourKey: ObjKey,
            ourValue: newCurrentUser[ObjKey],
        } 
        console.log('parcel: ',parcel)
        return updateUserDetails(parcel);
    }

    const closeAccount = () => {
        console.log('account closed!')
    } 



    return <div className="settings_container app_pageHeight"> 
        <h1 className="settings_title">SETTINGS</h1> 
        <div className="settings_signedIn">Signed in as {currentUser && currentUser.user_email}</div> 
        <div className="settings_section">
            <h3 className="">SHOW/HIDE WARNINGS</h3>
            <div className="settings_subsection app_displayFlex">
                <div className="settings_text">Apply All warning</div>
                {warnings["apply_all_warning_on"] ? (
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

// export default Settings;

function mapStateToProps(state) {
    return {
      user_data: state.userReducer.user_data, 
    };
  }
  
  export default connect(mapStateToProps, { updateUserDetails })(Settings); 
