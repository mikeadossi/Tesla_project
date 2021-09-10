import React, { useRef, useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { connect } from "react-redux";
import {
  insertNewMember,
  isUserRegistered,
} from "../../config/actions/userActions";
import "firebase/firestore";
import app from "../../firebase";
import axios from "axios";

const SignUp = ({
  errorMessage,
  setErrorMessage,
  loading,
  setLoading,
  insertNewMember,
  user_data,
}) => {
  const emailSignupRef = useRef();
  const passwordSignupRef = useRef();
  const passwordConfirmSignupRef = useRef();
  const { signup, currentUser } = useAuth();
  const history = useHistory();
  // const [myCurrentUser, setMyCurrentUser] = useState();

  // useEffect(() => {
  //   // after successful firebase signup, push user to db
  //   // TODO: update insertNewMember to check if user is already there
  //   insertNewMember({
  //   email : user["user"]["email"],
  //   password: user["user"]["password"],
  //   id : user["_tokenResponse"]["localId"],
  //   date_joined : user["user"]["metadata"]["creationTime"],
  //   gave_cookie_permission : "",
  //   notifications_on : "",
  //   apply_all_warning_on : "",
  //   reset_warning_on : "",
  // });
  // }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      passwordSignupRef.current.value !== passwordConfirmSignupRef.current.value
    ) {
      return setErrorMessage("Passwords do not match!");
    } else {
      console.log(
        "emailSignupRef.current.value - ",
        emailSignupRef.current.value
      );
      console.log(
        "passwordConfirmSignupRef.current.value - ",
        passwordConfirmSignupRef.current.value
      );
    }
    const email = emailSignupRef.current.value;
    const password = passwordConfirmSignupRef.current.value;
    try {
      setLoading(true);
      // write function - is username already registered?
      // const userIsRegistered = await isUserRegistered(emailSignupRef.current.value); 
      const checkEmail = await axios.get(`http://localhost:3002/isUserRegistered?email=${email}`);

      console.log('checkEmail: ',checkEmail);

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
          gave_cookie_permission : "",
          notifications_on : "",
          apply_all_warning_on : "",
          reset_warning_on : "",
        } 
        
        const newUser = await axios.post(`http://localhost:3002/insertNewUser`, body, axiosConfig);
        console.log({newUser})
        // create hash password
        // save it to db
        // /insertNewUser
      }

      // if(!userIsRegistered){
      //   // convert password using jwt

      //   // insertNewMember(
      //   //   emailSignupRef.current.value,
      //   //   jwt_password
      //   // );
      //   // console.log("user ",emailSignupRef.current.value," was added!")
      // } else {
      //   // throw appropriate error
      //   console.log("email is already taken");
      // }

      // await signup(
      //   emailSignupRef.current.value,
      //   passwordSignupRef.current.value
      // );
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

// export default SignUp;

function mapStateToProps(state) {
  return {
    user_data: state.userReducer.user_data,
  };
}

export default connect(mapStateToProps, { insertNewMember })(SignUp);
