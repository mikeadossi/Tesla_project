const populateMenu = (metaVehicleObj, setMenuOptions) => {
    let modelNames = [];
    for (var i = 0; i < metaVehicleObj.length; i++) {
      modelNames.push(metaVehicleObj[i]["default_optioned_vehicle"]["model"]);
    }
    setMenuOptions(modelNames);
};

export default populateMenu;