import React, { useState, useEffect, useRef } from "react";
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";
import VehicleConfigContainer from "../../components/VehicleData/VehicleConfigContainer/VehicleConfigContainer";
import InfoModal from "../InfoModal/InfoModal.js";
import removeModel from "./VehiclePanelMethods/removeModel";
import setSelectedVehicleName from "./VehiclePanelMethods/setSelectedVehicleName";
import populatePaymentObject from "./VehiclePanelMethods/populatePaymentObject";
import parseAllStringValues from "./VehiclePanelMethods/parseAllStringValues";
import getTeslaData from "./VehiclePanelMethods/getTeslaData"; 
import { connect, useDispatch } from "react-redux";

import { getAllVehicles } from "../../config/actions/vehicleActions";
import { getAllStateData } from "../../config/actions/usStateActions";

import {
  TOGGLE_MOBILE_MENU,
  UPDATE_VEHICLE_RENDER_DATA,
  VIEW_RENDERED_OPTIONS,
  TOGGLE_RESET_WARNING,
  TOGGLE_APPLY_ALL_WARNING,
} from "../../config/actions/types";

import { updateRenderData } from "../../config/actions/vehicleActions";

const VehiclePanel = ({
  getAllVehicles,
  getAllStateData,
  metaVehicleObj,
  zipcode_data,
  usStatesData,
  modalVisibility,
  closeModal,
  saveVehicleRenderData,
  teslaModels,
  toggleResetWarning,
  toggleApplyAllWarning,
}) => {
  const dispatch = useDispatch();
  let [vehicleData, setVehicleData] = useState([]);
  const [menuOptions, setMenuOptions] = useState("");
  const [usStateVehicleOrder, setUsStateVehicleOrder] = useState("");
  const vehicleContainerRef = useRef();

  function setTeslaModels(value) {
    if (typeof value === "function") {
      value = value(teslaModels);
    }
    dispatch({
      type: UPDATE_VEHICLE_RENDER_DATA,
      payload: value,
    });
  }

  useEffect(() => {
    dispatch({
      type: VIEW_RENDERED_OPTIONS,
      payload: vehicleData,
    });
  }, [vehicleData]);

  useEffect(() => {
    if (zipcode_data.id) {
      getAllVehicles();
      getAllStateData(zipcode_data.state_abbr);
    }
  }, [zipcode_data]);

  useEffect(() => {
    if (usStatesData[0]) {
      setUsStateVehicleOrder(() => {
        return [
          usStatesData[0]["state_abbr"],
          zipcode_data["id"],
          JSON.parse(usStatesData[0]["vehicle_order"]),
          JSON.parse(usStatesData[0]["payment_object"]),
        ];
      });
    }
  }, [usStatesData]);

  const [loadTeslaData, setLoadTeslaData] = useState(false);

  useEffect(() => {
    const payload = usStateVehicleOrder && usStateVehicleOrder[3];
    console.log("payload:-- ", payload);
    if (!loadTeslaData && metaVehicleObj.length > 0 && payload) {
      getTeslaData(payload, metaVehicleObj, setTeslaModels);
      setLoadTeslaData(true);
      populateMenu();
    }
  }, [metaVehicleObj, usStateVehicleOrder, loadTeslaData]);


  const populateMenu = () => {
    let modelNames = [];
    for (var i = 0; i < metaVehicleObj.length; i++) {
      modelNames.push(metaVehicleObj[i]["default_optioned_vehicle"]["model"]);
    }
    setMenuOptions(modelNames);
  };

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

  const runReset = (vehicleName, detailsAndRender) => {
    console.log("detailsAndRender - ", detailsAndRender);
    let selectedModelDetailsObj =
      detailsAndRender["vehicle_details"][vehicleName];

    let selectedModel = {
      ...selectedModelDetailsObj,
      default_optioned_vehicle: {
        ...selectedModelDetailsObj["default_optioned_vehicle"],

        ["autopilot"]: [
          ...selectedModelDetailsObj["default_optioned_vehicle"]["autopilot"],
        ],
        ["battery"]: [
          ...selectedModelDetailsObj["default_optioned_vehicle"]["battery"],
        ],
        ["interior"]: [
          ...selectedModelDetailsObj["default_optioned_vehicle"]["interior"],
        ],
        ["layout"]: [
          ...selectedModelDetailsObj["default_optioned_vehicle"]["layout"],
        ],
        ["paint"]: [
          ...selectedModelDetailsObj["default_optioned_vehicle"]["paint"],
        ],
        ["payment_object"]: {
          ...selectedModelDetailsObj["default_optioned_vehicle"][
            "payment_object"
          ],
          ["finance"]: {
            ...selectedModelDetailsObj["default_optioned_vehicle"][
              "payment_object"
            ]["finance"],
          },
          ["lease"]: {
            ...selectedModelDetailsObj["default_optioned_vehicle"][
              "payment_object"
            ]["lease"],
          },
          ["nonCashCreditsArr"]: [
            ...selectedModelDetailsObj["default_optioned_vehicle"][
              "payment_object"
            ]["nonCashCreditsArr"],
          ],
        },
        ["wheel"]: [
          ...selectedModelDetailsObj["default_optioned_vehicle"]["wheel"],
        ],
      },
    };

    let newDetailsAndRender = {
      ...detailsAndRender,
      vehicle_render: {
        ...detailsAndRender.vehicle_render,
        [vehicleName]: selectedModel["default_optioned_vehicle"],
      },
    };

    dispatch(updateRenderData(newDetailsAndRender));

    // toggleResetWarning(vehicleName);
  };

  const selectOffMenuAutopilot = (selectedOption) => {
    // ex: selectedOption = "no_autopilot"

    setTeslaModels((metaVehicles) => {
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_render: {
          ...metaVehicles["vehicle_render"],

          ["model3"]: {
            ...metaVehicles.vehicle_render["model3"],
            ["autopilot"]: [
              ...metaVehicles.vehicle_render["model3"]["autopilot"],
            ],
          },
        },
      };
      const renderedVehicle = newTeslaModels.vehicle_render["model3"];
      let selectedOptionPrice =
        newTeslaModels.vehicle_details["model3"]["off_menu"]["autopilot"][
          selectedOption
        ]["price"];

      let currentSettingName = renderedVehicle["autopilot"][0];
      let currentSettingPrice = renderedVehicle["autopilot"][1];
      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentSettingName !== selectedOption) {
        currentVehiclePrice -= currentSettingPrice;
        currentVehiclePrice += selectedOptionPrice;
        newTeslaModels.vehicle_render["model3"][
          "cash_price"
        ] = currentVehiclePrice;
        newTeslaModels.vehicle_render["model3"]["autopilot"] = [
          selectedOption,
          selectedOptionPrice,
        ];
      }

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render["model3"][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
  }; // handled deep cpy!

  const toggleFSD = (trim, value) => {
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

    setTeslaModels((metaVehicles) => {
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_render: {
          ...metaVehicles["vehicle_render"],

          [model]: {
            ...metaVehicles.vehicle_render[model],
            ["autopilot"]: [...metaVehicles.vehicle_render[model]["autopilot"]],
          },
        },
      };

      const renderedVehicle = newTeslaModels.vehicle_render[model];
      const autopilotOptions =
        newTeslaModels.vehicle_details[model][trim]["autopilot"];
      const autopilotPrice = autopilotOptions["autopilot"]["price"]; // ex: "included"
      const fsdPrice = autopilotOptions["fsd"]["price"]; // ex: 10000
      let currentSettingName = renderedVehicle["autopilot"][0];
      let currentSettingPrice = renderedVehicle["autopilot"][1];
      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentSettingName === "autopilot") {
        currentVehiclePrice += fsdPrice;
        currentSettingName = "fsd";
        currentSettingPrice = fsdPrice;
      } else {
        currentVehiclePrice -= fsdPrice;
        currentSettingName = "autopilot";
        currentSettingPrice = autopilotPrice;
      }

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["autopilot"] = [
        currentSettingName,
        currentSettingPrice,
      ];

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
  }; // handled deep cpy!

  const addTowHitch = (trim, value) => {
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

    setTeslaModels((metaVehicles) => {
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_render: {
          ...metaVehicles["vehicle_render"],

          [model]: {
            ...metaVehicles.vehicle_render[model],
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

      return newTeslaModels;
    });
  }; // handled deep cpy!

  const changeVehicleLayout = (trim, layoutSelected, value) => {
    // ex: trim="long_range" layoutSelected="Five Seat Interior" value="modelX"
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
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_render: {
          ...metaVehicles["vehicle_render"],

          [model]: {
            ...metaVehicles.vehicle_render[model],
            ["layout"]: [...metaVehicles.vehicle_render[model]["layout"]],
            ["payment_object"]: {
              ...metaVehicles.vehicle_render[model]["payment_object"],
              ["finance"]: {
                ...metaVehicles.vehicle_render[model]["payment_object"][
                  "finance"
                ],
              },
              ["lease"]: {
                ...metaVehicles.vehicle_render[model]["payment_object"][
                  "lease"
                ],
              },
              ["nonCashCreditsArr"]: [
                ...metaVehicles.vehicle_render[model]["payment_object"][
                  "nonCashCreditsArr"
                ],
              ],
            },
          },
        },
      };

      let renderedVehicle = newTeslaModels.vehicle_render[model];
      let layoutOptionsObj =
        newTeslaModels.vehicle_details[model][trim]["layout"][layoutSelected]; // ex: { price: "included" }

      let newPrice = layoutOptionsObj["price"];
      let currentLayoutPrice = renderedVehicle["layout"][2];

      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentLayoutPrice !== "included") {
        currentVehiclePrice -= currentLayoutPrice;
      }

      if (newPrice !== "included") {
        currentVehiclePrice += newPrice;
      }

      let altName = layoutOptionsObj["altName"];

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["layout"] = [
        layoutSelected,
        altName,
        newPrice,
      ];

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
  }; // handled deep cpy!

  const changeVehicleBattery = (batterySelected, value) => {
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
              },
              ["wheel"]: {
                ...metaVehicles.vehicle_details[model][batterySelected][
                  "wheel"
                ],
                // ["18 inch Aero Wheels"]: {
                //   ...metaVehicles.vehicle_details[model][batterySelected]["wheel"]["18 inch Aero Wheels"],
                // },
                // ["19 inch Sport Wheels"]: {
                //   ...metaVehicles.vehicle_details[model][batterySelected]["wheel"]["19 inch Sport Wheels"],
                // },
                // ["20 inch Überturbine Wheels"]: {
                //   ...metaVehicles.vehicle_details[model][batterySelected]["wheel"]["20 inch Überturbine Wheels"],
                // },
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
      console.log("wheelName - ", wheelName);
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

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
  }; // handled deep cpy!

  const changeVehicleInterior = (trim, interiorSelected, value) => {
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
              ["interior"]: {
                ...metaVehicles.vehicle_details[model][trim]["interior"],
                [interiorSelected]: {
                  ...metaVehicles.vehicle_details[model][trim]["interior"][
                    interiorSelected
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
            ["interior"]: [...metaVehicles.vehicle_render[model]["interior"]],
            ["payment_object"]: {
              ...metaVehicles.vehicle_render[model]["payment_object"],
            },
          },
        },
      };

      let renderedVehicle = newTeslaModels.vehicle_render[model];
      let interiorOptionsObj =
        newTeslaModels.vehicle_details[model][trim]["interior"][
          interiorSelected
        ];

      let newPrice = interiorOptionsObj.price;
      let img = interiorOptionsObj.image;
      let currentInteriorPrice = renderedVehicle["interior"][2];

      let currentVehiclePrice = renderedVehicle["cash_price"];

      if (currentInteriorPrice !== "included") {
        currentVehiclePrice -= currentInteriorPrice;
      }

      if (newPrice !== "included") {
        currentVehiclePrice += newPrice;
      }

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["interior"] = [
        interiorSelected,
        img,
        newPrice,
      ];

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)

      return newTeslaModels;
    });
  }; // handled deep cpy!

  const changeVehicleWheel = (trim, wheelSelected, value) => {
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

  const changeVehicleColor = (color, value) => {
    const model = `${value}`
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    setTeslaModels(() => {
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
          },
        },
      };

      newTeslaModels.vehicle_render[model]["cash_price"] = currentVehiclePrice;
      newTeslaModels.vehicle_render[model]["paint"] = [color, newPrice];
      newTeslaModels.vehicle_render[model]["image_paint"] = img;

      const currentImage =
        newTeslaModels.vehicle_render[model]["vehicle_image"]; // ex: "model3_white_std_18"
      const currentPaint = currentImage.split("_")[1];
      const imgNoUnderscore = img.split("_")[1];
      const newImage = currentImage.replace(currentPaint, imgNoUnderscore);
      newTeslaModels.vehicle_render[model]["vehicle_image"] = newImage;

      let paymentObj = renderedVehicle["payment_object"];
      newTeslaModels.vehicle_render[model][
        "payment_object"
      ] = populatePaymentObject(currentVehiclePrice, paymentObj);

      return newTeslaModels;
    });
  }; // handled deep cpy!

  const setUserPymtEntry = (activeFormValues, value) => {
    const model = value;
    const formValuesObj = { ...activeFormValues };

    setTeslaModels((metaVehicles) => {
      // handle deep copy on all (relevant) nested objects w/ spread operator
      let newTeslaModels = {
        ...metaVehicles,
        vehicle_render: {
          ...metaVehicles["vehicle_render"],

          [model]: {
            ...metaVehicles.vehicle_render[model],
            ["payment_object"]: {
              ...metaVehicles.vehicle_render[model]["payment_object"],
              ["tradeInEquity"]: {
                ...metaVehicles.vehicle_render[model]["payment_object"][
                  "tradeInEquity"
                ],
              },
            },
          },
        },
      };

      let pymtObj = newTeslaModels["vehicle_render"][model]["payment_object"];

      if (formValuesObj["tradeInValue"] || formValuesObj["tradeInPayoff"]) {
        pymtObj["tradeInEquity"] =
          formValuesObj["tradeInValue"] - formValuesObj["tradeInPayoff"];
      }

      // loop below updates state payment_object with new user entries
      for (let i in formValuesObj) {
        if (pymtObj[i] !== undefined) {
          newTeslaModels.vehicle_render[model]["payment_object"][
            i
          ] = JSON.parse(formValuesObj[i]);
        } else if (pymtObj["lease"][i] !== undefined) {
          newTeslaModels.vehicle_render[model]["payment_object"]["lease"][
            i
          ] = JSON.parse(formValuesObj[i]);
        } else if (pymtObj["finance"][i]) {
          newTeslaModels.vehicle_render[model]["payment_object"]["finance"][
            i
          ] = JSON.parse(formValuesObj[i]);
        }
      }

      console.log(
        "adjustmentsss 1 ---> ",
        newTeslaModels.vehicle_render[model]["payment_object"]["adjustments"]
      );

      return newTeslaModels;
    });
  };

  return (
    <div className="app_Panel_container">
      <VehicleMenu
        setSelectedVehicleName={(selectedVehicleName) => {
          setSelectedVehicleName(selectedVehicleName, setVehicleData);
        }}
        menuOptions={menuOptions}
        vehicleData={vehicleData}
        vehicleContainerRef={vehicleContainerRef}
      />

      {modalVisibility.locationsModal || modalVisibility.chargingModal ? (
        <InfoModal closeModal={closeModal} modalVisibility={modalVisibility} />
      ) : (
        ""
      )}

      {vehicleData.map((ele) => (
        <VehicleConfigContainer
          removeModel={(model) => {
            removeModel(
              model,
              vehicleData,
              teslaModels,
              setVehicleData,
              runReset,
            );
          }}
          vehicleContent={teslaModels}
          selectedVehicle={ele}
          vehicleContainerRef={vehicleContainerRef}
          changeVehicleColor={changeVehicleColor}
          changeVehicleWheel={changeVehicleWheel}
          changeVehicleInterior={changeVehicleInterior}
          changeVehicleLayout={changeVehicleLayout}
          changeVehicleBattery={changeVehicleBattery}
          addTowHitch={addTowHitch}
          toggleFSD={toggleFSD}
          selectOffMenuAutopilot={selectOffMenuAutopilot}
          usStateVehicleOrder={usStateVehicleOrder}
          populatePaymentObject={populatePaymentObject}
          setUserPymtEntry={setUserPymtEntry}
          setTeslaModels={setTeslaModels}
          runReset={runReset}
          runApplyAll={runApplyAll}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.vehiclesReducer.error,
    metaVehicleObj: state.vehiclesReducer.vehicle,
    usStatesData: state.usStateReducer.usStatesData,
    zipcode_data: state.navReducer.zipcode_data,
    teslaModels: state.vehiclesReducer.vehicleRenderData,
  };
}

export default connect(mapStateToProps, {
  getAllVehicles,
  getAllStateData,
  toggl: () => (dispatch) => dispatch({ type: TOGGLE_MOBILE_MENU }),
  toggleResetWarning: (modelName) => (dispatch) =>
    dispatch({ type: TOGGLE_RESET_WARNING, payload: modelName }),
  toggleApplyAllWarning: () => (dispatch) =>
    dispatch({ type: TOGGLE_APPLY_ALL_WARNING }),
})(VehiclePanel);
