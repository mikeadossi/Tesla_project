import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  async function getTempPassword(e) {
    e.preventDefault();
    // call server endpoint that calls /isUserRegistered
    // if email exists create a temp password (generate-password package) and call /updateUserData. Send email to user, and return success message to client
    // update your login code - if password doesn't match, check temp password. Also if temprary password is used to log in the original password gets deleted, and temp password is set back to null!
  }

  return (
    <div className="forgotPassword_container app_pageHeight">
      <form onSubmit={getTempPassword}>
        <h1 className="forgotPassword_title">FORGOT PASSWORD</h1>
        <div className="forgotPassword_text">
          Submit the form below to receive a temporary password.
        </div>
        <div className="forgotPassword_email_container settings_subsection app_displayFlex">
          <div className="settings_text">Enter user email</div>
          <input className="fogotPassword_email" type="email" required />
        </div>
        <div className="forgotPassword_not_found">
          Email not found: myemail@gmail.com
        </div>
        <div className="forgotPassword_success">
          SUCCESS! Check your inbox for your temporary password!
        </div>
        <button
          className="forgotPassword_close"
          type="submit"
          disabled={loading}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
