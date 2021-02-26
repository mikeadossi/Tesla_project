import React, { Component } from 'react';
import './VehicleFinance.css';

const VehicleFinance = ({usStateVehicleOrder, vehicleContent, modelInfo}) => {

    let myModelInfo = { ...modelInfo };
    let myVehicleContent = { ...vehicleContent };
    let usStateVehicleOrderr = { ...usStateVehicleOrder };
    let modelName = [myModelInfo["modelName"]];
    const teslaVC = myVehicleContent["vehicle_render"][modelName]["payment_object"]; 

  return (
    <div className="vehicleFinance_container">
        <div className="vehicleConfig_pricing_subcontainer1 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_lease">
                <div>Order Payment: </div>
                $<input className="vehicleConfig_returnInput2 app_removeBlue" value={teslaVC["orderPymt"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_lease">
                <div>Monthly Pymt: </div>
                $<input className="vehicleConfig_leasing_monthly" value={teslaVC["finance"]["monthlyPymt"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <div>Cash Down: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["cashDownPymt"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_lease">
                <div>Due at Delivery: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["finance"]["dueAtDelivery"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_tradeinPayoff">
                <div>Trade-in Equity: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["tradeInEquity"]} />
            </div>
        </div>

        <div className="vehicleConfig_pricing_subcontainer2 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_tradeinPayoff">
                <div>Non-cash credit: </div>
                $<input className="vehicleConfig_returnInput2 app_removeBlue" value={teslaVC["nonCashCredit"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <div>Adjustments: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["adjustments"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <div>{usStateVehicleOrder[0]} Sales tax: </div>
                <input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["taxRate"]+`%`} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_stateTax">
                <div>{usStateVehicleOrder[0]} Total Fees: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["stateTotalFees"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <div>Cash Down: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["cashDownPymt"]} />
            </div>
        </div>
    </div>
  );
}

export default VehicleFinance;