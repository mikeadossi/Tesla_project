const cloneDeep = require("lodash.clonedeep");

const runApplyAll = (
  spacedVehicleName,
  // detailsAndRender,
  vehiclesRendered,
  vehicleName,
  setTeslaModels
) => {
  // write function that applies vehicle data to all other vehicles
  console.log('vehiclesRendered -> ',vehiclesRendered)
  let vehicleList = [...vehiclesRendered];
  vehicleList.splice(vehicleList.indexOf(spacedVehicleName), 1);

  setTeslaModels((metaVehicles) => {
    // let newTeslaModels = {
    //   ...metaVehicles,
    //   vehicle_details: {
    //     ...metaVehicles["vehicle_details"],

    //     [vehicleName]: {
    //       ...metaVehicles.vehicle_details[vehicleName],
    //     }
    //   },
    //   vehicle_render: {
    //     ...metaVehicles["vehicle_render"],

    //     [vehicleName]: {
    //       ...metaVehicles.vehicle_render[vehicleName],

    //       ...metaVehicles.vehicle_render[vehicleName]["vehicle_image"],

    //       wheel: [
    //         ...metaVehicles.vehicle_render[vehicleName]["wheel"]
    //       ],
    //     },
    //   },
    // };

    let newTeslaModels = cloneDeep(metaVehicles);

    const render = newTeslaModels["vehicle_render"];
    const details = newTeslaModels["vehicle_details"];
    let selectedModelRenderObj = render[vehicleName];
    let selectedModelDetailObj = details[vehicleName];

    const masterCashPrice = selectedModelRenderObj["cash_price"];
    const masterPaintImg = selectedModelRenderObj["image_paint"]; // vehicle_render model3
    const masterPaint = selectedModelRenderObj["paint"];

    vehicleList.map((v) => {
      v = v
        .split(" ")
        .map((iv, i) => {
          if (i === 0) {
            return iv.toLowerCase();
          }
          return iv;
        })
        .join("");

      const alt = render[v];
      if (alt["image_paint"] !== masterPaintImg) {
        newTeslaModels["vehicle_render"][v]["image_paint"] = masterPaintImg;

        if (alt["paint"][1] !== "included") {
          newTeslaModels["vehicle_render"][v]["cash_price"] -= alt["paint"][1];
        }

        if (
          selectedModelDetailObj["paint_options"][masterPaint[1]] !== "included"
        ) {
          newTeslaModels["vehicle_render"][v]["cash_price"] += masterPaint[1];
        }

        // switch paint colors

        let imgArr = alt["vehicle_image"].split("_");
        console.log("imgArr - ", imgArr);
        let masterImgArr = selectedModelRenderObj["vehicle_image"].split("_");
        imgArr[1] = masterImgArr[1];
        newTeslaModels["vehicle_render"][v]["vehicle_image"] = imgArr.join("_");
        console.log(
          "new color - ",
          newTeslaModels["vehicle_render"][v]["vehicle_image"]
        );

        newTeslaModels["vehicle_render"][v]["paint"] = masterPaint;
      }
    });
    console.log("newTeslaModels -> ", newTeslaModels);
    return newTeslaModels;
  });
};

export default runApplyAll;
