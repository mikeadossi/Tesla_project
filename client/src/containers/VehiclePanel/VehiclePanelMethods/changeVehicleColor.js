const changeVehicleColor = (
  color,
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

  let renderedVehicle = { ...teslaModels.vehicle_render[model] };
  // Notice (above): we omitted the spread operation on certain renderedVehicle nested objects, but those objects aren't used. See a proper deep copy with var newTeslaModels below.
  let detailsObj = { ...teslaModels.vehicle_details[model] };
  let colorObj = { ...detailsObj["paint_options"][color] }; // color could be "Pearl White" for example.

  let img = colorObj.image_paint; // our new image to be stored in renderObj
  let newPrice = colorObj.price; // our new price to be stored in renderObj
  let currentPaintPrice = renderedVehicle["paint"][1];

  let currentVehiclePrice = renderedVehicle["cash_price"];

  if (currentPaintPrice !== "included") {
    currentVehiclePrice -= currentPaintPrice;
  }

  if (newPrice !== "included") {
    currentVehiclePrice += newPrice;
  }

  // handle deep copy on all (relevant) nested objects w/ spread operator

  let newTeslaModels = {
    ...teslaModels,
    vehicle_render: {
      ...teslaModels["vehicle_render"],

      [model]: {
        ...teslaModels.vehicle_render[model],
        ["payment_object"]: {
          ...teslaModels.vehicle_render[model]["payment_object"],
        },
      },
    },
  };

  newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
  newTeslaModels.vehicle_render[model]["paint"] = [color, newPrice];
  newTeslaModels.vehicle_render[model]["image_paint"] = img;

  const currentImage = newTeslaModels.vehicle_render[model]["vehicle_image"]; // ex: "model3_white_std_18"
  const currentPaint = currentImage.split("_")[1];
  const imgNoUnderscore = img.split("_")[1];
  const newImage = currentImage.replace(currentPaint, imgNoUnderscore);
  newTeslaModels.vehicle_render[model]["vehicle_image"] = newImage;

  let paymentObj = renderedVehicle["payment_object"];
  newTeslaModels.vehicle_render[model][
    "payment_object"
  ] = populatePaymentObject(currentVehiclePrice, paymentObj);

  setTeslaModels(newTeslaModels);
}; // handled deep cpy!

export default changeVehicleColor;
