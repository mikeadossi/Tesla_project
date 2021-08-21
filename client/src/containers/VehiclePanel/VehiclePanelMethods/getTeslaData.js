import parseAllStringValues from "./parseAllStringValues";
import populatePaymentObject from "./populatePaymentObject";

const getTeslaData = async (statePymtObj, metaVehicleObj, setTeslaModels) => {

  // this function converts DB data into useable state data for app: a 'details' object and a 'rendering' object.
  const metaVehicles = [...metaVehicleObj]; // [...metaVehicleObj] is not iterable?
  const vehicleObj = {
    // vehicle_details should never be user modified, vehicle_render can be.
    vehicle_details: {},
    vehicle_render: {},
  };

  if (metaVehicles.length > 0) {
    for (let i = 0; i < metaVehicles.length; i++) {
      let model = metaVehicles[i].model;
      let parsedValue = parseAllStringValues(metaVehicles[i]);
      // parsedValue["default_optioned_vehicle"]["image_paint"] = "_white1"

      if (statePymtObj !== undefined) {
        let purchasePrice =
          parsedValue["default_optioned_vehicle"]["cash_price"];

        let paymentObject = populatePaymentObject(purchasePrice, statePymtObj);

        parsedValue["default_optioned_vehicle"]["payment_object"] = {
          ...paymentObject,
        };
      }

      vehicleObj.vehicle_details[model] = parsedValue;
      vehicleObj.vehicle_render[model] = parsedValue.default_optioned_vehicle;
    }
  }

  setTeslaModels(vehicleObj);
};

export default getTeslaData;
