const setSelectedVehicleName = (
  selectedVehicleName,
  setVehicleData,
  vehicleData
) => {
  if (!selectedVehicleName) return vehicleData; // ensures vehicleData array has no starting empty value

  let newVehicleNames = vehicleData.filter(
    (modelName) => modelName !== selectedVehicleName
  ); // checks for and removes vehicle from array
  newVehicleNames = [selectedVehicleName, ...newVehicleNames]; // sets selected vehicle atop vehicleData array
  setVehicleData(newVehicleNames);
};

export default setSelectedVehicleName;
