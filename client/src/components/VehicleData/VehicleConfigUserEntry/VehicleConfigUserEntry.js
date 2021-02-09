import React, { useState } from "react"; 
import Vehicle_userEntry_financing from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_financing/Vehicle_userEntry_financing";
import Vehicle_userEntry_leasing from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_leasing/Vehicle_userEntry_leasing";
import Vehicle_userEntry_cash from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_cash/Vehicle_userEntry_cash";

const VehicleConfigUserEntry = ({
  name,
  renderedTesla,
  vehicleContent,
  usStateVehicleOrder,
  populatePaymentObject,
  setUserPymtEntry,
  modelInfo,
  setTeslaModels
}) => {

  const vehicleName = name;

  const showComponent = (value) => {
    setVisibility({ [value]: true });
  };

  const [visibility, setVisibility] = useState({
    Cash: true,
    Lease: false,
    Loan: false,
  });

  const [activePayment, setActivePayment] = useState("Cash");
  const [activeFormVals, setActiveFormVals] = useState({});
  const [error, setFormError] = useState(false);

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

  const handlePaymentFormSubmit = () => {
    // write error handling code to review user entries! - TODO

    let formError = false;

    if (!activeFormVals["leaseTermLength"]) {
      formError = true;
    }

    setFormError(formError);

    const modelName = vehicleName;
    setUserPymtEntry(activeFormVals, modelName);


    setTeslaModels((vehicleContent) => {
      let newTeslaModels = { ...vehicleContent };

      const configuredPrice = renderedTesla["cash_price"];
      const paymentObj = renderedTesla["payment_object"];

      newTeslaModels.vehicle_render[modelName][
        "payment_object"
      ] = populatePaymentObject( configuredPrice, paymentObj );

      return newTeslaModels;
    });

  };


  return (
    <div className="veicleConfig_userEntry_container">
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
            <button className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_setAll_btn app_cursorPointer">
            APPLY ALL
            </button>
            <button className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_reset_btn app_cursorPointer">
            RESET
            </button>
            <button
            onClick={handlePaymentFormSubmit}
            className="app_removeBlue app_submit_btn app_noSelect vehicleConfig_control_btn vehicleConfig_submit_btn app_cursorPointer"
            >
            SUBMIT
            </button>
        </div>

    </div>
  );
};

export default VehicleConfigUserEntry;