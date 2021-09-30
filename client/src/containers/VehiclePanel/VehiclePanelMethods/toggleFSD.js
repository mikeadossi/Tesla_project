const toggleFSD = (
  trim,
  value,
  activeFSDSetting,
  teslaModels,
  setTeslaModels,
  populatePaymentObject, 
) => {
  //trim=long_range value=model3
  // this function only handles fsd/autopilot toggling
  // all transitions betwen offMenu and auto/FSD are handled by changeVehicleBattery!

  const model = `${value}`
    .split(" ")
    .map((iv, i) => {
      if (i === 0) {
        return iv.toLowerCase();
      }
      return iv;
    })
    .join("");

  let newTeslaModels = {
    ...teslaModels,
    vehicle_render: {
      ...teslaModels["vehicle_render"],

      [model]: {
        ...teslaModels.vehicle_render[model],
        ["autopilot"]: [...teslaModels.vehicle_render[model]["autopilot"]],
      },
    },
  };

  const renderedVehicle = newTeslaModels.vehicle_render[model];
  const autopilotOptions =
    newTeslaModels.vehicle_details[model][trim]["autopilot"];
  const autopilotPrice = autopilotOptions["autopilot"]["price"]; // ex: "included"
  const fsdPrice = autopilotOptions["fsd"]["price"] || 10000;

  let currentSettingName = renderedVehicle["autopilot"][0];
  let currentVehiclePrice = renderedVehicle["cash_price"];


  if (activeFSDSetting[value] === "autopilot" && currentSettingName === "autopilot") {
    currentVehiclePrice += fsdPrice;
    newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
    newTeslaModels.vehicle_render[model]["autopilot"] = ["fsd", fsdPrice];
  } else if (activeFSDSetting[value] === "fsd" && currentSettingName === "fsd") {
    currentVehiclePrice -= fsdPrice;
    newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
    newTeslaModels.vehicle_render[model]["autopilot"] = [
      "autopilot",
      autopilotPrice,
    ];
  } else {
    console.log(
      "ERROR! Incorrect function called! - toggleFSD is being called! activeFSDSetting[value]:" +
        activeFSDSetting[value] +
        " currentSettingName: " +
        currentSettingName
    );
    return;
  }


  let paymentObj = renderedVehicle["payment_object"];
  newTeslaModels.vehicle_render[model][
    "payment_object"
  ] = populatePaymentObject(currentVehiclePrice, paymentObj);

  // details should remain unchanged, with render changing (also vehicles should remain unchanged)

  setTeslaModels(newTeslaModels)

}; // handled deep cpy!

export default toggleFSD;
