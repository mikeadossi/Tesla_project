const populateMenu = async (metaVehicleObj, setMenuOptions) => { 
    let modelNames = []; 
    for (var i = 0; i < metaVehicleObj.length; i++) {
      let dov = JSON.parse(metaVehicleObj[i]["default_optioned_vehicle"]) 
      // let dov = metaVehicleObj[i]["default_optioned_vehicle"] 
      modelNames.push(dov["model"]);
    } 
    await setMenuOptions(modelNames);
};

export default populateMenu;