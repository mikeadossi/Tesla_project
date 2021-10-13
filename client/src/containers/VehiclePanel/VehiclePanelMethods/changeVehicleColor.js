import { updateRenderData } from "../../../config/actions/vehicleActions";
const _ = require('lodash'); 

const changeVehicleColor = async (
  color,
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

  let renderedVehicle = { ...teslaModels.vehicle_render[model] };
  // let renderedVehicle = _.cloneDeep(teslaModels["vehicle_render"][model]);

  let detailsObj = { ...teslaModels.vehicle_details[model] };
  let colorObj = { ...detailsObj["paint_options"][color] }; // color could be "Pearl White" for exampl
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
  let render = await _.cloneDeep(teslaModels["vehicle_render"][model]);
  // let newTeslaModels = { ...teslaModels }; 
  render["cash_price"] = currentVehiclePrice;
  render["paint"] = [color, newPrice]; 
  render["image_paint"] = img; 
  

  const currentImage = render["vehicle_image"]; // ex: "model3_white_std_18"
  const currentPaint = currentImage.split("_")[1];
  const imgNoUnderscore = img.split("_")[1];
  
  let newImage = currentImage.replace(currentPaint, imgNoUnderscore); 
  render.vehicle_image = newImage; 
  let paymentObj = renderedVehicle["payment_object"];
  
  render[
    "payment_object"
  ] = await populatePaymentObject(currentVehiclePrice, paymentObj);

  teslaModels["vehicle_render"][model] = render;

  
  if(runSync){ 
    return teslaModels;
  };
  
  await setTeslaModels(teslaModels);

}; // handled deep cpy!

export default changeVehicleColor;