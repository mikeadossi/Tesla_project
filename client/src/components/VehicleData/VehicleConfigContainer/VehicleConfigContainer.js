import React, { useState, useEffect } from "react"; 
import VehicleConfig from "../../VehicleData/VehicleConfig/VehicleConfig";

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
  setTeslaModels
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

  const renderedTesla = vehicleContent.vehicle_render[name];
  const vehicleBattery = renderedTesla["battery"][1]; // ex: "long_range"

  const modelInfo = {
    modelName: name,
    modelBattery: vehicleBattery,
    configuredPrice: renderedTesla["cash_price"],
    pymtContent: renderedTesla["payment_object"],
  };
  
  const modelSelectObj = {
    model3: "m3",
    modelS: "ms",
    modelX: "mx",
    modelY: "my"
  }

  const abbreviatedModel = modelSelectObj[modelInfo.modelName];
  const inventoryUrl = "https://www.tesla.com/inventory/new/" + abbreviatedModel + "?arrangeby=relevance&zip=" + usStateVehicleOrder[1] + "&range=200";

  return (
    <div className="app_Config_container">
      <div className="app_configTitle app_displayFlex">
        <div className="vehicleConfig_vehicleName">{selectedVehicle}</div>
        <div className="vehicleConfig_header_options_container app_displayFlex">
          <a className="app_options_btn app_textdecorationNone" target="_blank" href={inventoryUrl} >Inventory</a>
          <div className="app_options_btn" >Specs</div>
          <div
            className="vehicleConfig_close_container"
            onClick={() => removeModel(selectedVehicle.name)}
          >
            <img
              className="vehicleConfig_close"
              src="../../../../images/Nav/close_2.png"
              alt="close"
            ></img>
          </div>
        </div>
      </div>
      
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
       />

    </div>
  );
};

export default VehicleConfigContainer;