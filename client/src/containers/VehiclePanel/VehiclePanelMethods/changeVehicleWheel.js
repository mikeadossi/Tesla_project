const changeVehicleWheel = (
    trim, 
    wheelSelected, 
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
              ["wheel"]: {
                ...metaVehicles.vehicle_details[model][trim]["wheel"],
                [wheelSelected]: {
                  ...metaVehicles.vehicle_details[model][trim]["wheel"][
                    wheelSelected
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
            ["wheel"]: [...metaVehicles.vehicle_render[model]["wheel"]],
            ["payment_object"]: {
              ...metaVehicles.vehicle_render[model]["payment_object"],
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

      const currentImage =
        newTeslaModels.vehicle_render[model]["vehicle_image"]; // ex: "model3_white_std_18"
      const currentWheel = currentImage.split("_")[3]; // ex: "_19"
      const imgNoUnderscore = img.split("_")[1]; // ex: "19"
      const newImage = currentImage.replace(currentWheel, imgNoUnderscore); // ex: "model3_white_std_19"
      newTeslaModels.vehicle_render[model]["vehicle_image"] = newImage;

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
  }; // handled deep cpy!

  export default changeVehicleWheel;