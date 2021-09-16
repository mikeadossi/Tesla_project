import React, { useState, useRef } from "react";
import "./ForgotPassword.css";
import axios from "axios";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [theResult, setTheResult] = useState("");
  const emailRef = useRef();

  async function getTempPassword(e) {
    e.preventDefault();
    const email = emailRef.current.value;

    const checkEmail = await axios.get(`http://localhost:3002/isUserRegistered?email=${email}`); 

    if(checkEmail.data.success){ 
      const body = { email };
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
      };
      await axios.post(`http://localhost:3002/sendTempPassword`, body, axiosConfig);
      setTheResult("SUCCESS! Your temporary password will be sent in 5-15 minutes!"); 
    } else {
      setTheResult("Email not found") 
    }

  }

  console.log({theResult})

  return (
    <div className="forgotPassword_container app_pageHeight">
      <form onSubmit={getTempPassword}>
        <h1 className="forgotPassword_title">FORGOT PASSWORD</h1>
        <div className="forgotPassword_text">
          Submit the form below to receive a temporary password.
        </div>
        <div className="forgotPassword_email_container settings_subsection app_displayFlex">
          <div className="settings_text">Enter user email</div>
          <input className="fogotPassword_email" type="email" ref={emailRef} required />
        </div>
        {theResult && theResult === "Email not found" ?(
            <div className="forgotPassword_not_found">
              {theResult}
            </div>
          ) : ""
        }
        {theResult && theResult === "SUCCESS! Your temporary password will be sent in 5-15 minutes!" ? (
            <div className="forgotPassword_success">
              {theResult}
            </div>
          ) : ""
        }
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
