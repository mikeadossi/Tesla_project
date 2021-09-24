import React, { useState, useEffect } from "react";
import Vehicle_userEntry_financing from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_financing/Vehicle_userEntry_financing";
import Vehicle_userEntry_leasing from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_leasing/Vehicle_userEntry_leasing";
import Vehicle_userEntry_cash from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_cash/Vehicle_userEntry_cash";
import GrayBackground from "../../GrayBackground/GrayBackground";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  showApplyAllWarning,
  showResetWarning,
} from "../../../config/actions/navActions"; 

const VehicleConfigUserEntry = ({
  showComponent,
  visibility,
  setActivePayment,
  activePayment,
  renderedTesla,
  name,
  vehicleContent,
  usStateVehicleOrder,
  populatePaymentObject,
  setUserPymtEntry,
  modelInfo,
  setTeslaModels,
  showApplyAllWarning,
  showResetWarning,
  runReset,
  runApplyAll,
  currentUser,
}) => {
  const dispatch = useDispatch();
  const vehicleName = name; //ex: model3  
  const spacedVehicleName = vehicleContent["vehicle_details"][vehicleName]["default_optioned_vehicle"]["model"]; //ex: Model 3 

  const [activeFormVals, setActiveFormVals] = useState({});
  const [error, setFormError] = useState(false);

  const vehiclesRendered = useSelector(
    (state) => state.vehiclesReducer.vehiclesRendered
  );


  useEffect(() => { 
    setActiveFormVals({
      ...activeFormVals,
      leaseInterestRate:
        vehicleContent.vehicle_render[name]["payment_object"]["lease"][
          "leaseInterestRate"
        ],
      loanApr:
        vehicleContent.vehicle_render[name]["payment_object"]["finance"][
          "loanApr"
        ],
    });
  }, [vehicleContent, name]);

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
    let formError = false; 

    if (!activeFormVals["leaseInterestRate"]) {
      formError = true;
    } 
    // console.log({activeFormVals})



    setFormError(formError);


    const modelName = vehicleName; 
    
    // function below updates state with user entries
    const vehicleContent = setUserPymtEntry(
      activeFormVals,
      modelName,
      setTeslaModels
    ); 

    setTeslaModels(() => { 
      const configuredPrice =
        vehicleContent.vehicle_render[modelName].cash_price;
      const paymentObj =
        vehicleContent.vehicle_render[modelName].payment_object; 
      const submittedCashDown = activeFormVals["cashDownPayment"];
      const submittedLeaseTerm = activeFormVals["leaseTerm"];
      const submittedLoanTerm = activeFormVals["loanTerm"]; 
      const submittedAnnualMiles = activeFormVals["annualMiles"];
      
      // function below runs all necessary lease, finance calculations
      vehicleContent.vehicle_render[
        modelName
      ].payment_object = populatePaymentObject(
        configuredPrice, 
        paymentObj, 
        submittedCashDown, 
        submittedLeaseTerm, 
        submittedLoanTerm, 
        submittedAnnualMiles
      );

      return vehicleContent;
    });
  };

  console.log('>>vehicleContent.vehicle_render - ',vehicleContent.vehicle_render)
  console.log('>>vehicleContent - ',vehicleContent)



  return (
    <div className="veicleConfig_userEntry_container">
      <GrayBackground 
        runReset={runReset}
        runApplyAll={runApplyAll} 
        setTeslaModels={setTeslaModels}
      />
      <div className="veicleConfig_userEntry_subcontainer">
        <div className="app_displayFlex app_Solar_selectPymt_div">
          <div
            onClick={() => {
              showComponent("Cash");
              setActivePayment("Cash");
            }}
            className={`app_Solar_selectPymt_btn ${
              activePayment == "Cash" && "selected_payment"
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
              activePayment == "Loan" && "selected_payment"
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
              activePayment == "Lease" && "selected_payment"
            }`}
          >
            Lease
          </div>
        </div>

        <div className="vehicleConfig_userEntry_containers">
          {visibility.Cash ? (
            <Vehicle_userEntry_cash
              usStateVehicleOrder={usStateVehicleOrder}
              modelInfo={modelInfo}
              activeFormVals={activeFormVals}
              handleFormChange={handleFormChange}
              error={error}
              handleClearField={handleClearField}
            />
          ) : (
            ""
          )}
          {visibility.Loan ? (
            <Vehicle_userEntry_financing
              usStateVehicleOrder={usStateVehicleOrder}
              modelInfo={modelInfo}
              activeFormVals={activeFormVals}
              handleFormChange={handleFormChange}
              error={error}
              handleClearField={handleClearField}
            />
          ) : (
            ""
          )}
          {visibility.Lease ? (
            <Vehicle_userEntry_leasing
              usStateVehicleOrder={usStateVehicleOrder}
              modelInfo={modelInfo}
              activeFormVals={activeFormVals}
              handleFormChange={handleFormChange}
              error={error}
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
            if(currentUser && currentUser["apply_all_warning_on"] === 'false'){
              handlePaymentFormSubmit();
              runApplyAll(
                spacedVehicleName,
                vehiclesRendered, 
                vehicleName,
                setTeslaModels
              ); 
            } else {
              showApplyAllWarning(dispatch, vehicleName);
            }
          }}
          className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_setAll_btn app_cursorPointer"
        >
          APPLY ALL
        </button>
        <button
          onClick={() => {
            if(currentUser && currentUser["reset_warning_on"] === 'false'){
              console.log('ran here')
              runReset(vehicleName, vehicleContent.vehicle_render);
            } else {
              showResetWarning(dispatch, vehicleName);
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

const mapDispatchToProps = (dispatch, modelName) => ({
  showApplyAllWarning: showApplyAllWarning(dispatch, modelName),
  showResetWarning: showResetWarning(dispatch, modelName),
});

export default connect(null, mapDispatchToProps)(VehicleConfigUserEntry);
