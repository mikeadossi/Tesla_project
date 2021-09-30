import {
  setUserPymtEntry,
  populatePaymentObject,
  changeVehicleColor, 
  changeVehicleInterior,
  changeVehicleBattery, 
  toggleFSD,
  setFormInputs,
} from "../VehiclePanelMethods/moduleExports";

const runApplyAll = (
  spacedVehicleName,
  teslaModels,
  vehiclesRendered,
  vehicleName,
  setTeslaModels,
  activeFormVals,
  setActiveFormVals,
  setActiveFSDSetting,
  setActiveOffMenuAutopilot
) => {
  // function below applies vehicle attributes to all other vehicles (ramet) based on original (ortet)
  let vehicleList = [...vehiclesRendered];
  vehicleList.splice(vehicleList.indexOf(spacedVehicleName), 1);

  const paymentObj =
    teslaModels["vehicle_render"][vehicleName]["payment_object"];

  const submitData = (modelName) => {
    // function below updates state with user entries

    modelName = modelName
      .split(" ")
      .map((iv, i) => {
        if (i === 0) {
          return iv.toLowerCase();
        }
        return iv;
      })
      .join("");
    //ex: modelName = model3

    const formObj = {
      adjustments: paymentObj["adjustments"],
      annualMiles: paymentObj["lease"]["annualMiles"],
      cashDownPayment: paymentObj["cashDownPymt"],
      leaseInterestRate: paymentObj["lease"]["leaseInrestRate"] || 4.85,
      leaseTerm: paymentObj["lease"]["leaseTerm"] || "24",
      loanApr: paymentObj["finance"]["loanApr"],
      loanTerm: paymentObj["finance"]["loanTerm"] || "60",
      tradeInPayoff: paymentObj["tradeInPayoff"],
      tradeInValue: paymentObj["tradeInValue"],
    };

    setUserPymtEntry(formObj, modelName, teslaModels, setTeslaModels);

    setFormInputs(
      activeFormVals,
      setActiveFormVals,
      formObj.annualMiles,
      formObj.leaseTerm,
      formObj.loanTerm
    );

    let vehicleContent = {
      ...teslaModels,
      vehicle_render: {
        ...teslaModels["vehicle_render"],

        [vehicleName]: {
          ...teslaModels.vehicle_render[vehicleName],
          ["payment_object"]: {
            ...teslaModels.vehicle_render[vehicleName]["payment_object"],
          },
        },
      },
    };

    const configuredPrice = vehicleContent.vehicle_render[modelName].cash_price;
    const submittedCashDown = formObj["cashDownPayment"];
    const submittedLeaseTerm = formObj["leaseTerm"];
    const submittedLoanTerm = formObj["loanTerm"];
    const submittedAnnualMiles = formObj["annualMiles"];

    // function below runs all necessary lease, finance calculations
    vehicleContent.vehicle_render[
      modelName
    ].payment_object = populatePaymentObject(
      configuredPrice,
      paymentObj,
      submittedCashDown,
      submittedLeaseTerm,
      submittedLoanTerm,
      submittedAnnualMiles
    );

    setTeslaModels(vehicleContent);
  };

  submitData(spacedVehicleName);

  const preferredPaint = teslaModels["vehicle_render"][vehicleName]["paint"][0];
  const preferredTrim = teslaModels["vehicle_render"][vehicleName]["battery"][1];
  // const wheelSelected = teslaModels["vehicle_render"][vehicleName]["wheel"][0];
  const preferredInterior =
    teslaModels["vehicle_render"][vehicleName]["interior"][0];
  let preferredBattery =
    teslaModels["vehicle_render"][vehicleName]["battery"][1];
  // const layoutSelected = teslaModels["vehicle_render"][vehicleName]["layout"][0];
  const preferredAutopilotOption =
    teslaModels["vehicle_render"][vehicleName]["autopilot"][0];
  const universalTrims = ["long_range", "performance"];


  vehicleList.map((v) => {
    submitData(v);

    changeVehicleColor(
      preferredPaint,
      v,
      teslaModels,
      setTeslaModels,
      populatePaymentObject
    );

    // only the Model 3 has a standard/off menu trim option at this time
    // also only the Model S has a plaid option at this time
    if (
      preferredBattery === "off_menu" ||
      preferredBattery === "standard_battery"
    ) {
      changeVehicleBattery(
        "long_range",
        v,
        teslaModels,
        setTeslaModels,
        populatePaymentObject,
        setActiveFSDSetting,
        setActiveOffMenuAutopilot
      );
    } else if (preferredBattery === "plaid") {
      changeVehicleBattery(
        "performance",
        v,
        teslaModels,
        setTeslaModels,
        populatePaymentObject,
        setActiveFSDSetting,
        setActiveOffMenuAutopilot
      );
    } else { 
      changeVehicleBattery(
        preferredBattery,
        v,
        teslaModels,
        setTeslaModels,
        populatePaymentObject,
        setActiveFSDSetting,
        setActiveOffMenuAutopilot
      );
    }

    // the model3 and modelY do not have a Cream interior option
    if (preferredInterior === "Cream" && ( v === "Model S" || v === "Model X") ) {
      // this runs only on modelX or modelS
      changeVehicleInterior(
        preferredTrim,
        preferredInterior,
        v,
        teslaModels,
        setTeslaModels,
        populatePaymentObject
      );
    } else if (preferredInterior !== "Cream" && universalTrims.includes(preferredTrim)) {
      // this runs on all 4 vehicles, but ignores trims that are plaid, standard_range or off_menu since these are available on only one vehicle.
      changeVehicleInterior(
        preferredTrim,
        preferredInterior,
        v,
        teslaModels,
        setTeslaModels,
        populatePaymentObject
      );
    }

    // the model3 off menu vehicle is a special case and if it's our 'ortet' car we'll need the code below
    if (preferredTrim !== "off_menu" && preferredTrim !== "standard_battery" && preferredTrim !== "plaid") {
      toggleFSD(
        preferredTrim,
        v,
        preferredAutopilotOption,
        teslaModels,
        setTeslaModels,
        populatePaymentObject
      );
    } else if (preferredTrim === "plaid") {
      toggleFSD(
        "performance",
        v,
        preferredAutopilotOption,
        teslaModels,
        setTeslaModels,
        populatePaymentObject
      );
    } else if (
      preferredTrim === "off_menu" &&
      v === "Model 3" &&
      preferredAutopilotOption === "fsd_and_autopilot"
    ) {
      toggleFSD(
        "long_range",
        v,
        "fsd",
        teslaModels,
        setTeslaModels,
        populatePaymentObject
      );
    } else if (
      preferredTrim === "off_menu" &&
      v === "Model 3" &&
      preferredAutopilotOption === "autopilot_charge"
    ) {
      toggleFSD(
        "long_range",
        v,
        "autopilot",
        teslaModels,
        setTeslaModels,
        populatePaymentObject
      );
    } else if (
      preferredTrim === "off_menu" &&
      v === "Model 3" &&
      preferredAutopilotOption === "no_autopilot"
    ) {
      toggleFSD(
        "long_range",
        v,
        "autopilot",
        teslaModels,
        setTeslaModels,
        populatePaymentObject
      );
    }

  });
};

export default runApplyAll;
