const setSelectedVehicleName = (selectedVehicleName, setVehicleData) => {
    setVehicleData((data) => {
      if (!selectedVehicleName) return data; // ensures vehicleData array has no starting empty value

      let newVehicleNames = data.filter(
        (modelName) => modelName !== selectedVehicleName
      ); // checks for and removes vehicle from array
      newVehicleNames = [selectedVehicleName, ...newVehicleNames]; // sets selected vehicle atop vehicleData array
      return newVehicleNames;
    });
};

export default setSelectedVehicleName;