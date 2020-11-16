import React, { Component } from 'react';
import './SignUp.css'; 
import { Link }  from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <div className="signUp_container">
        <div className="app_register_select_container">
          <Link to="/userLogin" className="app_inactive_register_btn signUp_login_btn app_register_option_btn app_textdecorationNone">Log In</Link>
          <div className="app_register_border"> </div>
          <div className="app_active_register_btn signUp_signup_btn app_register_option_btn">Create Account</div>
        </div>
        <div className="app_register_container_div">
          <form className="signUp_form_container">
            <div>
              <div className="app_register_directive">Sign up with your email address</div>
              <label className="app_register_label">Email Address</label>
              <input className="app_register_input_box signUp_email_address" placeholder="enter email address" />
              <div className="register_alert register_alert_1">Please enter company email address</div>
            </div>
            <div className="app_register_password_container">
              <label className="app_register_label">Password</label>
              <div className="signUp_password"><input className="app_register_input_box " placeholder="enter password" /></div>
              <div className="signUp_password_reentry"><input className="app_register_input_box " placeholder="reenter password" /></div>
            </div>
            <div className="register_alert register_alert_2">Please ensure both passwords match</div>
            <div className="app_register_submit_btn signUp_submit_btn">SIGN UP</div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;