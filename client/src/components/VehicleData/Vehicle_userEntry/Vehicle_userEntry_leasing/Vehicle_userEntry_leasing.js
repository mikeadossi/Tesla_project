import React from "react";
import "./Vehicle_userEntry_leasing.css";

const Vehicle_userEntry_leasing = ({
  activeFormVals,
  handleFormChange,
  usStateVehicleOrder,
  error,
  handleClearField
}) => {
  return (
    <div className="vehicle_userEntry_leasing_container">
      {error && <b>FORM ERROR</b>}
      <div className="vehicleConfig_userEntry_container1">
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_loanAmtDue">
          <label>Order Payment </label>
          <span className="vehicleConfig_userInput_container">
            <div className="vehicleConfig_userInput_subcontainer">
              $
              <input
                className="vehicleConfig_userInput app_noClicking app_removeBlue"
                value={usStateVehicleOrder[2].order_pymt}
                disabled
              />
            </div>
          </span>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_stateFees">
          <label>Term: </label>
          <select
            className="vehicleConfig_userSelect vehicleConfig_userSelect_lease"
            onChange={(e) =>
              handleFormChange("leaseTerm", e.target.value)
            }
            value={activeFormVals["leaseTerm"]}
          >
            <option value="36">36 months</option>
            <option value="24">24 months</option> 
          </select>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateFees">
          <label>Yearly Miles: </label>
          <select
            className="vehicleConfig_userSelect vehicleConfig_userSelect_miles"
            onChange={(e) => handleFormChange("annualMiles", e.target.value)}
            value={activeFormVals["annualMiles"]}
          >
            <option value="10000">10,000 miles</option>
            <option value="12000">12,000 miles</option>
            <option value="15000">15,000 miles</option>
          </select>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_stateTax">
          <label>LEASE APR: </label>
          <span className="vehicleConfig_userInput_container">
            <div className="vehicleConfig_userInput_subcontainer">
              %
              <input
                className="vehicleConfig_userInput app_noClicking app_removeBlue"
                value={activeFormVals["leaseInterestRate"]} 
                disabled
              />
            </div> 
          </span>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_customerCashDown">
          <label>Cash Down pymt: </label>
          <span className="vehicleConfig_userInput_container">
            <div className="vehicleConfig_userInput_subcontainer">
              $
              <input
                className="vehicleConfig_userInput app_removeBlue"
                value={activeFormVals["cashDownPayment"]}
                onChange={(e) =>
                  handleFormChange("cashDownPayment", e.target.value)
                }
              />
            </div>
            <button 
              className="vehicleConfig_clearBtn" 
              onClick={() => handleClearField("cashDownPayment")}
            >
                Clear
            </button> 
          </span>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_stateFees">
          <label>Enter trade-in value: </label>
          <span className="vehicleConfig_userInput_container">
            <div className="vehicleConfig_userInput_subcontainer">
              $
              <input
                className="vehicleConfig_userInput app_removeBlue"
                value={activeFormVals["tradeInValue"]}
                onChange={(e) =>
                  handleFormChange("tradeInValue", e.target.value)
                }
              />
            </div>
            <button 
              className="vehicleConfig_clearBtn" 
              onClick={() => handleClearField("tradeInValue")}
            >
                Clear
            </button> 
          </span>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_cashAmtDue">
          <label>Enter trade-in payoff: </label>
          <span className="vehicleConfig_userInput_container">
            <div className="vehicleConfig_userInput_subcontainer">
              $
              <input 
                className="vehicleConfig_userInput app_removeBlue"
                value={activeFormVals["tradeInPayoff"]}
                onChange={(e) =>
                  handleFormChange("tradeInPayoff", e.target.value)
                }
              />
            </div>
            <button 
              className="vehicleConfig_clearBtn" 
              onClick={() => handleClearField("tradeInPayoff")}
            >
                Clear
            </button> 
          </span>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_stateTax">
          <label>Enter Adjustments: </label>
          <span className="vehicleConfig_userInput_container">
            <div className="vehicleConfig_userInput_subcontainer">
              $
              <input 
                className="vehicleConfig_userInput app_removeBlue"
                value={activeFormVals["adjustments"]}
                onChange={(e) =>
                  handleFormChange("adjustments", e.target.value)
                }
              />
            </div>
            <button 
              className="vehicleConfig_clearBtn" 
              onClick={() => handleClearField("adjustments")}
            >
                Clear
            </button> 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Vehicle_userEntry_leasing;
