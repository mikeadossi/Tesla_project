import React, { useState, useEffect, useRef } from "react";
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";
import VehicleConfigContainer from "../../components/VehicleData/VehicleConfigContainer/VehicleConfigContainer";
import InfoModal from "../InfoModal/InfoModal.js";
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
    console.log({ vehicleData });
    dispatch({
      type: VIEW_RENDERED_OPTIONS,
      payload: vehicleData,
    });
  }, [vehicleData]);

  const setSelectedVehicleName = (selectedVehicleName) => {
    setVehicleData((data) => {
      if (!selectedVehicleName) return data; // ensures vehicleData array has no starting empty value

      let newVehicleNames = data.filter(
        (modelName) => modelName !== selectedVehicleName
      ); // checks for and removes vehicle from array
      newVehicleNames = [selectedVehicleName, ...newVehicleNames]; // sets selected vehicle atop vehicleData array
      return newVehicleNames;
    });
  }

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
    if (!loadTeslaData && metaVehicleObj.length > 0 && payload) {
      console.log("call get modal with ", payload);
      getTeslaData({ ...payload });
      setLoadTeslaData(true);
      populateMenu();
    }
  }, [metaVehicleObj, usStateVehicleOrder, loadTeslaData]);

  const removeModel = (model) => {
    console.log("model to be removed: ", model);
    const stateData = vehicleData.filter(name => name !== model);
    
    const modelName = model
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");

    runReset(modelName, teslaModels); 

    setVehicleData([...stateData]);
  };

  const parseAllStringValues = (obj) => {
    const objKeys = Object.keys(obj);
    for (let i = 0; i < objKeys.length; i++) {
      let newValue;
      let oldValue = obj[objKeys[i]];

      if (
        (typeof oldValue === "string" && oldValue.charAt(0) === "{") ||
        oldValue === "null"
      ) {
        newValue = JSON.parse(oldValue);
        obj[objKeys[i]] = newValue;
      }
    }

    return obj;
  };

  const getLoanMonthlyPymt = (principal, annualInterestRate, numOfPymts) => {
    // principal * ( effectiveInterestRate / (1 - (1 + effectiveInterestRate)^-numOfPymts))
    const effectiveInterestRate = annualInterestRate / 100 / 12;
    const onePlusEIR = 1 + effectiveInterestRate;
    const x = Math.pow(onePlusEIR, -numOfPymts);
    const denominator = 1 - x;
    const y = effectiveInterestRate / denominator;
    return Math.round(principal * y);
  };

  const getTeslaData = async (statePymtObj) => {
    // this function converts DB data into useable state data for app: a 'details' object and a 'rendering' object.
    const metaVehicles = [...metaVehicleObj];
    const vehicleObj = {
      // vehicle_details should never be user modified, vehicle_render can be.
      vehicle_details: {},
      vehicle_render: {},
    };

    if (metaVehicles.length > 0) {
      for (let i = 0; i < metaVehicles.length; i++) {
        let model = metaVehicles[i].model;
        let parsedValue = { ...parseAllStringValues(metaVehicles[i]) };
        // parsedValue["default_optioned_vehicle"]["image_paint"] = "_white1"

        if (statePymtObj !== undefined) {
          let purchasePrice =
            parsedValue["default_optioned_vehicle"]["cash_price"];
          let paymentObject = populatePaymentObject(
            purchasePrice,
            statePymtObj
          );
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

  const populatePaymentObject = (configuredPrice, paymentObj) => {
    // handle deep copy on all (relevant) nested objects w/ spread operator
    let modelPaymentObj = {
      ...paymentObj,
      finance: {
        ...paymentObj["finance"],
      },
      lease: {
        ...paymentObj["lease"],
      },
      nonCashCreditsArr: [...paymentObj["nonCashCreditsArr"]],
    };

    const docFee = modelPaymentObj["docFee"];
    const adjustments = modelPaymentObj["adjustments"];
    const stateTotalFees = modelPaymentObj["stateTotalFees"]; // TODO: how do we get this #?
    const stateTaxRate = modelPaymentObj["taxRate"];
    const modelTax = (stateTaxRate / 100) * configuredPrice;
    const orderPymt = modelPaymentObj["orderPymt"];
    const orderFeeTax = (stateTaxRate / 100) * orderPymt;
    const stateDestinationFee = modelPaymentObj["stateDestinationFee"];
    const stateDocumentationFee = modelPaymentObj["stateDocumentationFee"];
    const tradeInEquity = modelPaymentObj["tradeInEquity"];

    // get non cash credit sum
    const nonCashCreditsArr = modelPaymentObj["nonCashCreditsArr"];
    let credits = 0;

    for (let i = 0; i < nonCashCreditsArr.length; i++) {
      credits += nonCashCreditsArr[i]["amt"];
    }

    modelPaymentObj["nonCashCredit"] = credits;

    // get cashDueAtDelivery
    let stateSalesTax =
      modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee;
    stateSalesTax = Math.floor(stateSalesTax * 100) / 100;
    let cashDueAtDelivery =
      configuredPrice + docFee + stateTotalFees + stateSalesTax;
    cashDueAtDelivery =
      cashDueAtDelivery - credits - orderPymt - tradeInEquity - adjustments;
    cashDueAtDelivery = Math.floor(cashDueAtDelivery);

    modelPaymentObj["modelTax"] = modelTax;
    modelPaymentObj["orderFeeTax"] = orderFeeTax;
    modelPaymentObj["stateSalesTax"] = stateSalesTax;
    modelPaymentObj["cashDueAtDelivery"] = cashDueAtDelivery;

    // get loan monthly payment
    const cashDownPymt = configuredPrice / 100;
    let financeDueAtDelivery = stateTotalFees + stateSalesTax + cashDownPymt;
    financeDueAtDelivery =
      financeDueAtDelivery - orderPymt - credits - tradeInEquity;
    financeDueAtDelivery = Math.floor(financeDueAtDelivery);
    let equity = 0;

    if (financeDueAtDelivery <= 0) {
      equity = financeDueAtDelivery; // this occurs if trade-in equity exceeds amt due
      financeDueAtDelivery = 0;
    }

    const amtFinanced = cashDueAtDelivery - financeDueAtDelivery - equity;
    const loanApr = modelPaymentObj["finance"]["loanApr"];
    const loanTerm = modelPaymentObj["finance"]["loanTerm"];

    modelPaymentObj["finance"]["monthlyPymt"] = getLoanMonthlyPymt(
      amtFinanced,
      loanApr,
      loanTerm
    );
    modelPaymentObj["finance"]["dueAtDelivery"] = financeDueAtDelivery;
    modelPaymentObj["finance"]["amtFinanced"] = amtFinanced;

    // get lease cash down payment
    modelPaymentObj["cashDownPymt"] = cashDownPymt;

    // get lease money factor
    let leaseIntRate = modelPaymentObj["lease"]["leaseInterestRate"];
    let leaseIntRatePercent = leaseIntRate / 100;
    const moneyFactor = leaseIntRatePercent / 24;
    modelPaymentObj["lease"]["moneyFactor"] = moneyFactor;

    // get lease monthly payment
    const leaseTerm = modelPaymentObj["lease"]["leaseTerm"]; // ex: 36
    const annualMiles = modelPaymentObj["lease"]["annualMiles"]; // ex: 10000 TODO: need to calculate this into price
    const acquisitionFee = modelPaymentObj["lease"]["acquisitionFee"]; // TODO: Does this change?
    const residualValue = cashDueAtDelivery * 0.64; // TODO: get correct residual value

    let netCapitalizedCost =
      configuredPrice + docFee + acquisitionFee + stateTotalFees;
    netCapitalizedCost =
      netCapitalizedCost - cashDownPymt - credits - orderPymt;
    const depreciationFee = (netCapitalizedCost - residualValue) / leaseTerm;
    const financeFee = (netCapitalizedCost + residualValue) * moneyFactor;
    const salesTax = (depreciationFee + financeFee) * stateTaxRate;
    const monthlyLeasePymt = depreciationFee + financeFee + salesTax;
    modelPaymentObj["lease"]["monthlyPymt"] = monthlyLeasePymt;

    // get lease due at delivery
    const upfrontSalesTax = modelPaymentObj["lease"]["upfrontTaxAmt"];
    let leaseDueAtDelivery =
      cashDownPymt +
      monthlyLeasePymt +
      acquisitionFee +
      upfrontSalesTax +
      stateTotalFees;
    leaseDueAtDelivery = leaseDueAtDelivery - orderPymt - credits;

    modelPaymentObj["lease"]["dueAtDelivery"] = leaseDueAtDelivery;
    modelPaymentObj["lease"]["residualValue"] = residualValue;
    modelPaymentObj["lease"]["annualMiles"] = annualMiles;

    return modelPaymentObj;
  }; // handled deep cpy!

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
    // TODO: get list of open vehicles.
    // TODO: save data inside open vehicles
    // TODO: close modal
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
      // console.log('Veh - ',newTeslaModels,'\n selectedOption - ',selectedOption)
      // console.log('A. vehicle details -- ',newTeslaModels["vehicle_details"]["model3"]["default_optioned_vehicle"]["autopilot"][1])
      // console.log('A. vehicle render -- ',newTeslaModels["vehicle_render"]["model3"]["autopilot"][1])

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
      // console.log('Veh - ',newTeslaModels,'\n trim - ',trim,'\n model - ',model)
      // console.log('A. vehicle details -- ',newTeslaModels["vehicle_details"][model]["default_optioned_vehicle"]["autopilot"][1])
      // console.log('A. vehicle render -- ',newTeslaModels["vehicle_render"][model]["autopilot"][1])

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
      // console.log('Veh - ',newTeslaModels,'\n trim - ',trim,'\n model - ',model)
      // console.log('A. vehicle details -- ',newTeslaModels["vehicle_details"][model]["default_optioned_vehicle"]["tow_hitch"])
      // console.log('A. vehicle render -- ',newTeslaModels["vehicle_render"][model]["tow_hitch"])

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
      // console.log('Veh - ',newTeslaModels,'\n trim - ',trim,'\n layoutSelected - ',layoutSelected)
      // console.log('A. vehicle details -- ',newTeslaModels["vehicle_details"][model]["default_optioned_vehicle"]["layout"][0])
      // console.log('A. vehicle render -- ',newTeslaModels["vehicle_render"][model]["layout"][0])

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
      // console.log('Veh - ',newTeslaModels,'\n batterySelected - ',batterySelected)
      // console.log('A. vehicle details -- ',newTeslaModels["vehicle_details"]["model3"]["default_optioned_vehicle"]["battery"][1])
      // console.log('A. vehicle render -- ',newTeslaModels["vehicle_render"][model]["battery"][1])

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
      // console.log('Veh - ',newTeslaModels,'\n trim - ',trim,'\n interiorSelected - ',interiorSelected)
      // console.log('A. vehicle details -- ',newTeslaModels["vehicle_details"]["model3"]["default_optioned_vehicle"]["interior"][1])
      // console.log('A. vehicle render -- ',newTeslaModels["vehicle_render"][model]["interior"][1])

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
      // console.log('Veh - ',newTeslaModels,'\n trim - ',trim,'\n wheelSelected - ',wheelSelected)
      // console.log('A. vehicle details -- ',newTeslaModels["vehicle_details"]["model3"]["default_optioned_vehicle"]["wheel"][1])
      // console.log('A. vehicle render -- ',newTeslaModels["vehicle_render"][model]["wheel"][1])

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

      let renderedVehicle = newTeslaModels["vehicle_render"][model];
      let pymtObj = renderedVehicle["payment_object"];
      const formValuesObj = { ...activeFormValues };

      if (formValuesObj["tradeInValue"] || formValuesObj["tradeInPayoff"]) {
        newTeslaModels.vehicle_render[model]["payment_object"][
          "tradeInEquity"
        ] = formValuesObj["tradeInValue"] - formValuesObj["tradeInPayoff"];
      }

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

      // details should remain unchanged, with render changing (also vehicles should remain unchanged)
      /*
      console.log('Veh - ',newTeslaModels)
      console.log('vehicle details -- ',newTeslaModels["vehicle_details"][model]["default_optioned_vehicle"]["payment_object"]["tradeInEquity"])
      console.log('vehicle render -- ',newTeslaModels["vehicle_render"][model]["payment_object"]["tradeInEquity"]) 
      */

      return newTeslaModels;
    });
  }; // handled deep cpy!

  return (
    <div className="app_Panel_container">
      <VehicleMenu
        setSelectedVehicleName={setSelectedVehicleName}
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
          removeModel={removeModel}
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
