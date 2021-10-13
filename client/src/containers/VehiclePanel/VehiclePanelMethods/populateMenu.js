const populateMenu = async (metaVehicleObj, setMenuOptions) => { 
    let modelNames = []; 
    for (var i = 0; i < metaVehicleObj.length; i++) {
      let dov = metaVehicleObj[i]["default_optioned_vehicle"];
      if(typeof(dov) === 'string'){
        dov = JSON.parse(dov); 
      }
      modelNames.push(dov["model"]);
    } 
    await setMenuOptions(modelNames);
};

export default populateMenu;