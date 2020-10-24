import React, { Component } from 'react';
import './HeaderCenter.css';

class HeaderCenter extends Component {
  render() {
    return (
      <div className="headerCenter">
          <input className="headerCenter_input"></input>
          <button className="headerCenter_input_btn">submit</button>
      </div> 
    );
  }
}

export default HeaderCenter;