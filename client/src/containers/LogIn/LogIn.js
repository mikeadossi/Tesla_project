import React, { useRef, useState } from 'react';
import './LogIn.css'; 
import { Link, useHistory }  from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";

const LogIn = ({
  errorMessage,
  setErrorMessage,
  loading,
  setLoading,
}) => { 
  const emailLogInRef = useRef();
  const passwordLogInRef = useRef(); 
  const { login, currentUser } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      login(
        emailLogInRef.current.value,
        passwordLogInRef.current.value
      ); 
      history.push("/");

      setErrorMessage("logged in?");
    } catch (e) { 
      setErrorMessage("Failed to log in! ");
    }
    setLoading(false);
  }

  return (
    <div className="logIn_container">
      <div className="app_register_select_container">
        <div className="app_active_register_btn app_register_option_btn"><a>Log In</a></div>
        <div className="app_register_border"></div>
        <Link to="/userSignUp" className="app_inactive_register_btn app_register_option_btn app_noSelect app_textdecorationNone">Create Account</Link>
      </div>
      <div className="app_register_container_div"> 
        <form className="logIn_form_container" onSubmit={handleSubmit}>
          <div>
            <div className="app_register_directive">Sign in with your email address</div>
            <label className="app_register_label">Email Address</label>
            <input className="app_register_input_box logIn_email_address" id="emailLogIn" placeholder="enter email address" type="email" ref={emailLogInRef} required />
            {/* <div className="register_alert login_alert_valid_email">Please enter valid email address</div> */}
          </div>
          <div className="app_register_password_container">
            <label className="app_register_label">Password</label>
            <div className="logIn_password"><input className="app_register_input_box" id="passwordLogIn" placeholder="enter password" type="password" ref={passwordLogInRef} required /></div>
          </div>
          {/* <div className="register_alert login_alert_not_found">Password and/or email not found</div> */}
          {errorMessage ? <div className="register_alert register_alert_password">{errorMessage}</div> : ''}
          <button className="app_register_submit_btn logIn_submit_btn" type="submit" disabled={loading}>SUBMIT</button> 
          <Link to="/forgotPassword" className="logIn_forgot_password app_textdecorationNone">Forgot Password</Link>
        </form>
      </div>
    </div>
  ); 
}

export default LogIn;