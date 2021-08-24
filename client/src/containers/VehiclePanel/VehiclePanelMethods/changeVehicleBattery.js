const changeVehicleBattery = (batterySelected, value, setTeslaModels, populatePaymentObject) => {
    const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");
    
      console.log({batterySelected})

    setTeslaModels((metaVehicles) => {
      // handle deep copy on all (relevant) nested objects w/ spread operator
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_details: {
          ...metaVehicles["vehicle_details"],

          [model]: {
            ...metaVehicles.vehicle_details[model],
            [batterySelected]: {
              ...metaVehicles.vehicle_details[model][batterySelected],
              ["autopilot"]: {
                ...metaVehicles.vehicle_details[model][batterySelected][
                  "autopilot"
                ],
                ["autopilot"]: {
                  ...metaVehicles.vehicle_details[model][batterySelected][
                    "interior"
                  ]["autopilot"],
                },
                ["fsd"]: {
                  ...metaVehicles.vehicle_details[model][batterySelected][
                    "interior"
                  ]["fsd"],
                },
              },
              ["interior"]: {
                ...metaVehicles.vehicle_details[model][batterySelected][
                  "interior"
                ],
                ["All Black"]: {
                  ...metaVehicles.vehicle_details[model][batterySelected][
                    "interior"
                  ]["All Black"],
                },
                ["Black and White"]: {
                  ...metaVehicles.vehicle_details[model][batterySelected][
                    "interior"
                  ]["Black and White"],
                },
              },
              ["layout"]: {
                ...metaVehicles.vehicle_details[model][batterySelected][
                  "layout"
                ],
                ["Five Seat Interior"]: {
                  ...metaVehicles.vehicle_details[model][batterySelected][
                    "layout"
                  ]["Five Seat Interior"],
                },
              },
              ["specs"]: {
                ...metaVehicles.vehicle_details[model][batterySelected][
                  "specs"
                ],
                ["detailed_specs"]: {
                  ...metaVehicles.vehicle_details[model][batterySelected][
                    "specs"
                  ]["detailed_specs"],
                },
              },
              ["wheel"]: {
                ...metaVehicles.vehicle_details[model][batterySelected][
                  "wheel"
                ],
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

      // we want to get and change the battery, and all other related render options
      let renderedVehicle = newTeslaModels.vehicle_render[model];
      let batteryOptionsObj =
        newTeslaModels.vehicle_details[model][batterySelected];
      const wheelObject = batteryOptionsObj["wheel"];
      const interiorObject = batteryOptionsObj["interior"];
      let img = batteryOptionsObj["image_trim"]; // ex: "_std"

      let newPrice = batteryOptionsObj.purchase_price;

      let currentBatteryPrice = renderedVehicle["battery"][2];
      let batteryName = batteryOptionsObj["specs"]["Battery"];
      let detailed_specs = batteryOptionsObj["specs"]["detailed_specs"];

      let currentVehiclePrice = renderedVehicle["cash_price"];
      currentVehiclePrice -= currentBatteryPrice;
      currentVehiclePrice += newPrice;

      const currentWheelSelected = renderedVehicle["wheel"][0]; // ex: "18 inch Aero Wheels"
      const currentWheelPrice = renderedVehicle["wheel"][1];
      const wheelKeysArr = Object.keys(wheelObject);
      const newBatteryStandardWheelSize =
        wheelObject[wheelKeysArr[0]]["image_wheel"]; // ex: "_18"
      const newBatteryStandardWheelName = wheelKeysArr[0]; // ex: "18 inch Aero Wheels"
      const newBatteryStandardWheelPrice =
        wheelObject[wheelKeysArr[0]]["price"]; // ex: "included"

      // If previously selected wheel isn't optional with new battery trim give new wheel
      if (!wheelKeysArr.includes(currentWheelSelected)) {
        const newWheels = [
          newBatteryStandardWheelName,
          newBatteryStandardWheelPrice,
        ]; // ex: ["18 inch Aero Wheels","included"]
        newTeslaModels.vehicle_render[model]["wheel"] = newWheels;
        newTeslaModels.vehicle_render[model][
          "image_wheels"
        ] = newBatteryStandardWheelSize;

        if (currentWheelPrice !== "included") {
          currentVehiclePrice -= currentWheelPrice;
        }
      }

      // set new vehicle_image in state
      let vehicleImage = renderedVehicle["vehicle_image"]; // ex: "model3_white_std_18" newWheelSize
      let wheelName = renderedVehicle["wheel"][0];
      
      const newWheelSize = batteryOptionsObj["wheel"][wheelName]["image_wheel"];
      vehicleImage = vehicleImage.split("_");
      vehicleImage[2] = img.split("_")[1]; // ex: "perf"
      if (model === "modelS" && vehicleImage[2] == "plaid") {
        vehicleImage[2] = "lr";
      }
      vehicleImage[3] = newWheelSize.split("_")[1];
      vehicleImage = vehicleImage.join("_"); // ex: "model3_white_perf_20"

      // Handle interior state change
      const currentInteriorName = renderedVehicle["interior"][0]; // ex: "All Black"
      const currentInteriorImage = renderedVehicle["interior"][1]; // ex: "black_interior"
      const newBatteryImage = interiorObject[currentInteriorName]["image"]; // ex: "white_interior"

      if (newBatteryImage !== currentInteriorImage) {
        newTeslaModels.vehicle_render[model]["interior"][1] = newBatteryImage;
      }

      // Handle off menu Model 3 autopilot selection
      const autopilotSetting = renderedVehicle["autopilot"][0];
      const modelObject = newTeslaModels.vehicle_details[model];
      const autopilotChargePrice =
        newTeslaModels.vehicle_details["model3"]["off_menu"]["autopilot"][
          "autopilot_charge"
        ]["price"];

      if (batterySelected === "off_menu" && autopilotSetting === "autopilot") {
        const noAutopilotPrice =
          batteryOptionsObj["autopilot"]["no_autopilot"]["price"];
        newTeslaModels.vehicle_render[model]["autopilot"] = [
          "no_autopilot",
          noAutopilotPrice,
        ];
      } else if (batterySelected === "off_menu" && autopilotSetting === "fsd") {
        const fsdAndAutopilotPrice =
          batteryOptionsObj["autopilot"]["fsd_and_autopilot"]["price"]; // ex: 13000
        newTeslaModels.vehicle_render[model]["autopilot"] = [
          "fsd_and_autopilot",
          fsdAndAutopilotPrice,
        ];
      } else if (
        batterySelected !== "off_menu" &&
        autopilotSetting === "autopilot_charge"
      ) {
        currentVehiclePrice -= autopilotChargePrice;
        newTeslaModels.vehicle_render[model]["autopilot"] = [
          "autopilot",
          "included",
        ];
      } else if (
        batterySelected !== "off_menu" &&
        autopilotSetting === "fsd_and_autopilot"
      ) {
        currentVehiclePrice -= autopilotChargePrice;
        const fsdPrice = modelObject["off_menu"]["autopilot"]["fsd"]["price"];
        newTeslaModels.vehicle_render[model]["fsd"] = ["fsd", fsdPrice];
      } else if (batterySelected !== "off_menu" && autopilotSetting !== "fsd") {
        newTeslaModels.vehicle_render[model]["autopilot"] = [
          "autopilot",
          "included",
        ];
      }

      newTeslaModels.vehicle_render[model]["image_wheels"] =
        wheelObject["image_wheel"]; // ex: "_18"
      newTeslaModels.vehicle_render[model]["zero_to_sixty_seconds"] =
        batteryOptionsObj["zero_to_sixty"];
      newTeslaModels.vehicle_render[model]["mph"] =
        batteryOptionsObj["topspeed_mph"];
      newTeslaModels.vehicle_render[model]["miles_range"] =
        batteryOptionsObj["miles_range"];
      newTeslaModels.vehicle_render[model]["vehicle_image"] = vehicleImage;
      newTeslaModels.vehicle_render[model]["image_trim"] = img;
      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["battery"] = [
        batteryName,
        batterySelected,
        newPrice,
      ]; 
      newTeslaModels.vehicle_render[model]["detailed_specs"] = detailed_specs;

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
  }; // handled deep cpy!

  export default changeVehicleBattery;