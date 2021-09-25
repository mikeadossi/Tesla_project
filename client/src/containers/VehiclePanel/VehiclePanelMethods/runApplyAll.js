import {
  setUserPymtEntry,
  populatePaymentObject,
  changeVehicleColor,
  changeVehicleWheel,
  changeVehicleInterior,
  changeVehicleBattery,
  changeVehicleLayout,
  addTowHitch,
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
  setActiveFormVals
) => {
  // write function that applies vehicle data to all other vehicles
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

    setUserPymtEntry(formObj, modelName, setTeslaModels);

    setFormInputs(
      activeFormVals,
      setActiveFormVals, 
      formObj.annualMiles,
      formObj.leaseTerm,
      formObj.loanTerm,
    )

    setTeslaModels((teslaModels) => {
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

      const configuredPrice =
        vehicleContent.vehicle_render[modelName].cash_price;
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

      return vehicleContent;

    });
  };

  submitData(spacedVehicleName);

  vehicleList.map((v) => {
    console.log(
      "++-----------------------------------------------------------------------"
    );
    changeVehicleColor(
      teslaModels["vehicle_render"][vehicleName]["paint"][0],
      v,
      teslaModels,
      setTeslaModels,
      populatePaymentObject
    );

    submitData(v);
  });
};

export default runApplyAll;
