const duplicateFSDSetting = (
    trim,
    value,
    preferredAutopilotOption,
    activeFSDSetting,
    teslaModels, 
    populatePaymentObject,
    setActiveFSDSetting, 
  ) => {
  
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
  

    if (preferredAutopilotOption === "autopilot" && currentSettingName === "fsd") {
        currentVehiclePrice -= fsdPrice;
        newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
        newTeslaModels.vehicle_render[model]["autopilot"] = [
            "autopilot",
            autopilotPrice,
        ];
        activeFSDSetting[value] = preferredAutopilotOption;
        setActiveFSDSetting(activeFSDSetting);
    } else if (preferredAutopilotOption === "fsd" && currentSettingName === "autopilot") {
        currentVehiclePrice += fsdPrice;
        newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
        newTeslaModels.vehicle_render[model]["autopilot"] = ["fsd", fsdPrice];
        activeFSDSetting[value] = preferredAutopilotOption;
        setActiveFSDSetting(activeFSDSetting);
    }
  
    let paymentObj = renderedVehicle["payment_object"];
    newTeslaModels.vehicle_render[model][
      "payment_object"
    ] = populatePaymentObject(currentVehiclePrice, paymentObj);


    return newTeslaModels;

  };
  
  export default duplicateFSDSetting;