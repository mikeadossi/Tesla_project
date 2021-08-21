import { updateRenderData } from "../../../config/actions/vehicleActions"; 


const runReset = (vehicleName, detailsAndRender, dispatch) => {
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

export default runReset;