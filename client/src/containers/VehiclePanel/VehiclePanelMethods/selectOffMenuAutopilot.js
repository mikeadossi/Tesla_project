  const selectOffMenuAutopilot = (selectedOption, setTeslaModels, populatePaymentObject) => {
    // ex: selectedOption = "no_autopilot"

    setTeslaModels((metaVehicles) => {
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_render: {
          ...metaVehicles["vehicle_render"],

          ["model3"]: {
            ...metaVehicles.vehicle_render["model3"],
            ["autopilot"]: [
              ...metaVehicles.vehicle_render["model3"]["autopilot"],
            ],
          },
        },
      };
      const renderedVehicle = newTeslaModels.vehicle_render["model3"];
      let selectedOptionPrice =
        newTeslaModels.vehicle_details["model3"]["off_menu"]["autopilot"][
          selectedOption
        ]["price"];

      let currentSettingName = renderedVehicle["autopilot"][0];
      let currentSettingPrice = renderedVehicle["autopilot"][1];
      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentSettingName !== selectedOption) {
        currentVehiclePrice -= currentSettingPrice;
        currentVehiclePrice += selectedOptionPrice;
        newTeslaModels.vehicle_render["model3"][
          "cash_price"
        ] = currentVehiclePrice;
        newTeslaModels.vehicle_render["model3"]["autopilot"] = [
          selectedOption,
          selectedOptionPrice,
        ];
      }

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render["model3"][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
  }; // handled deep cpy!

  export default selectOffMenuAutopilot;
