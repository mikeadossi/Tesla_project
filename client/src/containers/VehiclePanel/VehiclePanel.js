import React, { useEffect, useRef } from "react";
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfigContainer from "../../components/VehicleData/VehicleConfigContainer/VehicleConfigContainer";
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
  FSD_SETTING,
  OFFMENU_AUTOPILOT,
  VEHICLE_ORDER,
  LOAD_TESLA_DATA_BOOL,
  MENU_OPTIONS,
} from "../../config/actions/types";

const VehiclePanel = ({
  getAllVehicles,
  getAllStateData,
  metaVehicleObj,
  zipcode_data,
  usStatesData,
  changeRegion,
  currentUser,
  handleWarning,
  vehicleData,
  setVehicleData,
  teslaModels,
  setTeslaModels,
  activeFSDSetting,
  setActiveFSDSetting,
  activeOffMenuAutopilot,
  setActiveOffMenuAutopilot,
  updateRenderData,
  usStateVehicleOrder,
  setUsStateVehicleOrder,
  loadTeslaData, 
  setLoadTeslaData,
  menuOptions, 
  setMenuOptions,
  alertUser,
  setAlertUser,
}) => {
  const dispatch = useDispatch();

  const vehicleContainerRef = useRef();

  useEffect(() => {
    if (zipcode_data.id) {
      getAllVehicles();
      getAllStateData(zipcode_data.state_abbr);
    }
  }, [zipcode_data.id, zipcode_data.state_abbr, getAllVehicles, getAllStateData]);

  useEffect(() => {
    if (usStatesData[0]) {
      let vehicle_order = JSON.parse(usStatesData[0]["vehicle_order"]);
      setUsStateVehicleOrder([
        usStatesData[0]["state_abbr"],
        zipcode_data["id"],
        JSON.parse(usStatesData[0]["vehicle_order"]),
        JSON.parse(usStatesData[0]["payment_object"]),
      ]);
      return changeRegion(
        zipcode_data.state_name,
        zipcode_data.county,
        vehicle_order,
        usStatesData[0]
      );
    }
  }, [usStatesData[0], changeRegion, setUsStateVehicleOrder, usStatesData, zipcode_data]);

  useEffect(() => {
    const payload = usStateVehicleOrder && usStateVehicleOrder[3];
    if (!loadTeslaData && metaVehicleObj.length > 0 && payload) {
      getTeslaData(payload, metaVehicleObj, setTeslaModels);
      setLoadTeslaData(true);
      populateMenu(metaVehicleObj, setMenuOptions);
    }
  }, [metaVehicleObj, usStateVehicleOrder, loadTeslaData, setLoadTeslaData, setMenuOptions, setTeslaModels]);

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

    setTeslaModels(newDetailsAndRender);
    dispatch(updateRenderData(newDetailsAndRender));
  };


  return (
    <div className="app_Panel_container">
      <VehicleMenu
        setSelectedVehicleName={(selectedVehicleName) => {
          setSelectedVehicleName(
            selectedVehicleName,
            setVehicleData,
            vehicleData
          );
        }}
        menuOptions={menuOptions}
        vehicleData={vehicleData}
        vehicleContainerRef={vehicleContainerRef}
      />

      {vehicleData.map((ele, index) => (
        <VehicleConfigContainer
          key={index}
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
              teslaModels,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          changeVehicleInterior={(trim, interiorSelected, value) => {
            changeVehicleInterior(
              trim,
              interiorSelected,
              value,
              teslaModels,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          changeVehicleLayout={(trim, layoutSelected, value) => {
            changeVehicleLayout(
              trim,
              layoutSelected,
              value,
              teslaModels,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          changeVehicleBattery={(batterySelected, value) => {
            changeVehicleBattery(
              batterySelected,
              value,
              teslaModels,
              setTeslaModels,
              populatePaymentObject,
              activeFSDSetting,
              setActiveFSDSetting,
              setActiveOffMenuAutopilot
            );
          }}
          addTowHitch={(trim, value) => {
            addTowHitch(
              trim,
              value,
              teslaModels,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          toggleFSD={(trim, value) => {
            toggleFSD(
              trim,
              value,
              activeFSDSetting,
              teslaModels,
              setTeslaModels,
              populatePaymentObject, 
            );
          }}
          selectOffMenuAutopilot={(selectedOption) => {
            selectOffMenuAutopilot(
              selectedOption,
              teslaModels,
              setTeslaModels,
              populatePaymentObject
            );
          }}
          usStateVehicleOrder={usStateVehicleOrder}
          populatePaymentObject={populatePaymentObject}
          setUserPymtEntry={setUserPymtEntry}
          setTeslaModels={setTeslaModels}
          runReset={runReset}
          runApplyAll={runApplyAll}
          currentUser={currentUser}
          activeFSDSetting={activeFSDSetting}
          setActiveFSDSetting={setActiveFSDSetting}
          activeOffMenuAutopilot={activeOffMenuAutopilot}
          setActiveOffMenuAutopilot={setActiveOffMenuAutopilot}
          handleWarning={handleWarning}
          alertUser={alertUser}
          setAlertUser={setAlertUser}
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
    vehicleData: state.vehiclesReducer.vehiclesRendered,
    activeFSDSetting: state.vehiclesReducer.activeFSDSetting,
    activeOffMenuAutopilot: state.vehiclesReducer.activeOffMenuAutopilot,
    usStateVehicleOrder: state.vehiclesReducer.vehicleOrderObject,
    loadTeslaData: state.vehiclesReducer.loadTeslaDataBool,
    menuOptions: state.vehiclesReducer.menuOptions,
  };
}

export default connect(mapStateToProps, {
  getAllVehicles,
  getAllStateData,
  updateRenderData: () => (newData, dispatch) =>
    updateRenderData(newData, dispatch),
  toggl: () => (dispatch) => dispatch({ type: TOGGLE_MOBILE_MENU }),
  toggleResetWarning: (modelName) => (dispatch) =>
    dispatch({ type: TOGGLE_RESET_WARNING, payload: modelName }),
  toggleApplyAllWarning: () => (dispatch) =>
    dispatch({ type: TOGGLE_APPLY_ALL_WARNING }),
  setVehicleData: (vehicleData) => (dispatch) =>
    dispatch({
      type: VIEW_RENDERED_OPTIONS,
      payload: vehicleData,
    }),
  setTeslaModels: (teslaModels) => (dispatch) =>
    dispatch({
      type: UPDATE_VEHICLE_RENDER_DATA,
      payload: teslaModels,
    }),
  setActiveFSDSetting: (activeFSDSetting) => (dispatch) =>
    dispatch({
      type: FSD_SETTING,
      payload: activeFSDSetting,
    }),
  setActiveOffMenuAutopilot: (activeOffMenuAutopilot) => (dispatch) =>
    dispatch({
      type: OFFMENU_AUTOPILOT,
      payload: activeOffMenuAutopilot,
    }),
  setUsStateVehicleOrder: (usStateVehicleOrder) => (dispatch) =>
    dispatch({
      type: VEHICLE_ORDER,
      payload: usStateVehicleOrder,
    }),
  setLoadTeslaData: (loadTeslaData) => (dispatch) =>
    dispatch({
      type: LOAD_TESLA_DATA_BOOL,
      payload: loadTeslaData,
    }),
  setMenuOptions: (menuOptions) => (dispatch) =>
    dispatch({
      type: MENU_OPTIONS,
      payload: menuOptions,
    }),
})(VehiclePanel);
