import React, { useState, useEffect, useRef } from "react";
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfigContainer from "../../components/VehicleData/VehicleConfigContainer/VehicleConfigContainer";
import InfoModal from "../InfoModal/InfoModal.js";
// import runReset from "./VehiclePanelMethods/runReset";
import {
  removeModel,
  setSelectedVehicleName,
  populatePaymentObject,
  getTeslaData,
  populateMenu,
  runApplyAll,
  setUserPymtEntry,
  changeVehicleColor,
  changeVehicleWheel,
  changeVehicleInterior,
  changeVehicleBattery,
  changeVehicleLayout,
  addTowHitch,
  toggleFSD,
  selectOffMenuAutopilot,
} from "./VehiclePanelMethods/moduleExports";
import { connect, useDispatch } from "react-redux";
import { getAllVehicles } from "../../config/actions/vehicleActions";
import { getAllStateData } from "../../config/actions/usStateActions";
import { updateRenderData } from "../../config/actions/vehicleActions";
import {
  TOGGLE_MOBILE_MENU,
  UPDATE_VEHICLE_RENDER_DATA,
  VIEW_RENDERED_OPTIONS,
  TOGGLE_RESET_WARNING,
  TOGGLE_APPLY_ALL_WARNING,
} from "../../config/actions/types";

const VehiclePanel = ({
  getAllVehicles,
  getAllStateData,
  metaVehicleObj,
  zipcode_data,
  usStatesData, 
  teslaModels,
  changeRegion, 
  currentUser,
}) => {
  const [vehicleData, setVehicleData] = useState([]);
  const [menuOptions, setMenuOptions] = useState("");
  const [usStateVehicleOrder, setUsStateVehicleOrder] = useState("");
  const [loadTeslaData, setLoadTeslaData] = useState(false);
  const vehicleContainerRef = useRef();
  const dispatch = useDispatch();

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
      let vehicle_order = JSON.parse(usStatesData[0]["vehicle_order"]);
      setUsStateVehicleOrder(() => {
        return [
          usStatesData[0]["state_abbr"],
          zipcode_data["id"],
          JSON.parse(usStatesData[0]["vehicle_order"]),
          JSON.parse(usStatesData[0]["payment_object"]),
        ];
      });
      return changeRegion(
        zipcode_data.state_name,
        zipcode_data.county,
        vehicle_order,
        usStatesData[0]
      );
    }
  }, [usStatesData[0]]);

  useEffect(() => {
    const payload = usStateVehicleOrder && usStateVehicleOrder[3];
    if (!loadTeslaData && metaVehicleObj.length > 0 && payload) {
      getTeslaData(payload, metaVehicleObj, setTeslaModels);
      setLoadTeslaData(true);
      populateMenu(metaVehicleObj, setMenuOptions);
    }
  }, [metaVehicleObj, usStateVehicleOrder, loadTeslaData]);

  const setTeslaModels = (value) => {
    if (typeof value === "function") {
      value = value(teslaModels);
    }
    dispatch({
      type: UPDATE_VEHICLE_RENDER_DATA,
      payload: value,
    });

    return value;
  };

  const runReset = (vehicleName, detailsAndRender) => {
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

      {vehicleData.map((ele) => (
        <VehicleConfigContainer
          removeModel={(model) => {
            removeModel(
              model,
              vehicleData,
              teslaModels,
              setVehicleData,
              runReset
            );
          }}
          vehicleContent={teslaModels}
          selectedVehicle={ele}
          vehicleContainerRef={vehicleContainerRef}
          changeVehicleColor={(color, value) => {
            changeVehicleColor(
              color,
              value,
              teslaModels,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          changeVehicleWheel={(trim, wheelSelected, value) => {
            changeVehicleWheel(
              trim,
              wheelSelected,
              value,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          changeVehicleInterior={(trim, interiorSelected, value) => {
            changeVehicleInterior(
              trim,
              interiorSelected,
              value,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          changeVehicleLayout={(trim, layoutSelected, value) => {
            changeVehicleLayout(
              trim,
              layoutSelected,
              value,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          changeVehicleBattery={(batterySelected, value) => {
            changeVehicleBattery(
              batterySelected,
              value,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          addTowHitch={(trim, value) => {
            addTowHitch(trim, value, setTeslaModels, populatePaymentObject);
          }}
          toggleFSD={(trim, value) => {
            toggleFSD(trim, value, setTeslaModels, populatePaymentObject);
          }}
          selectOffMenuAutopilot={(selectedOption) => {
            selectOffMenuAutopilot(
              selectedOption,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          usStateVehicleOrder={usStateVehicleOrder}
          populatePaymentObject={populatePaymentObject}
          setUserPymtEntry={(activeFormValues, value) => {
            return setUserPymtEntry(activeFormValues, value, setTeslaModels);
          }}
          setTeslaModels={setTeslaModels}
          runReset={runReset}
          runApplyAll={runApplyAll}
          currentUser={currentUser} 
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
