import React, { useState, useEffect } from "react";
import VehicleConfig from "../../VehicleData/VehicleConfig/VehicleConfig";
import VehicleSpecs from "../../VehicleData/VehicleSpecs/VehicleSpecs";
import VehicleConfigHeader from "../../VehicleData/VehicleConfigHeader/VehicleConfigHeader";
import { connect } from "react-redux";

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
  handleWarning,
  alertUser,
  setAlertUser,
  vehicleData,
  vehicleImg, 
  setVehicleImg,
}) => {

  const [configVisibility, setConfigVisibility] = useState({
    ConfigPage: true,
    SpecsPage: false,
  });



  const [activeBattery, setActiveBattery] = useState("");

  const name = `${selectedVehicle}`
    .split(" ")
    .map((iv, i) => {
      if (i === 0) {
        return iv.toLowerCase();
      }
      return iv;
    })
    .join("");


  const makeVisible = (value) => {
    if (value === "ConfigPage") {
      setConfigVisibility({ SpecsPage: false });
      setConfigVisibility({ ConfigPage: true });
    } else if (value === "SpecsPage") {
      setConfigVisibility({ ConfigPage: false });
      setConfigVisibility({ SpecsPage: true });
    }
  };


  let renderedTesla;
  let vehicleBattery;
  let teslaDetails;
  let modelInfo;
  let batteryObject;
  let batteryObjectKeys;
  let detailed_specs;
  let touchscreen;




  if(vehicleContent && vehicleContent["vehicle_render"]){

    renderedTesla = vehicleContent.vehicle_render[name]; 
    vehicleBattery = renderedTesla.["battery"][1]; // ex: "long_range"
    teslaDetails = vehicleContent.vehicle_details[name];
    detailed_specs = vehicleContent.vehicle_render[name]["detailed_specs"];
    touchscreen = detailed_specs.general_specs.displays;
    touchscreen = touchscreen.replace(" inch", '"');

    modelInfo = {
      modelName: name,
      modelBattery: vehicleBattery,
      configuredPrice: renderedTesla.["cash_price"],
      pymtContent: renderedTesla.["payment_object"],
    };

    batteryObject = {
      standard_battery: teslaDetails?.standard_battery,
      off_menu: teslaDetails?.off_menu,
      long_range: teslaDetails?.long_range,
      performance: teslaDetails?.performance,
      plaid: teslaDetails?.plaid,
    };

    batteryObjectKeys = [
      "standard_battery",
      "off_menu",
      "long_range",
      "performance",
      "plaid",
    ];

  };

  return (
    <div className="app_Config_container" ref={vehicleContainerRef}>
      <VehicleConfigHeader 
        selectedVehicle={selectedVehicle}
        removeModel={removeModel}
        modelInfo={modelInfo}
        usStateVehicleOrder={usStateVehicleOrder}
        makeVisible={makeVisible}
        currentUser={currentUser}
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
          handleWarning={handleWarning}
          alertUser={alertUser}
          setAlertUser={setAlertUser}
          vehicleData={vehicleData} 
          renderedTesla={renderedTesla}
          teslaDetails={teslaDetails}
          vehicleBattery={vehicleBattery}
          vehicleContent={vehicleContent}
          vehicleImg={vehicleImg}
          setVehicleImg={setVehicleImg}
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
          currentUser={currentUser}
          detailed_specs={detailed_specs}
          touchscreen={touchscreen}
        /> 
        : 
        ""
      }
    </div>
  );
};

// export default VehicleConfigContainer;

function mapStateToProps(state) {
  return {
    vehicleContent: state.vehiclesReducer.vehicleRenderData,
  };
}

export default connect(mapStateToProps)(VehicleConfigContainer);
