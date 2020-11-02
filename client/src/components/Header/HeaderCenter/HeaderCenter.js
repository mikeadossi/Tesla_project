import React, { Component } from 'react';
import './HeaderCenter.css';

class HeaderCenter extends Component {
  render() {
    return (
      <div className="headerCenter app_removeBlue">
          <input className="headerCenter_input app_main_submit_input" placeholder="enter zipcode or area code"></input>
          <button className="headerCenter_input_btn app_submit_btn app_noSelect app_removeBlue">Submit</button>
      </div> 
    );
  }
}

export default HeaderCenter;