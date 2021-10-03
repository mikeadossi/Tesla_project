import React from "react";
import "./VehicleUserEntryCash.css";
import { ACTIVE_FORM } from "../../../../config/actions/types";
import { connect, useDispatch } from "react-redux";

const VehicleUserEntryCash = ({
  activeFormVals,
  handleFormChange,
  usStateVehicleOrder,
  error,
  handleClearField, 
  setActiveFormVals, 
}) => {
  const dispatch = useDispatch();

  return (
    <div className="VehicleUserEntryCash_container">
      {error && <b>FORM ERROR</b>}
      <div className="vehicleConfig_userEntry_container1">
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_loanAmtDue">
          <label>Order Payment: </label>
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
        <div className="vehicleConfig_pricing vehicleConfig_loanAmtDue">
          <label>Trade-in Value: </label>
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
        <div className="vehicleConfig_pricing vehicleConfig_pricing_grey vehicleConfig_customerCashDown">
          <label>Trade-in Payoff: </label>
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

function mapStateToProps(state) {
  return { 
    activeFormVals: state.vehiclesReducer.activeFormVals,
  };
};

export default connect(mapStateToProps)(VehicleUserEntryCash);
