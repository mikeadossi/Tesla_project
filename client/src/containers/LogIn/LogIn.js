import React, { Component } from 'react';
import './LogIn.css'; 
import { Link }  from 'react-router-dom';

class LogIn extends Component {
  render() {
    return (
      <div className="logIn_container">
        <div className="app_register_select_container">
          <div className="app_active_register_btn app_register_option_btn"><a>Log In</a></div>
          <div className="app_register_border"></div>
          <Link to="/userSignUp" className="app_inactive_register_btn app_register_option_btn app_noSelect app_textdecorationNone">Create Account</Link>
        </div>
        <div className="app_register_container_div">
          <form className="logIn_form_container">
            <div>
              <div className="app_register_directive">Sign in with your email address</div>
              <label className="app_register_label">Email Address</label>
              <input className="app_register_input_box logIn_email_address" placeholder="enter email address" />
            </div>
            <div className="app_register_password_container">
              <label className="app_register_label">Password</label>
              <div className="logIn_password"><input className="app_register_input_box" placeholder="enter password" /></div>
            </div>
            <div className="register_alert register_alert_3">Password and/or email not found</div>
            <div className="app_register_submit_btn logIn_submit_btn">SIGN UP</div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;