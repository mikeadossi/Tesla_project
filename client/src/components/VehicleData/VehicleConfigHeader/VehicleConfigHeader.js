import React, { useEffect } from "react";

const VehicleConfigHeader = ({
  selectedVehicle, 
  removeModel, 
  modelInfo,
  usStateVehicleOrder,
  makeVisible,
}) => {
  
  const modelSelectObj = {
    model3: "m3",
    modelS: "ms",
    modelX: "mx",
    modelY: "my"
  }

  let abbreviatedModel;
  let inventoryUrl;

  useEffect(() => {
    if(modelInfo){
      abbreviatedModel = modelSelectObj[modelInfo.modelName];
      inventoryUrl = "https://www.tesla.com/inventory/new/" + abbreviatedModel + "?arrangeby=relevance&zip=" + usStateVehicleOrder[1] + "&range=200";
    }
  }, [modelInfo]);


  return ( 
    <div className="app_configTitle app_displayFlex">
        <div 
          className="vehicleConfig_vehicleName"
          onClick={() => makeVisible("ConfigPage")}
          id={selectedVehicle}
        >
          {selectedVehicle}
        </div>
        <div className="vehicleConfig_header_options_container app_displayFlex"> 
            <div 
              className="app_options_btn" 
              onClick={() => makeVisible("SpecsPage")}
            >
              Specs
            </div> 
            <a className="app_options_btn app_textdecorationNone" target="_blank" rel="noopener noreferrer" href={inventoryUrl} >Inventory</a>
            <div
              className="vehicleConfig_close_container"
              onClick={() => removeModel(selectedVehicle)}
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