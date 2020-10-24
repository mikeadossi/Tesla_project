import React, { Component } from 'react';
import './HeaderRight.css';

class HeaderRight extends Component {
  render() {
    return (
      <div className="headerRight">
          <div className="sign_up">Sign up</div>
          <div className="log_in">Log in</div>
      </div>
    );
  }
}

export default HeaderRight;