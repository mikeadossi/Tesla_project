import React, { Component } from 'react';
import './Vehicle_userEntry_leasing.css';

const VehicleUserEntry_leasing = () => {

  return (
    <div className="vehicleUserEntry_leasing_container">
        <div className="vehicleConfig_userEntry_container1">
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_loanAmtDue">
                <label>Order Payment </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue" /></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <label>Term: </label> 
                <select className="vehicleConfig_userSelect vehicleConfig_userSelect_lease">
                    <option value="24 months">24 months</option>
                    <option value="36 months">36 months</option>
                </select>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateFees">
                <label>Yearly Miles: </label>
                <select className="vehicleConfig_userSelect vehicleConfig_userSelect_miles">
                    <option value="10000 miles">10,000 miles</option>
                    <option value="15000 miles">12,000 miles</option>
                    <option value="20000 miles">15,000 miles</option> 
                </select>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_stateTax">
                <label>LEASE APR: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_customerCashDown">
                <label>Cash Down pymt: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <label>Enter trade-in value: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_cashAmtDue">
                <label>Enter trade-in payoff: </label>
                <span className="vehicleConfig_userInput_container">
                <div className="vehicleConfig_userInput_subcontainer">$<input className="vehicleConfig_userInput app_removeBlue"></input></div>
                <img className="vehicleConfig_edit_btn app_cursorPointer vehicleConfig_userEntry_1" src="../../../../images/edit_icon.png" />
                </span>
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_stateTax">
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

export default VehicleUserEntry_leasing;