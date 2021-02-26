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
  setTeslaModels,
  showWarning
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

  const makeVisible = (value) => {
    if(value === "ConfigPage"){
      setConfigVisibility({ "SpecsPage": false });
      setConfigVisibility({ "ConfigPage": true });
    } else if(value === "SpecsPage") {
      setConfigVisibility({ "ConfigPage": false });
      setConfigVisibility({ "SpecsPage": true });
    } 
  };

  const [configVisibility, setConfigVisibility] = useState({
    ConfigPage: true,
    SpecsPage: false
  });
  
  return (
    <div className="app_Config_container">

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
          showWarning={showWarning}
        />
        ) : (
        ""
      )}

      {configVisibility.SpecsPage ? ( 
        <VehicleSpecs />
        ) : (
        ""
      )}

    </div>
  );
};

export default VehicleConfigContainer;