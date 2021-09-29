const changeVehicleWheel = (
  trim,
  wheelSelected,
  value,
  teslaModels,
  setTeslaModels,
  populatePaymentObject
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
          ["wheel"]: {
            ...teslaModels.vehicle_details[model][trim]["wheel"],
            [wheelSelected]: {
              ...teslaModels.vehicle_details[model][trim]["wheel"][
                wheelSelected
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
        ["wheel"]: [...teslaModels.vehicle_render[model]["wheel"]],
        ["payment_object"]: {
          ...teslaModels.vehicle_render[model]["payment_object"],
        },
      },
    },
  };

  let renderedVehicle = newTeslaModels.vehicle_render[model];
  let wheelObj =
    newTeslaModels.vehicle_details[model][trim]["wheel"][wheelSelected];

  let img = wheelObj.image_wheel; // store this in renderObj
  let newPrice = wheelObj.price; // store this in renderObj
  let currentWheelPrice = renderedVehicle["wheel"][1];

  let currentVehiclePrice = renderedVehicle["cash_price"];

  if (currentWheelPrice !== "included") {
    currentVehiclePrice -= currentWheelPrice;
  }

  if (newPrice !== "included") {
    currentVehiclePrice += newPrice;
  }

  newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
  newTeslaModels.vehicle_render[model]["wheel"] = [wheelSelected, newPrice];
  newTeslaModels.vehicle_render[model]["image_wheels"] = img;

  const currentImage = newTeslaModels.vehicle_render[model]["vehicle_image"]; // ex: "model3_white_std_18"
  const currentWheel = currentImage.split("_")[3]; // ex: "_19"
  const imgNoUnderscore = img.split("_")[1]; // ex: "19"
  const newImage = currentImage.replace(currentWheel, imgNoUnderscore); // ex: "model3_white_std_19"
  newTeslaModels.vehicle_render[model]["vehicle_image"] = newImage;

  let paymentObj = renderedVehicle["payment_object"];
  newTeslaModels.vehicle_render[model][
    "payment_object"
  ] = populatePaymentObject(currentVehiclePrice, paymentObj);

  // details should remain unchanged, with render changing (also vehicles should remain unchanged)

  setTeslaModels(newTeslaModels);
}; // handled deep cpy!

export default changeVehicleWheel;
