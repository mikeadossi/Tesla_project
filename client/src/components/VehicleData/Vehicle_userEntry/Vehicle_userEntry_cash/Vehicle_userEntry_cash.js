import React, { Component } from 'react';
import './Vehicle_userEntry_cash.css';

const VehicleUserEntry_cash = () => {

  return (
    <div className="vehicleUserEntry_cash_container">
        <div className="vehicleConfig_userEntry_container1"> 
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_loanAmtDue">
                <label>Order Payment </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue" /></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loanAmtDue">
                <label>Trade-in Value: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_customerCashDown">
                <label>Trade-in Payoff: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
        </div>
    </div>
  );
}

export default VehicleUserEntry_cash;