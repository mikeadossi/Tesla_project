import React from 'react';
import './VehicleCash.css';


const VehicleCash = ({usStateVehicleOrder, vehicleContent, modelInfo}) => { 

    let myModelInfo = { ...modelInfo };
    let myVehicleContent = { ...vehicleContent };
    let usStateVehicleOrderr = { ...usStateVehicleOrder };
    let modelName = myModelInfo["modelName"];  
    const teslaVC = myVehicleContent["vehicle_render"][modelName]["payment_object"]; 

  return (
    <div className="vehicleCash_container">
        <div className="vehicleConfig_pricing_subcontainer1 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_lease" >
            <div>Order Payment:</div>
                $<input className="vehicleConfig_returnInput2 app_removeBlue" readOnly value={teslaVC["orderPymt"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Trade-in Equity: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" readOnly value={teslaVC["tradeInEquity"].toLocaleString("en-US")} />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Non-cash credit: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" readOnly value={teslaVC["nonCashCredit"].toLocaleString("en-US")} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Dest./Doc. Fee: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" readOnly value={teslaVC["docFee"].toLocaleString("en-US")} />
            </div>
        </div>
        <div className="vehicleConfig_pricing_subcontainer2 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <div>Adjustments: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" readOnly value={teslaVC["adjustments"].toLocaleString("en-US")} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>{usStateVehicleOrderr[0]} Sales Tax: </div>
                <input className="vehicleConfig_returnInput app_removeBlue" readOnly value={teslaVC["taxRate"]+`%`} />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>{usStateVehicleOrderr[0]} Total Fees: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" readOnly value={teslaVC["stateTotalFees"]} />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Tot. Amt. Due: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" readOnly value={teslaVC["cashDueAtDelivery"].toLocaleString("en-US")} />
            </div> 
        </div>
    </div>
  );
}

export default VehicleCash;