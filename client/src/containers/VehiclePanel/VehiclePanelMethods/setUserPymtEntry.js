const setUserPymtEntry = (activeFormValues, model, setTeslaModels) => { 
  // console.log('$activeFormValues: ',activeFormValues);
  const formValuesObj = { ...activeFormValues }; 

  const vehicleContent = setTeslaModels((metaVehicles) => { 
    console.log('???!')
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

    let inputValues = ["tradeInValue", "tradeInPayoff", "cashDownPayment"];

    for(let y = 0; y < inputValues.length; y++){
      if(formValuesObj[inputValues[y]] === "" || formValuesObj[inputValues[y]] === undefined){
        formValuesObj[inputValues[y]] = "0";
      }
    }

    if (formValuesObj["tradeInValue"] || formValuesObj["tradeInPayoff"]) {
      pymtObj["tradeInEquity"] =
        formValuesObj["tradeInValue"] - formValuesObj["tradeInPayoff"];
    }  

    // loop below updates state payment_object with new user entries
    for (let i in formValuesObj) {
      if (pymtObj[i] !== undefined) {
        newTeslaModels.vehicle_render[model]["payment_object"][i] = JSON.parse(
          formValuesObj[i]
        );
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

    return newTeslaModels;
  });

  return vehicleContent;
};

export default setUserPymtEntry;
