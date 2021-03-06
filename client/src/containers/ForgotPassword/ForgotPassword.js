import React from "react";
import "./ForgotPassword.css"; 

const ForgotPassword = () => { 
  return <div className="forgotPassword_container app_pageHeight"> 
      <h1 className="forgotPassword_title">FORGOT PASSWORD</h1> 
      <div className="settings_subsection app_displayFlex">
          <div className="settings_text">Enter user email</div>
          <input className="fogotPassword_email" />
      </div> 
      <button className="fogotPassword_close">Set up new Password</button>
  </div>; 
}

export default ForgotPassword;