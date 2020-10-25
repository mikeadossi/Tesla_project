import React, { Component } from 'react';
import './HeaderRight.css';
import { Link }  from 'react-router-dom';

class HeaderRight extends Component {
  render() {
    return (
      <div className="headerRight">
          <Link to="/userSignup" className="headerRight_links">
            <div className="headerRight_sign_up headerRight_login_btn">Sign up</div>
          </Link>
          <Link to="/userLogin" className="headerRight_links">
           <div className="headerRight_log_in headerRight_login_btn">Log in</div>
          </Link> 
      </div>
    );
  }
}

export default HeaderRight;