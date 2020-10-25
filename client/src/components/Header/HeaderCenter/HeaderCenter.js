import React, { Component } from 'react';
import './HeaderCenter.css';

class HeaderCenter extends Component {
  render() {
    return (
      <div className="headerCenter">
          <input className="headerCenter_input" placeholder="enter zipcode or area code"></input>
          <button className="headerCenter_input_btn">Submit</button>
      </div> 
    );
  }
}

export default HeaderCenter;