import React, { useRef } from "react";
import "./ForgotPassword.css";
import axios from "axios";

const ForgotPassword = ({
  alertUser,
  setAlertUser,
  loading,
  setLoading,
}) => { 
  const emailRef = useRef();

  const generatePassword = async () => {
    var length = 10,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  };

  async function getTempPassword(e) {
    e.preventDefault();
    setLoading(true);
    const email = emailRef.current.value;

    const checkEmail = await axios.get(
      `http://localhost:3002/isUserRegistered?email=${email}`
    ); 

    if (checkEmail.data.success) {
      const passw = await generatePassword();
      const body = { email, passw };
      const id = checkEmail.data.data[0].id;

      let axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `http://localhost:3002/sendNewPassword`,
        body,
        axiosConfig
      );

      const parcel = {
        id,
        ourKey: "user_password",
        ourValue: passw,
      };
      await axios.post(
        `http://localhost:3002/updateUserData`,
        parcel,
        axiosConfig
      );
      setAlertUser([{"color": "green"},"SUCCESS! Your new password will arrive in 5 minutes!", "forgot_password"])
    } else {

      setAlertUser([{"color": "red"},`${email} not found, please try again.`, "forgot_password"])
    }
    setLoading(false);
  }

  return (
    <div className="forgotPassword_container app_pageHeight">
      <form onSubmit={getTempPassword}>
        <h1 className="forgotPassword_title">FORGOT PASSWORD</h1>
        <div className="forgotPassword_text">
          Submit the form below to receive a new password.
        </div>
        <div className="forgotPassword_email_container settings_subsection app_displayFlex">
          <div className="settings_text">Enter user email</div>
          <input
            className="fogotPassword_email"
            type="email"
            ref={emailRef}
            required
          />
        </div>
        {alertUser[2] === "forgot_password" ? (
          <div style={alertUser[0]}>{alertUser[1]}</div>
        ) : (
          ""
        )}
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
