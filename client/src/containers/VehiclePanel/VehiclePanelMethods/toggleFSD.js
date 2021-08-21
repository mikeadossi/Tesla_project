const toggleFSD = (trim, value, setTeslaModels, populatePaymentObject) => {
    //trim=long_range value=model3
    const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    setTeslaModels((metaVehicles) => {
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_render: {
          ...metaVehicles["vehicle_render"],

          [model]: {
            ...metaVehicles.vehicle_render[model],
            ["autopilot"]: [...metaVehicles.vehicle_render[model]["autopilot"]],
          },
        },
      };

      const renderedVehicle = newTeslaModels.vehicle_render[model];
      const autopilotOptions =
        newTeslaModels.vehicle_details[model][trim]["autopilot"];
      const autopilotPrice = autopilotOptions["autopilot"]["price"]; // ex: "included"
      const fsdPrice = autopilotOptions["fsd"]["price"]; // ex: 10000
      let currentSettingName = renderedVehicle["autopilot"][0];
      let currentSettingPrice = renderedVehicle["autopilot"][1];
      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentSettingName === "autopilot") {
        currentVehiclePrice += fsdPrice;
        currentSettingName = "fsd";
        currentSettingPrice = fsdPrice;
      } else {
        currentVehiclePrice -= fsdPrice;
        currentSettingName = "autopilot";
        currentSettingPrice = autopilotPrice;
      }

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["autopilot"] = [
        currentSettingName,
        currentSettingPrice,
      ];

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
}; // handled deep cpy!

export default toggleFSD;