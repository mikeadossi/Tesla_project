import React, { useState, useEffect } from "react";
import "./VehicleConfigUserEntry.css";
import VehicleUserEntryFinancing from "../VehicleUserEntry/VehicleUserEntryFinancing/VehicleUserEntryFinancing";
import VehicleUserEntryLeasing from "../VehicleUserEntry/VehicleUserEntryLeasing/VehicleUserEntryLeasing";
import VehicleUserEntryCash from "../VehicleUserEntry/VehicleUserEntryCash/VehicleUserEntryCash";
import GrayBackground from "../../GrayBackground/GrayBackground";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserPymtEntry } from "../../../containers/VehiclePanel//VehiclePanelMethods/moduleExports";
import {
  showApplyAllWarning,
  showResetWarning, 
} from "../../../config/actions/navActions";
import {
  setActiveFormVals,
} from "../../../config/actions/vehicleActions";
import { 
  ACTIVE_FORM,
  TOGGLE_RESET_WARNING,
  TOGGLE_APPLY_ALL_WARNING,
} from "../../../config/actions/types";


const VehicleConfigUserEntry = ({
  showComponent,
  visibility,
  setActivePayment,
  activePayment, 
  name,
  vehicleContent,
  usStateVehicleOrder,
  populatePaymentObject, 
  modelInfo,
  teslaModels,
  setTeslaModels,
  showApplyAllWarning,
  showResetWarning,
  runReset,
  runApplyAll,
  currentUser,
  handleWarning,
  activeFSDSetting,
  setActiveFSDSetting,
  setActiveOffMenuAutopilot,
  alertUser,
  setAlertUser,
  setActiveFormVals,
  activeFormVals,
}) => {
  const dispatch = useDispatch();
  const vehicleName = name; //ex: model3
  const spacedVehicleName =
    vehicleContent["vehicle_details"][vehicleName]["default_optioned_vehicle"][
      "model"
    ]; //ex: Model 3


  useEffect(() => {
    if (activeFormVals[vehicleName] !== "" || null) {
      dispatch({
        type: ACTIVE_FORM,
        payload: activeFormVals,
      });
    }
  }, [activeFormVals]);

  const vehiclesRendered = useSelector(
    (state) => state.vehiclesReducer.vehiclesRendered
  );

  const handleClearField = (field) => {
    setActiveFormVals({
      ...activeFormVals,
      [field]: "",
    });
  };

  const handleFormChange = (field, value) => {
    setActiveFormVals({
      ...activeFormVals,
      [field]: value,
    });
  };

  const validateInputs = (vehiclePrice) => {
    const formArr = Object.keys(activeFormVals);
    let bool = true;
    let msg = "";
    let downPymtLimit = Number(vehiclePrice)/3;
    downPymtLimit = Math.floor(downPymtLimit);
    let downPymtLimitString = downPymtLimit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    formArr.map((v) => { 
      if(activeFormVals[v] !== "" && activeFormVals[v] !== null && activeFormVals[v] !== undefined){ 
        if(isNaN(activeFormVals[v])){
          bool = false; 
          msg = "Values must be numbers";
        };
        if(Number(activeFormVals["adjustments"]) > 1000){ 
          bool = false; 
          msg = "Adjustments must be under $1,000.";
        };
        if(Number(activeFormVals["cashDownPayment"]) > downPymtLimit){ 
          bool = false; 
          msg = `Down payment can't exceed $${downPymtLimitString}`;
        };
      }
    });
    console.log(activeFormVals)

    return [bool, msg];
  }

  const handlePaymentFormSubmit = async () => {
    // function below updates state with user entries
    setAlertUser([]);

    const configuredPrice =
      teslaModels.vehicle_render[vehicleName].cash_price;

    const validated = validateInputs(configuredPrice);

    if(validated[0] === false){ 
      console.log('validated[1] msg- ',validated[1])
      setAlertUser([{}, validated[1], "user_entry"]);

    } else {
      teslaModels = setUserPymtEntry(
        activeFormVals,
        vehicleName,
        teslaModels,
        setTeslaModels
      );
  
      let vehicleContent = {
        ...teslaModels,
        vehicle_render: {
          ...teslaModels["vehicle_render"],
  
          [vehicleName]: {
            ...teslaModels.vehicle_render[vehicleName],
            ["payment_object"]: {
              ...teslaModels.vehicle_render[vehicleName]["payment_object"],
            },
          },
        },
      };
  
      const configuredPrice =
        vehicleContent.vehicle_render[vehicleName].cash_price;
      const paymentObj =
        vehicleContent.vehicle_render[vehicleName].payment_object;
      const submittedCashDown = activeFormVals["cashDownPayment"];
  
      // function below runs all necessary lease, finance calculations
      vehicleContent.vehicle_render[
        vehicleName
      ].payment_object = populatePaymentObject(
        configuredPrice,
        paymentObj,
        submittedCashDown, 
      );
  
      // setActiveFormVals({
      //   ...activeFormVals,
      //   adjustments: "",
      //   cashDownPayment: "",
      //   tradeInPayoff: "",
      //   tradeInValue: ""
      // });
  
      setTeslaModels(vehicleContent);
    };
  };

  return (
    <div className="veicleConfig_userEntry_container">
      <GrayBackground
        runReset={runReset}
        runApplyAll={runApplyAll}
        setTeslaModels={setTeslaModels}
        activeFormVals={activeFormVals}
        setActiveFormVals={setActiveFormVals}
        handleWarning={handleWarning}
        setActiveFSDSetting={setActiveFSDSetting}
        setActiveOffMenuAutopilot={setActiveOffMenuAutopilot}
      />
      <div className="veicleConfig_userEntry_subcontainer">
        <div className="app_displayFlex app_Solar_selectPymt_div">
          <div
            onClick={() => {
              showComponent("Cash");
              setActivePayment("Cash");
            }}
            className={`app_Solar_selectPymt_btn ${
              activePayment === "Cash" && "selected_payment"
            }`}
          >
            Cash
          </div>
          <div
            onClick={() => {
              showComponent("Loan");
              setActivePayment("Loan");
            }}
            className={`app_Solar_selectPymt_btn ${
              activePayment === "Loan" && "selected_payment"
            }`}
          >
            Loan
          </div>
          <div
            onClick={() => {
              showComponent("Lease");
              setActivePayment("Lease");
            }}
            className={`app_Solar_selectPymt_btn ${
              activePayment === "Lease" && "selected_payment"
            }`}
          >
            Lease
          </div>
        </div>

        <div className="vehicleConfig_userEntry_containers">
          {visibility.Cash ? (
            <VehicleUserEntryCash
              usStateVehicleOrder={usStateVehicleOrder}
              modelInfo={modelInfo}
              activeFormVals={activeFormVals}
              handleFormChange={handleFormChange} 
              handleClearField={handleClearField} 
            />
          ) : (
            ""
          )}
          {visibility.Loan ? (
            <VehicleUserEntryFinancing
              usStateVehicleOrder={usStateVehicleOrder}
              modelInfo={modelInfo}
              activeFormVals={activeFormVals}
              handleFormChange={handleFormChange} 
              handleClearField={handleClearField}
            />
          ) : (
            ""
          )}
          {visibility.Lease ? (
            <VehicleUserEntryLeasing
              usStateVehicleOrder={usStateVehicleOrder}
              modelInfo={modelInfo}
              activeFormVals={activeFormVals}
              handleFormChange={handleFormChange} 
              handleClearField={handleClearField}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="vehicleConfig_submit_btn_container">
        <button
          onClick={() => {
            if (
              currentUser &&
              currentUser["apply_all_warning_on"] === "false"
            ) {
              handlePaymentFormSubmit();
              runApplyAll(
                spacedVehicleName,
                teslaModels,
                vehiclesRendered,
                vehicleName,
                setTeslaModels,
                activeFormVals,
                activeFSDSetting,
                setActiveFormVals,
                setActiveFSDSetting,
                setActiveOffMenuAutopilot
              );
            } else {
              handlePaymentFormSubmit();
              showApplyAllWarning(vehicleName, dispatch);
            }
          }}
          className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_setAll_btn app_cursorPointer"
        >
          APPLY ALL
        </button>
        <button
          onClick={() => {
            if (currentUser && currentUser["reset_warning_on"] === "false") {
              runReset(vehicleName, vehicleContent.vehicle_render);
            } else {
              showResetWarning(vehicleName, dispatch);
            }
          }}
          className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_reset_btn app_cursorPointer"
        >
          RESET
        </button>
        <button
          className="app_removeBlue app_submit_btn app_noSelect vehicleConfig_control_btn vehicleConfig_submit_btn app_cursorPointer"
          onClick={handlePaymentFormSubmit}
        >
          SUBMIT
        </button>
        {alertUser[2] === "user_entry" ? (
          <div className="vehicleConfig_error">{alertUser[1]}</div>
        ) : ""}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeFSDSetting: state.vehiclesReducer.activeFSDSetting,
    activeFormVals: state.vehiclesReducer.activeFormVals,
  };
}

export default connect(
  mapStateToProps, {
    showApplyAllWarning: (modelName) => (dispatch) =>
      dispatch({ 
        type: TOGGLE_APPLY_ALL_WARNING,
        payload: modelName,
      }),
    showResetWarning: (modelName) => (dispatch) =>
      dispatch({
        type: TOGGLE_RESET_WARNING,
        payload: modelName,
      }),
    setActiveFormVals: (field) => (dispatch) =>
    dispatch({
      type: ACTIVE_FORM,
      payload: field,
    }),
})(VehicleConfigUserEntry);
