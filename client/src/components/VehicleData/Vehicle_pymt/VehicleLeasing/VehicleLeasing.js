import React, { Component } from 'react';
import './VehicleLeasing.css';

const VehicleLeasing = () => {

  return (
    <div className="vehicleLeasing_container">
        <div className="vehicleConfig_pricing_subcontainer1 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_lease">
                <div>Order Payment: </div>
                $<input className="vehicleConfig_returnInput2 app_removeBlue" />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_lease">
                <div>Monthly Pymt: </div>
                $<input className="vehicleConfig_leasing_monthly" placeholder="100" />/mo.
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <div>Cash Down: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_lease">
                <div>Due at Delivery: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_tradeinPayoff">
                <div>Trade-in Equity: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_tradeinPayoff">
                <div>Non-cash credit: </div>
                $<input className="vehicleConfig_returnInput2 app_removeBlue" />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <div>Upfront Sales tax: </div>
                $<input className="vehicleConfig_returnInput2 app_removeBlue" />
            </div>
        </div>
        <div className="vehicleConfig_pricing_subcontainer2 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <div>CA Sales tax: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_stateTax">
                <div>CA Total Fees: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <div>Cash Down: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <div>Interest rate: </div>
                <input className="vehicleConfig_returnInput2 app_removeBlue" />%
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <div>Money Factor: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <div>Residual Val.: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div>
        </div>
    </div>
  );
}

export default VehicleLeasing;