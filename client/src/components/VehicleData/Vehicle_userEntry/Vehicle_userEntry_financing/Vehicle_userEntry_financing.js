import React, { Component } from 'react';
import './Vehicle_userEntry_financing.css';

const VehicleUserEntry_financing = () => {

  return (
    <div className="vehicleUserEntry_financing_container">
        <div className="vehicleConfig_userEntry_container1">
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_loanAmtDue">
                <label>Order Payment </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue" /></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_cashAmtDue"> 
                <label>Finance Term: </label>
                <select className="vehicleConfig_userSelect vehicleConfig_userSelect_miles">
                <option value="36 months">36 months</option>
                <option value="48 months">48 months</option>
                <option value="60 months">60 months</option>
                <option value="72 months">72 months</option>
                </select>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateTax">
                <label>FIN. APR: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <label>Cash Down pymt: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateFees">
                <label>Enter Trade-in value: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_cashAmtDue">
                <label>Enter Trade-in payoff: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateTax">
                <label>Enter Adjustments: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
        </div>
    </div>
  );
}

export default VehicleUserEntry_financing;