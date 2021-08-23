import React from "react";
import "./Vehicle_userEntry_financing.css";

const Vehicle_userEntry_financing = ({
  activeFormVals,
  handleFormChange,
  usStateVehicleOrder,
  error,
  handleClearField,
}) => {
  return (
    <div className="vehicle_userEntry_financing_container">
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
        <div className="vehicleConfig_pricing vehicleConfig_cashAmtDue">
          <label>Finance Term: </label>
          <select
            className="vehicleConfig_userSelect vehicleConfig_userSelect_miles"
            onChange={(e) => handleFormChange("loanTerm", e.target.value)}
            value={activeFormVals["loanTerm"]}
          >
            <option value="72">72 months</option>
            <option value="60">60 months</option>
            <option value="48">48 months</option>
            <option value="36">36 months</option>
          </select>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateTax">
          <label>FIN. APR: </label>
          <span className="vehicleConfig_userInput_container">
            <div className="vehicleConfig_userInput_subcontainer">
              %
              <input
                className="vehicleConfig_userInput app_noClicking app_removeBlue"
                value={activeFormVals["loanApr"]} 
                disabled
              />
            </div>
          </span>
        </div>
        <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
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
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateFees">
          <label>Enter Trade-in value: </label>
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
        <div className="vehicleConfig_pricing vehicleConfig_cashAmtDue">
          <label>Enter Trade-in payoff: </label>
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
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_stateTax">
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

export default Vehicle_userEntry_financing;
