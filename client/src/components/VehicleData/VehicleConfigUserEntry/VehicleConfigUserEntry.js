import React, { useState, useEffect } from "react";
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
import { ACTIVE_FORM } from "../../../config/actions/types";

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
}) => {
  const dispatch = useDispatch();
  const vehicleName = name; //ex: model3
  const spacedVehicleName =
    vehicleContent["vehicle_details"][vehicleName]["default_optioned_vehicle"][
      "model"
    ]; //ex: Model 3

  const [activeFormVals, setActiveFormVals] = useState({
    leaseInterestRate: 4.85,
    loanApr: 2.49,
  });

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

  const handlePaymentFormSubmit = async () => {
    // function below updates state with user entries
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
    const submittedLeaseTerm = activeFormVals["leaseTerm"];
    const submittedLoanTerm = activeFormVals["loanTerm"];
    const submittedAnnualMiles = activeFormVals["annualMiles"];

    // function below runs all necessary lease, finance calculations
    vehicleContent.vehicle_render[
      vehicleName
    ].payment_object = populatePaymentObject(
      configuredPrice,
      paymentObj,
      submittedCashDown,
      submittedLeaseTerm,
      submittedLoanTerm,
      submittedAnnualMiles
    );

    setActiveFormVals({
      ...activeFormVals,
      adjustments: "",
      cashDownPayment: "",
      tradeInPayoff: "",
      tradeInValue: ""
    });

    setTeslaModels(vehicleContent);
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
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeFSDSetting: state.vehiclesReducer.activeFSDSetting,
  };
}

const mapDispatchToProps = (dispatch, modelName) => ({
  showApplyAllWarning: showApplyAllWarning(modelName, dispatch),
  showResetWarning: showResetWarning(modelName, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleConfigUserEntry);
