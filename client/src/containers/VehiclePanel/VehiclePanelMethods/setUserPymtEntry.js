const setUserPymtEntry = (activeFormValues, value, setTeslaModels) => {
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

export default setUserPymtEntry;