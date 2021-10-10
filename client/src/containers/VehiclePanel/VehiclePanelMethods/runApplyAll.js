import {
  setUserPymtEntry,
  populatePaymentObject,
  changeVehicleColor, 
  changeVehicleInterior,
  changeVehicleBattery,
  setFormInputs,
  duplicateFSDSetting,
} from "../VehiclePanelMethods/moduleExports";

const runApplyAll = (
  spacedVehicleName,
  teslaModels,
  vehiclesRendered,
  vehicleName,
  setTeslaModels,
  activeFormVals,
  activeFSDSetting,
  setActiveFormVals,
  setActiveFSDSetting,
  setActiveOffMenuAutopilot, 
) => {
  console.log('runApplyAll called...')
  // function below applies vehicle attributes to all other vehicles (ramet) based on original (ortet)
  let vehicleList = [...vehiclesRendered];
  vehicleList.splice(vehicleList.indexOf(spacedVehicleName), 1);

  const paymentObj =
    teslaModels["vehicle_render"][vehicleName]["payment_object"];

  const submitData = (modelName, teslaModels, runSync) => {
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
    );

    if(!runSync){
      setTeslaModels(vehicleContent)
    } else {
      console.log('creating a promise...')
      const myPromise = new Promise((resolve, reject) => {
        return vehicleContent;
      });
      return myPromise;
    };
  };

  submitData(spacedVehicleName, teslaModels, false);

  const preferredPaint = teslaModels["vehicle_render"][vehicleName]["paint"][0];
  const preferredTrim = teslaModels["vehicle_render"][vehicleName]["battery"][1]; 
  const preferredInterior =
    teslaModels["vehicle_render"][vehicleName]["interior"][0];
  let preferredBattery =
    teslaModels["vehicle_render"][vehicleName]["battery"][1]; 
  const preferredAutopilotOption =
    teslaModels["vehicle_render"][vehicleName]["autopilot"][0];
  const universalTrims = ["long_range", "performance"];

  let result = teslaModels;
  let result2;
  let result3;
  let result4; 
  let result5;

  vehicleList.map((v) => {
    // if(result5 !== undefined){
    //   result = result5;
    // }

    // result = submitData(v, result, true);
    console.log('getting our promise...?')
    submitData(v, result, true).then((res) => {console.log('rslt-',res)})

    // result2 = changeVehicleColor(
    //   preferredPaint,
    //   v,
    //   result, //teslaModels
    //   setTeslaModels,
    //   populatePaymentObject,
    //   true
    // );

    // // only the Model 3 has a standard/off menu trim option at this time
    // // also only the Model S has a plaid option at this time
    // if (
    //   preferredBattery === "off_menu" ||
    //   preferredBattery === "standard_battery"
    // ) {
    //   result3 = changeVehicleBattery(
    //     "long_range",
    //     v,
    //     result2,
    //     setTeslaModels,
    //     populatePaymentObject,
    //     activeFSDSetting,
    //     setActiveFSDSetting,
    //     setActiveOffMenuAutopilot,
    //     true
    //   );
    // } else if (preferredBattery === "plaid") {
    //   result3 = changeVehicleBattery(
    //     "performance",
    //     v,
    //     result2,
    //     setTeslaModels,
    //     populatePaymentObject,
    //     activeFSDSetting,
    //     setActiveFSDSetting,
    //     setActiveOffMenuAutopilot,
    //     true
    //   );
    // } else { 
    //   result3 = changeVehicleBattery(
    //     preferredBattery,
    //     v,
    //     result2,
    //     setTeslaModels,
    //     populatePaymentObject,
    //     activeFSDSetting,
    //     setActiveFSDSetting,
    //     setActiveOffMenuAutopilot,
    //     true
    //   );
    // }


    // // the model3 and modelY do not have a Cream interior option
    // if (preferredInterior === "Cream" && ( v === "Model S" || v === "Model X") ) {
    //   // this runs only on modelX or modelS
    //   result4 = changeVehicleInterior(
    //     preferredTrim,
    //     preferredInterior,
    //     v,
    //     result3,
    //     setTeslaModels,
    //     populatePaymentObject,
    //     true
    //   );
    // } else if (preferredInterior !== "Cream" && universalTrims.includes(preferredTrim)) {
    //   // this runs on all 4 vehicles, but ignores trims that are plaid, standard_range or off_menu since these are available on only one vehicle.
    //   result4 = changeVehicleInterior(
    //     preferredTrim,
    //     preferredInterior,
    //     v,
    //     result3,
    //     setTeslaModels,
    //     populatePaymentObject,
    //     true
    //   );
    // }

    // // the model3 off menu vehicle is a special case and if it's our 'ortet' car we'll need the code below
    // if (preferredTrim !== "off_menu" && preferredTrim !== "standard_battery" && preferredTrim !== "plaid") {
    //   result5 = duplicateFSDSetting(
    //     preferredTrim,
    //     v,
    //     preferredAutopilotOption,
    //     activeFSDSetting,
    //     result4, 
    //     populatePaymentObject,
    //     setActiveFSDSetting, 
    //   )
    // } else if (preferredTrim === "plaid") {
    //   result5 = duplicateFSDSetting(
    //     "performance",
    //     v,
    //     preferredAutopilotOption,
    //     activeFSDSetting,
    //     result4, 
    //     populatePaymentObject,
    //     setActiveFSDSetting, 
    //   )
    // } else if (
    //   preferredTrim === "off_menu" &&
    //   v === "Model 3" &&
    //   preferredAutopilotOption === "fsd_and_autopilot"
    // ) {
    //   result5 = duplicateFSDSetting(
    //     "long_range",
    //     v,
    //     preferredAutopilotOption,
    //     activeFSDSetting,
    //     result4, 
    //     populatePaymentObject,
    //     setActiveFSDSetting, 
    //   )
    // } else if (
    //   preferredTrim === "off_menu" &&
    //   v === "Model 3" &&
    //   preferredAutopilotOption === "autopilot_charge"
    // ) {
    //   result5 = duplicateFSDSetting(
    //     "long_range",
    //     v,
    //     preferredAutopilotOption,
    //     activeFSDSetting,
    //     result4, 
    //     populatePaymentObject,
    //     setActiveFSDSetting, 
    //   )
    // } else if (
    //   preferredTrim === "off_menu" &&
    //   v === "Model 3" &&
    //   preferredAutopilotOption === "no_autopilot"
    // ) {
    //   result5 = duplicateFSDSetting(
    //     "long_range",
    //     v,
    //     preferredAutopilotOption,
    //     activeFSDSetting,
    //     result4, 
    //     populatePaymentObject,
    //     setActiveFSDSetting, 
    //   )
    // }










  });

  setTeslaModels(result5);
};

export default runApplyAll;
