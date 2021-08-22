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
                $<input className="vehicleConfig_returnInput2 app_removeBlue" value={teslaVC["orderPymt"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Trade-in Equity: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["tradeInEquity"]} />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Non-cash credit: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["nonCashCredit"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Dest./Doc. Fee: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["docFee"]} />
            </div>
        </div>
        <div className="vehicleConfig_pricing_subcontainer2 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <div>Adjustments: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["adjustments"]} />
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>{usStateVehicleOrderr[0]} Sales Tax: </div>
                <input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["taxRate"]+`%`} />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>{usStateVehicleOrderr[0]} Total Fees: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["stateTotalFees"]} />
            </div> 
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Tot. Amt. Due: </div>
                $<input className="vehicleConfig_returnInput app_removeBlue" value={teslaVC["cashDueAtDelivery"]} />
            </div> 
        </div>
    </div>
  );
}

export default VehicleCash;