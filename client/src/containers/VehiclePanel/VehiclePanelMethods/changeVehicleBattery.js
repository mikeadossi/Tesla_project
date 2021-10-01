const changeVehicleBattery = (
  batterySelected,
  value,
  teslaModels,
  setTeslaModels,
  populatePaymentObject,
  activeFSDSetting,
  setActiveFSDSetting,
  setActiveOffMenuAutopilot,
  runSync
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
        [batterySelected]: {
          ...teslaModels.vehicle_details[model][batterySelected],
          ["autopilot"]: {
            ...teslaModels.vehicle_details[model][batterySelected]["autopilot"],
            ["autopilot"]: {
              ...teslaModels.vehicle_details[model][batterySelected][
                "interior"
              ]["autopilot"],
            },
            ["fsd"]: {
              ...teslaModels.vehicle_details[model][batterySelected][
                "interior"
              ]["fsd"],
            },
          },
          ["interior"]: {
            ...teslaModels.vehicle_details[model][batterySelected]["interior"],
            ["All Black"]: {
              ...teslaModels.vehicle_details[model][batterySelected][
                "interior"
              ]["All Black"],
            },
            ["Black and White"]: {
              ...teslaModels.vehicle_details[model][batterySelected][
                "interior"
              ]["Black and White"],
            },
          },
          ["layout"]: {
            ...teslaModels.vehicle_details[model][batterySelected]["layout"],
            ["Five Seat Interior"]: {
              ...teslaModels.vehicle_details[model][batterySelected]["layout"][
                "Five Seat Interior"
              ],
            },
          },
          ["specs"]: {
            ...teslaModels.vehicle_details[model][batterySelected]["specs"],
            ["detailed_specs"]: {
              ...teslaModels.vehicle_details[model][batterySelected]["specs"][
                "detailed_specs"
              ],
            },
          },
          ["wheel"]: {
            ...teslaModels.vehicle_details[model][batterySelected]["wheel"],
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
  const newBatteryStandardWheelPrice = wheelObject[wheelKeysArr[0]]["price"]; // ex: "included"

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
  if (model === "modelS" && vehicleImage[2] === "plaid") {
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

  // Below we handle off menu and autopilot/FSD Model 3 transitions
  const activeSettingName = renderedVehicle["autopilot"][0]; //ex: no_autopilot, fsd, etc
  const autopilotChargePrice = 3000; // hardcoded for simplicity
  const fsdPrice = 10000; // hardcoded for simplicity
  const fsdAndAutopilotPrice = 13000; // hardcoded for simplicity

  if (activeSettingName === "autopilot" && batterySelected === "off_menu") {
    const noAutopilotPrice =
      batteryOptionsObj["autopilot"]["no_autopilot"]["price"];
    newTeslaModels.vehicle_render[model]["autopilot"] = [
      "no_autopilot",
      noAutopilotPrice,
    ];
    setActiveOffMenuAutopilot("no_autopilot");
  } else if (activeSettingName === "fsd" && batterySelected === "off_menu") {
    currentVehiclePrice -= fsdPrice;
    currentVehiclePrice += fsdAndAutopilotPrice;
    newTeslaModels.vehicle_render[model]["autopilot"] = [
      "fsd_and_autopilot",
      fsdAndAutopilotPrice,
    ];
    setActiveOffMenuAutopilot("fsd_and_autopilot");
  } else if (
    activeSettingName === "autopilot_charge" &&
    batterySelected !== "off_menu"
  ) {
    currentVehiclePrice -= autopilotChargePrice;
    newTeslaModels.vehicle_render[model]["autopilot"] = [
      "autopilot",
      "included",
    ];
    // setActiveFSDSetting.value("autopilot");
    activeFSDSetting.value = "autopilot";
    setActiveFSDSetting(activeFSDSetting);
  } else if (
    activeSettingName === "fsd_and_autopilot" &&
    batterySelected !== "off_menu"
  ) {
    const fsdAndAutopilotPrice =
      batteryOptionsObj["autopilot"]["fsd_and_autopilot"]["price"];
    currentVehiclePrice -= fsdAndAutopilotPrice;
    currentVehiclePrice += fsdPrice;
    newTeslaModels.vehicle_render[model]["autopilot"] = ["fsd", fsdPrice];
    // setActiveFSDSetting.value("fsd");
    activeFSDSetting.value = "fsd";
    setActiveFSDSetting(activeFSDSetting);
  } else if (
    activeSettingName === "no_autopilot" &&
    batterySelected !== "off_menu"
  ) {
    newTeslaModels.vehicle_render[model]["autopilot"] = [
      "autopilot",
      "included",
    ];
    // setActiveFSDSetting.value("autopilot");
    activeFSDSetting.value = "autopilot";
    setActiveFSDSetting(activeFSDSetting);
  } else if (activeSettingName !== "fsd" && batterySelected !== "off_menu") {
    newTeslaModels.vehicle_render[model]["autopilot"] = [
      "autopilot",
      "included",
    ];
    // setActiveFSDSetting.value("autopilot");
    activeFSDSetting.value = "autopilot";
    setActiveFSDSetting(activeFSDSetting);
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

  if (!runSync) {
    setTeslaModels(newTeslaModels);
  } else {
    return newTeslaModels;
  }
}; // handled deep cpy!

export default changeVehicleBattery;
