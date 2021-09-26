import React, { useState } from "react";
import VehicleConfig from "../../VehicleData/VehicleConfig/VehicleConfig";
import VehicleSpecs from "../../VehicleData/VehicleSpecs/VehicleSpecs";
import VehicleConfigHeader from "../../VehicleData/VehicleConfigHeader/VehicleConfigHeader";

const VehicleConfigContainer = ({
  selectedVehicle,
  vehicleContent,
  removeModel,
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
  vehicleContainerRef,
  setTeslaModels,
  runReset,
  runApplyAll,
  currentUser,
  activeFSDSetting,
  setActiveFSDSetting,
  activeOffMenuAutopilot,
  setActiveOffMenuAutopilot,
}) => {
  const name = `${selectedVehicle}`
    .split(" ")
    .map((iv, i) => {
      if (i === 0) {
        return iv.toLowerCase();
      }
      return iv;
    })
    .join("");

    // selectedVehicle - Model S
    // name - modelS
  const renderedTesla = vehicleContent.vehicle_render[name]; 
  const vehicleBattery = renderedTesla["battery"][1]; // ex: "long_range"
  const teslaDetails = vehicleContent.vehicle_details[name];

  const modelInfo = {
    modelName: name,
    modelBattery: vehicleBattery,
    configuredPrice: renderedTesla["cash_price"],
    pymtContent: renderedTesla["payment_object"],
  };

  const makeVisible = (value) => {
    if (value === "ConfigPage") {
      setConfigVisibility({ SpecsPage: false });
      setConfigVisibility({ ConfigPage: true });
    } else if (value === "SpecsPage") {
      setConfigVisibility({ ConfigPage: false });
      setConfigVisibility({ SpecsPage: true });
    }
  };

  const [configVisibility, setConfigVisibility] = useState({
    ConfigPage: true,
    SpecsPage: false,
  });

  const [activeBattery, setActiveBattery] = useState("");

  const batteryObject = {
    standard_battery: teslaDetails.standard_battery,
    off_menu: teslaDetails.off_menu,
    long_range: teslaDetails.long_range,
    performance: teslaDetails.performance,
    plaid: teslaDetails.plaid,
  };

  const batteryObjectKeys = [
    "standard_battery",
    "off_menu",
    "long_range",
    "performance",
    "plaid",
  ];

  return (
    <div className="app_Config_container" ref={vehicleContainerRef}>
      <VehicleConfigHeader 
        selectedVehicle={selectedVehicle}
        removeModel={removeModel}
        modelInfo={modelInfo}
        usStateVehicleOrder={usStateVehicleOrder}
        makeVisible={makeVisible}
      />

      {configVisibility.ConfigPage ? (
        <VehicleConfig 
          selectedVehicle={selectedVehicle}
          vehicleContent={vehicleContent}
          changeVehicleColor={changeVehicleColor}
          changeVehicleWheel={changeVehicleWheel}
          changeVehicleInterior={changeVehicleInterior}
          changeVehicleLayout={changeVehicleLayout}
          changeVehicleBattery={changeVehicleBattery}
          addTowHitch={addTowHitch}
          toggleFSD={toggleFSD}
          selectOffMenuAutopilot={selectOffMenuAutopilot}
          usStateVehicleOrder={usStateVehicleOrder}
          populatePaymentObject={populatePaymentObject}
          setUserPymtEntry={setUserPymtEntry}
          modelInfo={modelInfo}
          setTeslaModels={setTeslaModels}
          runReset={runReset}
          runApplyAll={runApplyAll}
          batteryObject={batteryObject}
          batteryObjectKeys={batteryObjectKeys}
          activeBattery={activeBattery}
          setActiveBattery={setActiveBattery}
          currentUser={currentUser}
          activeFSDSetting={activeFSDSetting}
          setActiveFSDSetting={setActiveFSDSetting}
          activeOffMenuAutopilot={activeOffMenuAutopilot}
          setActiveOffMenuAutopilot={setActiveOffMenuAutopilot}
        />
      ) : (
        ""
      )}

      {configVisibility.SpecsPage 
        ? 
        <VehicleSpecs 
          selectedVehicle={selectedVehicle}
          vehicleContent={vehicleContent}
          modelInfo={modelInfo}
          changeVehicleBattery={changeVehicleBattery}
          batteryObject={batteryObject}
          batteryObjectKeys={batteryObjectKeys} 
          setActiveBattery={setActiveBattery}
          activeBattery={activeBattery}
        /> 
        : 
        ""
      }
    </div>
  );
};

export default VehicleConfigContainer;
