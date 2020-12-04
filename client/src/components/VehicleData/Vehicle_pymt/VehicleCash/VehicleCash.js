import React, { Component } from 'react';
import './VehicleCash.css';

const VehicleCash = () => {

  return (
    <div className="vehicleCash_container">
        <div className="vehicleConfig_pricing_subcontainer1 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_lease" >
                <div>Order Payment: </div>
                <div>$100</div>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Trade-in Equity </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Non-cash credit </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Order payment </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div> 
        </div>
        <div className="vehicleConfig_pricing_subcontainer2 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>CA Sales Tax </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>CA Total Fees </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Tot. Veh. Price </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" />
            </div> 
        </div>
    </div>
  );
}

export default VehicleCash;