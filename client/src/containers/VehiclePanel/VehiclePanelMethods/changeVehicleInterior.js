const changeVehicleInterior = (
  trim,
  interiorSelected,
  value,
  teslaModels,
  setTeslaModels,
  populatePaymentObject,
  runSync,
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

  // handle deep copy on all (relevant) nested objects w/ spread operator
  let newTeslaModels = {
    ...teslaModels,
    vehicle_details: {
      ...teslaModels["vehicle_details"],

      [model]: {
        ...teslaModels.vehicle_details[model],
        [trim]: {
          ...teslaModels.vehicle_details[model][trim],
          ["interior"]: {
            ...teslaModels.vehicle_details[model][trim]["interior"],
            [interiorSelected]: {
              ...teslaModels.vehicle_details[model][trim]["interior"][
                interiorSelected
              ],
            },
          },
        },
      },
    },
    vehicle_render: {
      ...teslaModels["vehicle_render"],

      [model]: {
        ...teslaModels.vehicle_render[model],
        ["interior"]: [...teslaModels.vehicle_render[model]["interior"]],
        ["payment_object"]: {
          ...teslaModels.vehicle_render[model]["payment_object"],
        },
      },
    },
  };

  let renderedVehicle = newTeslaModels.vehicle_render[model];
  let interiorOptionsObj =
    newTeslaModels.vehicle_details[model][trim]["interior"][interiorSelected];

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

  if(!runSync){
    setTeslaModels(newTeslaModels)
  } else {
    return newTeslaModels;
  };
}; // handled deep cpy!

export default changeVehicleInterior;
