const addTowHitch = (
  trim,
  value,
  teslaModels,
  setTeslaModels,
  populatePaymentObject
) => {
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

  let newTeslaModels = {
    ...teslaModels,
    vehicle_render: {
      ...teslaModels["vehicle_render"],

      [model]: {
        ...teslaModels.vehicle_render[model],
      },
    },
  };

  const renderedVehicle = newTeslaModels.vehicle_render[model];
  const towHitchPrice =
    newTeslaModels.vehicle_details[model][trim]["tow_hitch"]["price"]; // ex: 1000
  let tow_hitch = renderedVehicle["tow_hitch"];
  let currentVehiclePrice = renderedVehicle["cash_price"];

  if (tow_hitch !== null && tow_hitch === "optional") {
    currentVehiclePrice += towHitchPrice;
    tow_hitch = towHitchPrice;
  } else if (tow_hitch !== null && tow_hitch === towHitchPrice) {
    currentVehiclePrice -= towHitchPrice;
    tow_hitch = "optional";
  }

  newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
  newTeslaModels.vehicle_render[model]["tow_hitch"] = tow_hitch;

  let paymentObj = renderedVehicle["payment_object"];
  newTeslaModels.vehicle_render[model][
    "payment_object"
  ] = populatePaymentObject(currentVehiclePrice, paymentObj);

  // details should remain unchanged, with render changing (also vehicles should remain unchanged)

  setTeslaModels(newTeslaModels);
}; // handled deep cpy!

export default addTowHitch;
