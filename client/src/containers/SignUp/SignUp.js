import React, { Component } from 'react';
import './SignUp.css'; 

class SignUp extends Component {
  render() {
    return (
      <div className="signUp_container">
        <div className="app_register_select_container">
          <div className="app_inactive_register_btn signUp_login_btn app_register_option_btn"><a>Log In</a></div>
          <div className="app_active_register_btn signUp_signup_btn app_register_option_btn">Create Account</div>
        </div>
        <div className="app_register_container_div">
          <form className="signUp_form_container">
            <div>
              <div className="app_register_directive">Sign up with your email address</div>
              <label className="app_register_label">Email Address</label>
              <input className="app_register_input_box signUp_email_address" placeholder="enter email address" />
            </div>
            <div className="app_register_password_container">
              <label className="app_register_label">Password</label>
              <div className="signUp_password"><input className="app_register_input_box " placeholder="enter password" /></div>
              <div className="signUp_password_reentry"><input className="app_register_input_box " placeholder="reenter password" /></div>
            </div>
            <div className="app_register_submit_btn signUp_submit_btn">SIGN UP</div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;