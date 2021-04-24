import React, { useState, useEffect } from "react";
import "./VehicleConfig.css"; 
import VehicleConfigPricing from "../../VehicleData/VehicleConfigPricing/VehicleConfigPricing";
import VehicleConfigUserEntry from "../../VehicleData/VehicleConfigUserEntry/VehicleConfigUserEntry";
import VehicleBatteryAndPaint from "../../VehicleData/VehicleBatteryAndPaint/VehicleBatteryAndPaint";
import VehicleConfigImgSection from "../../VehicleData/VehicleConfigImgSection/VehicleConfigImgSection";
import VehicleConfigWheels from "../../VehicleData/VehicleConfigWheels/VehicleConfigWheels";
import VehicleConfigInteriors from "../../VehicleData/VehicleConfigInteriors/VehicleConfigInteriors";
import VehicleConfigAutopilot from "../../VehicleData/VehicleConfigAutopilot/VehicleConfigAutopilot";
import VehicleConfigTowHitch from "../../VehicleData/VehicleConfigTowHitch/VehicleConfigTowHitch";
import VehicleConfigLayouts from "../../VehicleData/VehicleConfigLayouts/VehicleConfigLayouts";
import VehicleMenu from "../VehicleMenu/VehicleMenu";

const VehicleConfig = ({
  selectedVehicle,
  vehicleContent, 
  changeVehicleColor,
  changeVehicleWheel,
  changeVehicleInterior,
  changeVehicleLayout,
  changeVehicleBattery,
  addTowHitch,
  toggleFSD,
  selectOffMenuAutopilot,
  usStateVehicleOrder,
  populatePaymentObject,
  setUserPymtEntry,
  modelInfo,
  setTeslaModels, 
  runReset,
  runApplyAll,
}) => {
  
  const showComponent = (value) => {
    setVisibility({ [value]: true });
  };

  const [visibility, setVisibility] = useState({
    Cash: true,
    Lease: false,
    Loan: false,
  });

  const [activePayment, setActivePayment] = useState("Cash");

  const name = `${selectedVehicle}`
  .split(" ")
  .map((iv, i) => {
    if (i === 0) {
      return iv.toLowerCase();
    }
    return iv;
  })
  .join("");

  const renderedTesla = vehicleContent.vehicle_render[name];
  const teslaDetails = vehicleContent.vehicle_details[name];

  const vehicleBattery = renderedTesla["battery"][1]; // ex: "long_range"


  if (!renderedTesla) {
    return null;
  }

  
  return (
      
    <div className="app_displayFlex">
      <div className="app_inlineFlex app_columns_width vehicleConfig_column1">
        <div className="vehicleConfig_columns_blockContent">

          <div className="vehicleConfig_modelName_container">
            <span className="vehicleConfig_modelName">
              {renderedTesla.battery[0]}
            </span>
            <span className="vehicleConfig_modelPrice">
              Cash Price: ${renderedTesla.cash_price}
            </span>
          </div>

          <VehicleConfigImgSection 
              renderedTesla={renderedTesla}
          />

          <VehicleConfigPricing  
              showComponent={showComponent}
              visibility={visibility}
              setActivePayment={setActivePayment}
              activePayment={activePayment}
              vehicleContent={vehicleContent}
              usStateVehicleOrder={usStateVehicleOrder}
              modelInfo={modelInfo}
          />

          <VehicleBatteryAndPaint
              selectedVehicle={selectedVehicle}
              name={name}
              vehicleContent={vehicleContent}
              changeVehicleColor={changeVehicleColor} 
              renderedTesla={renderedTesla}
              teslaDetails={teslaDetails}
              changeVehicleBattery={changeVehicleBattery}
          />

        </div>
      </div>

      <div className="app_config_border"></div>

      <div className="app_inlineFlex app_columns_width vehicleConfig_column2">
        <div className="vehicleConfig_columns_blockContent">
          <div className="vehicleConfig_selectWheelAndInterior_container">

            <VehicleConfigWheels
                teslaDetails={teslaDetails}
                changeVehicleWheel={changeVehicleWheel}
                name={name}
                vehicleContent={vehicleContent}
                vehicleBattery={vehicleBattery}
                selectedVehicle={selectedVehicle}
                renderedTesla={renderedTesla}
            />

            <VehicleConfigInteriors
                teslaDetails={teslaDetails}
                name={name}
                changeVehicleInterior={changeVehicleInterior}
                vehicleBattery={vehicleBattery}
                selectedVehicle={selectedVehicle}
                vehicleContent={vehicleContent}
                renderedTesla={renderedTesla}
            />

            <div className="vehicleConfig_borderBottom"></div>
          </div>

          <VehicleConfigLayouts  
              name={name}
              teslaDetails={teslaDetails}
              vehicleBattery={vehicleBattery}
              selectedVehicle={selectedVehicle} 
              changeVehicleLayout={changeVehicleLayout} 
              vehicleContent={vehicleContent}
          />

          <VehicleConfigAutopilot 
              selectedVehicle={selectedVehicle}
              name={name}
              vehicleBattery={vehicleBattery}
              selectOffMenuAutopilot={selectOffMenuAutopilot} 
              vehicleContent={vehicleContent}
              toggleFSD={toggleFSD} 
          />

          <VehicleConfigTowHitch
              name={name}
              addTowHitch={addTowHitch}
              vehicleContent={vehicleContent}
              vehicleBattery={vehicleBattery}
              selectedVehicle={selectedVehicle}
              teslaDetails={teslaDetails}
              renderedTesla={renderedTesla}
              />

          <VehicleConfigUserEntry
              showComponent={showComponent} 
              visibility={visibility}
              setActivePayment={setActivePayment}
              activePayment={activePayment}
              renderedTesla={renderedTesla}
              name={name}
              vehicleContent={vehicleContent}
              usStateVehicleOrder={usStateVehicleOrder}
              populatePaymentObject={populatePaymentObject}
              setUserPymtEntry={setUserPymtEntry}
              modelInfo={modelInfo}
              setTeslaModels={setTeslaModels} 
              runReset={runReset}
              runApplyAll={runApplyAll}
          />

        </div>
      </div>
    </div> 
  );
};

export default VehicleConfig;
