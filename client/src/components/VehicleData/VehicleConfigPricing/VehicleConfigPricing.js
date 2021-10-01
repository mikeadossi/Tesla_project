import React from "react";
import VehicleCash from "../../VehicleData/VehiclePymt/VehicleCash/VehicleCash";
import VehicleLeasing from "../../VehicleData/VehiclePymt/VehicleLeasing/VehicleLeasing";
import VehicleFinance from "../../VehicleData/VehiclePymt/VehicleFinance/VehicleFinance";

const VehicleConfigPricing = ({
  showComponent,
  visibility,
  setActivePayment,
  activePayment,
  vehicleContent,
  usStateVehicleOrder,
  modelInfo,
}) => {
  return (
    <div className="vehicleConfig_pricing_container">
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
      <div className="vehicleConfig_pricing_subcontainers">
        {visibility.Cash ? (
          <VehicleCash
            usStateVehicleOrder={usStateVehicleOrder}
            vehicleContent={vehicleContent}
            modelInfo={modelInfo}
          />
        ) : (
          ""
        )}
        {visibility.Loan ? (
          <VehicleFinance
            usStateVehicleOrder={usStateVehicleOrder}
            vehicleContent={vehicleContent}
            modelInfo={modelInfo}
          />
        ) : (
          ""
        )}
        {visibility.Lease ? (
          <VehicleLeasing
            usStateVehicleOrder={usStateVehicleOrder}
            vehicleContent={vehicleContent}
            modelInfo={modelInfo}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default VehicleConfigPricing;
