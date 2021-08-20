const removeModel = ({
    model, 
    vehicleData,
    teslaModels,
    setVehicleData,
    runReset,
}) => { 

  const stateData = vehicleData.filter(name => name !== model);
  const modelName = model
      .split(" ")
      .map((iv, i) => {
      if (i === 0) {
          return iv.toLowerCase();
      }
      return iv;
      })
      .join("");
  runReset(modelName, teslaModels);
  setVehicleData([...stateData]);
};

export default removeModel;
