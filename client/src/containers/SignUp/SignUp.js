import React, { useRef } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"; 

const SignUp = ({
  errorMessage,
  setErrorMessage,
  loading,
  setLoading, 
}) => {
  const emailSignupRef = useRef();
  const passwordSignupRef = useRef();
  const passwordConfirmSignupRef = useRef(); 
  const history = useHistory(); 

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      passwordSignupRef.current.value !== passwordConfirmSignupRef.current.value
    ) {
      return setErrorMessage("Passwords do not match!");
    } 
    const email = emailSignupRef.current.value;
    const password = passwordConfirmSignupRef.current.value;
    try {
      setLoading(true); 
      const checkEmail = await axios.get(`http://localhost:3002/isUserRegistered?email=${email}`);

      if (checkEmail.success) {
        setErrorMessage(`${email} is already used`);
      } else {
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json'
          }
        };
        const body = {
          email,
          password, 
          date_joined : new Date(),
          gave_cookie_permission : 'false',
          notifications_on : 'true',
          apply_all_warning_on : 'true',
          reset_warning_on : 'true',
        } 
        
        await axios.post(`http://localhost:3002/insertNewUser`, body, axiosConfig); 
        history.push("/userLogIn");
      }

    } catch (e) {
      setErrorMessage(`${email} is already used`); 
    }
    setLoading(false);
  }

  return (
    <div className="signUp_container">
      <div className="app_register_select_container">
        <Link
          to="/userLogin"
          className="app_inactive_register_btn signUp_login_btn app_register_option_btn app_textdecorationNone"
        >
          Log In
        </Link>
        <div className="app_register_border"> </div>
        <div className="app_active_register_btn signUp_signup_btn app_register_option_btn">
          Create Account
        </div>
      </div>
      <div className="app_register_container_div">
        <form className="signUp_form_container" onSubmit={handleSubmit}>
          <div>
            <div className="app_register_directive">
              Sign up with your email address
            </div>
            <label className="app_register_label">Email Address</label>
            <input
              className="app_register_input_box signUp_email_address"
              placeholder="enter email address"
              type="email"
              ref={emailSignupRef}
              required
            />
          </div>
          <div className="app_register_password_container">
            <label className="app_register_label">Password</label>
            <div className="signUp_password">
              <input
                className="app_register_input_box "
                placeholder="enter password"
                type="password"
                ref={passwordSignupRef}
                required
              />
            </div>
            <div className="signUp_password_reentry">
              <input
                className="app_register_input_box "
                placeholder="reenter password"
                type="password"
                ref={passwordConfirmSignupRef}
                required
              />
            </div>
          </div>
          {errorMessage ? (
            <div className="register_alert register_alert_password">
              {errorMessage}
            </div>
          ) : (
            ""
          )}
          <button
            className="app_register_submit_btn signUp_submit_btn"
            type="submit"
            disabled={loading}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp; 
