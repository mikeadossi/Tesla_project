import {
  setUserPymtEntry,
  populatePaymentObject,
  changeVehicleColor, 
  changeVehicleInterior,
  changeVehicleBattery,
  setFormInputs,
  duplicateFSDSetting,
} from "./moduleExports";
const _ = require('lodash');

const runApplyAll = async (
  spacedVehicleName,
  vehicleContent,
  vehiclesRendered,
  vehicleName,
  setTeslaModels,
  activeFormVals,
  activeFSDSetting,
  setActiveFormVals,
  setActiveFSDSetting,
  setActiveOffMenuAutopilot, 
) => {
  // function below applies vehicle attributes to all other vehicles (ramet) based on original (ortet)
  let vehicleList = [...vehiclesRendered];
  vehicleList.splice(vehicleList.indexOf(spacedVehicleName), 1);

  let teslaModels = _.cloneDeep(vehicleContent);

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


    const configuredPrice = teslaModels.vehicle_render[modelName].cash_price;
    const submittedCashDown = formObj["cashDownPayment"]; 

    // function below runs all necessary lease, finance calculations
    teslaModels.vehicle_render[
      modelName
    ].payment_object = populatePaymentObject(
      configuredPrice,
      paymentObj,
      submittedCashDown, 
    );

    if(!runSync){
      setTeslaModels(teslaModels)
    } else {
      return teslaModels;
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
  let v;

  for(let i = 0; i < vehicleList.length; i++){
    v = vehicleList[i];

    result = await submitData(v, result, true);

    result = await changeVehicleColor(
      preferredPaint,
      v,
      result, //teslaModels
      setTeslaModels,
      populatePaymentObject,
      true
    );

    // only the Model 3 has a standard/off menu trim option at this time
    // also only the Model S has a plaid option at this time
    if (
      preferredBattery === "off_menu" ||
      preferredBattery === "standard_battery"
    ) {
      result = await changeVehicleBattery(
        "long_range",
        v,
        result,
        setTeslaModels,
        populatePaymentObject,
        activeFSDSetting,
        setActiveFSDSetting,
        setActiveOffMenuAutopilot,
        true
      );
    } else if (preferredBattery === "plaid") {
      result = await changeVehicleBattery(
        "performance",
        v,
        result,
        setTeslaModels,
        populatePaymentObject,
        activeFSDSetting,
        setActiveFSDSetting,
        setActiveOffMenuAutopilot,
        true
      );
    } else { 
      result = await changeVehicleBattery(
        preferredBattery,
        v,
        result,
        setTeslaModels,
        populatePaymentObject,
        activeFSDSetting,
        setActiveFSDSetting,
        setActiveOffMenuAutopilot,
        true
      );
    }



    // the model3 and modelY do not have a Cream interior option
    if (preferredInterior === "Cream" && ( v === "Model S" || v === "Model X") ) {
      // this runs only on modelX or modelS
      result = await changeVehicleInterior(
        preferredTrim,
        preferredInterior,
        v,
        result,
        setTeslaModels,
        populatePaymentObject,
        true
      );
    } else if (preferredInterior !== "Cream" && universalTrims.includes(preferredTrim)) {
      // this runs on all 4 vehicles, but ignores trims that are plaid, standard_range or off_menu since these are available on only one vehicle.
      result = await changeVehicleInterior(
        preferredTrim,
        preferredInterior,
        v,
        result,
        setTeslaModels,
        populatePaymentObject,
        true
      );
    }

    // the model3 off menu vehicle is a special case and if it's our 'ortet' car we'll need the code below
    if (preferredTrim !== "off_menu" && preferredTrim !== "standard_battery" && preferredTrim !== "plaid") {
      result = await duplicateFSDSetting(
        preferredTrim,
        v,
        preferredAutopilotOption,
        activeFSDSetting,
        result, 
        populatePaymentObject,
        setActiveFSDSetting, 
      )
    } else if (preferredTrim === "plaid") {
      result = await duplicateFSDSetting(
        "performance",
        v,
        preferredAutopilotOption,
        activeFSDSetting,
        result, 
        populatePaymentObject,
        setActiveFSDSetting, 
      )
    } else if (
      preferredTrim === "off_menu" &&
      v === "Model 3" &&
      preferredAutopilotOption === "fsd_and_autopilot"
    ) {
      result = await duplicateFSDSetting(
        "long_range",
        v,
        preferredAutopilotOption,
        activeFSDSetting,
        result, 
        populatePaymentObject,
        setActiveFSDSetting, 
      )
    } else if (
      preferredTrim === "off_menu" &&
      v === "Model 3" &&
      preferredAutopilotOption === "autopilot_charge"
    ) {
      result = await duplicateFSDSetting(
        "long_range",
        v,
        preferredAutopilotOption,
        activeFSDSetting,
        result, 
        populatePaymentObject,
        setActiveFSDSetting, 
      )
    } else if (
      preferredTrim === "off_menu" &&
      v === "Model 3" &&
      preferredAutopilotOption === "no_autopilot"
    ) {
      result = await duplicateFSDSetting(
        "long_range",
        v,
        preferredAutopilotOption,
        activeFSDSetting,
        result, 
        populatePaymentObject,
        setActiveFSDSetting, 
      )
    }

  };
  await setTeslaModels(result);
};

export default runApplyAll;
