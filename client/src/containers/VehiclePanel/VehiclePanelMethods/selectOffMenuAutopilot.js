const selectOffMenuAutopilot = (
  selectedOption,
  teslaModels,
  setTeslaModels,
  populatePaymentObject, 
) => {
  // ex: selectedOption = "no_autopilot"
  // this function only handles model3 offMenu concerns
  // all transitions betwen model3 offMenu and model3 auto/FSD are handled by changeVehicleBattery!

  let newTeslaModels = {
    ...teslaModels,
    vehicle_render: {
      ...teslaModels["vehicle_render"],

      ["model3"]: {
        ...teslaModels.vehicle_render["model3"],
        ["autopilot"]: [...teslaModels.vehicle_render["model3"]["autopilot"]],
      },
    },
  };

  const renderedVehicle = newTeslaModels.vehicle_render["model3"];
  let selectedOptionPrice =
    newTeslaModels.vehicle_details["model3"]["off_menu"]["autopilot"][
      selectedOption
    ]["price"]; // either $0, $3,000 or $13,000

  let activeSettingName = renderedVehicle["autopilot"][0];
  let activeSettingPrice = renderedVehicle["autopilot"][1];
  let activeVehiclePrice = renderedVehicle["cash_price"];

  let OffOptions = ["no_autopilot", "autopilot_charge", "fsd_and_autopilot"];

  if (
    OffOptions.includes(activeSettingName) &&
    OffOptions.includes(selectedOption)
  ) {
    if (activeSettingName !== selectedOption) {
      activeVehiclePrice -= activeSettingPrice;
      activeVehiclePrice += selectedOptionPrice;
      newTeslaModels.vehicle_render["model3"][
        "cash_price"
      ] = activeVehiclePrice;
      newTeslaModels.vehicle_render["model3"]["autopilot"] = [
        selectedOption,
        selectedOptionPrice,
      ];
    }
  } else {
    console.log(
      "ERROR! Incorrect function called! - selectOffMenuAutopilot is being called! activeSettingName:" +
        activeSettingName +
        " selectedOption: " +
        selectedOption
    );
    return;
  }

  let paymentObj = renderedVehicle["payment_object"];
  newTeslaModels.vehicle_render["model3"][
    "payment_object"
  ] = populatePaymentObject(activeVehiclePrice, paymentObj);

  setTeslaModels(newTeslaModels);

  // details should remain unchanged, with render changing (also vehicles should remain unchanged)
}; // handled deep cpy!

export default selectOffMenuAutopilot;
