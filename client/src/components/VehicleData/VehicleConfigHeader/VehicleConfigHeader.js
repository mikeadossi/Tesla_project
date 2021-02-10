import React from "react";

const VehicleConfigHeader = ({
  selectedVehicle, 
  removeModel, 
  modelInfo,
  usStateVehicleOrder
}) => {
  
  const modelSelectObj = {
    model3: "m3",
    modelS: "ms",
    modelX: "mx",
    modelY: "my"
  }

  const abbreviatedModel = modelSelectObj[modelInfo.modelName];
  const inventoryUrl = "https://www.tesla.com/inventory/new/" + abbreviatedModel + "?arrangeby=relevance&zip=" + usStateVehicleOrder[1] + "&range=200";

  return ( 
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
  );
};

export default VehicleConfigHeader;