const runApplyAll = (vehicleName, detailsAndRender, vehiclesRendered) => {
    // write function that applies vehicle data to all other vehicles
    console.log(
      "vehicleName: ",
      vehicleName,
      "\n object: ",
      detailsAndRender,
      "\n vehiclesRendered: ",
      vehiclesRendered
    );
    console.log(
      'detailsAndRender["vehicle_render"][model3]["image_vehicle"] - ',
      detailsAndRender["vehicle_render"]["model3"]["image_vehicle"]
    );

    let selectedModelRenderObj =
      detailsAndRender["vehicle_render"][vehicleName];

    let selectedModel = {
      ...selectedModelRenderObj,
    };
};

export default runApplyAll;