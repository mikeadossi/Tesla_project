import React, { useRef } from "react";
import "./LogIn.css";
import { Link, useHistory } from "react-router-dom";  
import axios from "axios";

const LogIn = ({ 
  loading,
  setLoading, 
  setCurrentUser,
  alertUser, 
  setAlertUser,
}) => {
  const emailLogInRef = useRef();
  const passwordLogInRef = useRef(); 
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailLogInRef.current.value;
    const password = passwordLogInRef.current.value;

    try {
      setLoading(true); 

      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const body = {
        email,
        password
      } 
      
      const loggedInUser = await axios.post(`http://localhost:3002/logUserIntoApp`, body, axiosConfig); 
      const id = loggedInUser.data.data[0].id;

      const userObj = { 
        id,
        user_email: loggedInUser.data.data[0].user_email, 
        apply_all_warning_on: loggedInUser.data.data[0].apply_all_warning_on,
        dark_theme_off: loggedInUser.data.data[0].dark_theme_off,
        date_joined: loggedInUser.data.data[0].date_joined,
        notifications_last_viewed_on: loggedInUser.data.data[0].notifications_last_viewed_on,
        gave_cookie_permission: loggedInUser.data.data[0].gave_cookie_permission,
        notifications_on: loggedInUser.data.data[0].notifications_on,
        reset_warning_on: loggedInUser.data.data[0].reset_warning_on,
      }

      if(loggedInUser.data.success){
        setCurrentUser(userObj);
        setAlertUser([{"background-color": "darkseagreen"},loggedInUser.data.msg, "loggedIn_container"])
        setTimeout(function(){
          setAlertUser([]);
        }, 3000); 
        history.push("/");
      }

    } catch (e) { 
      setAlertUser([{"color": "red"},"Email / password is incorrect. Please try again.", "register_login"])
      setTimeout(function(){
        setAlertUser([]);
      }, 7000); 
    }
    setLoading(false);
  }



  return (
    <div className="logIn_container">
      <div className="app_register_select_container">
        <div className="app_active_register_btn app_register_option_btn">
          <a>Log In</a>
        </div>
        <div className="app_register_border"></div>
        <Link
          to="/userSignUp"
          className="app_inactive_register_btn app_register_option_btn app_noSelect app_textdecorationNone"
        >
          Create Account
        </Link>
      </div>
      <div className="app_register_container_div">
        <form className="logIn_form_container" onSubmit={handleSubmit}>
          <div>
            <div className="app_register_directive">
              Sign in with your email address
            </div>
            <label className="app_register_label">Email Address</label>
            <input
              className="app_register_input_box logIn_email_address"
              id="emailLogIn"
              placeholder="enter email address"
              type="email"
              ref={emailLogInRef}
              required
            />
          </div>
          <div className="app_register_password_container">
            <label className="app_register_label">Password</label>
            <div className="logIn_password">
              <input
                className="app_register_input_box"
                id="passwordLogIn"
                placeholder="enter password"
                type="password"
                ref={passwordLogInRef}
                required
              />
            </div>
          </div>
          {alertUser[2] === "register_login" ? (
            <div style={alertUser[0]} className="register_alert register_alert_password">
              {alertUser[1]}
            </div>
          ) : ""}
          <button
            className="app_register_submit_btn logIn_submit_btn"
            type="submit"
            disabled={loading}
          >
            SUBMIT
          </button>
          <Link
            to="/forgotPassword"
            className="logIn_forgot_password app_textdecorationNone"
          >
            Forgot Password
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
