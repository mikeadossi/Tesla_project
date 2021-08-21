const changeVehicleLayout = (trim, layoutSelected, value, setTeslaModels, populatePaymentObject) => {
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

  export default changeVehicleLayout;