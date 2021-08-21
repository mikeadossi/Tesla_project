const changeVehicleInterior = (
    trim, 
    interiorSelected, 
    value, 
    setTeslaModels, 
    populatePaymentObject,
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

    setTeslaModels((metaVehicles) => {
      // handle deep copy on all (relevant) nested objects w/ spread operator
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_details: {
          ...metaVehicles["vehicle_details"],

          [model]: {
            ...metaVehicles.vehicle_details[model],
            [trim]: {
              ...metaVehicles.vehicle_details[model][trim],
              ["interior"]: {
                ...metaVehicles.vehicle_details[model][trim]["interior"],
                [interiorSelected]: {
                  ...metaVehicles.vehicle_details[model][trim]["interior"][
                    interiorSelected
                  ],
                },
              },
            },
          },
        },
        vehicle_render: {
          ...metaVehicles["vehicle_render"],

          [model]: {
            ...metaVehicles.vehicle_render[model],
            ["interior"]: [...metaVehicles.vehicle_render[model]["interior"]],
            ["payment_object"]: {
              ...metaVehicles.vehicle_render[model]["payment_object"],
            },
          },
        },
      };

      let renderedVehicle = newTeslaModels.vehicle_render[model];
      let interiorOptionsObj =
        newTeslaModels.vehicle_details[model][trim]["interior"][
          interiorSelected
        ];

      let newPrice = interiorOptionsObj.price;
      let img = interiorOptionsObj.image;
      let currentInteriorPrice = renderedVehicle["interior"][2];

      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentInteriorPrice !== "included") {
        currentVehiclePrice -= currentInteriorPrice;
      }

      if (newPrice !== "included") {
        currentVehiclePrice += newPrice;
      }

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["interior"] = [
        interiorSelected,
        img,
        newPrice,
      ];

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
}; // handled deep cpy!

export default changeVehicleInterior;