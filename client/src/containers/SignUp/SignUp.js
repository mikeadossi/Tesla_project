import React, { useRef } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"; 

const SignUp = ({ 
  loading,
  setLoading, 
  alertUser, 
  setAlertUser,
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
      setAlertUser([{"color": "red"},"Passwords do not match! Please try again.", "register_signup"])
      setTimeout(function(){
        setAlertUser([]);
      }, 7000);
      setLoading(false);
      return;
    } 
    const email = emailSignupRef.current.value;
    const password = passwordConfirmSignupRef.current.value;
    try {
      setLoading(true); 
      const checkEmail = await axios.get(`http://localhost:3002/isUserRegistered?email=${email}`);

      if (checkEmail.data.success) { 
        setAlertUser([{"color": "red"},`${email} is already in use. Try again.`, "register_signup"])
        setTimeout(function(){
          setAlertUser([]);
        }, 5000);
        setLoading(false);
        return;
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
          notifications_last_viewed_on: null,
          gave_cookie_permission : 'false',
          notifications_on : 'true',
          apply_all_warning_on : 'true',
          reset_warning_on : 'true',
          viewed_welcome_notification : 'false',
        } 
        
        await axios.post(`http://localhost:3002/insertNewUser`, body, axiosConfig); 
        setAlertUser([{"color": "green"}, "Your Account has been created!", "register_signup"])
        setTimeout(function(){
          setAlertUser([]);
          history.push("/userLogIn");
        }, 3000);
        setLoading(false);
      }

    } catch (e) { 
      setAlertUser([{"color": "red"},"ERROR signing up!", "register_signup"])
      setTimeout(function(){
        setAlertUser([]);
      }, 4000); 
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
                placeholder="enter 6+ digit password"
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
          {alertUser[2] === "register_signup" ? (
            <div style={alertUser[0]}>
              {alertUser[1]}
            </div>
          ) : ""}
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
