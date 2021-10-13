import React, { useEffect, useRef, useState } from "react";
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
import {
  TOGGLE_MOBILE_MENU,
  UPDATE_VEHICLE_RENDER_DATA,
  VIEW_RENDERED_OPTIONS,
  TOGGLE_RESET_WARNING,
  TOGGLE_APPLY_ALL_WARNING,
  FSD_SETTING,
  OFFMENU_AUTOPILOT,
  MENU_OPTIONS,
} from "../../config/actions/types";
const _ = require('lodash');

const VehiclePanel = ({ 
  metaVehicleObj,
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
  usStateVehicleOrder, 
  menuOptions,
  setMenuOptions,
  alertUser,
  setAlertUser,
  vFactsArr, 
}) => {
  const dispatch = useDispatch();

  const vehicleContainerRef = useRef();

  useEffect(() => { 
    if (metaVehicleObj !== []) { 
      populateMenu(metaVehicleObj, setMenuOptions);
    }; 

  }, [
    metaVehicleObj,
    setMenuOptions, 
    populateMenu,
  ]);

  useEffect(() => {
    const payload = usStateVehicleOrder && usStateVehicleOrder[3]; 
    const callMe = async () => {
      if (metaVehicleObj !== [] && payload) {
        // getTeslaData(payload, metaVehicleObj, setTeslaModels); 
        const data = await getTeslaData(payload, metaVehicleObj, setTeslaModels);
        setTeslaModels(data); 
      };
    }
    callMe();

  }, [
    metaVehicleObj,
    usStateVehicleOrder, 
    setTeslaModels,
  ]);

  
  const runReset = async (vehicleName, detailsAndRender) => {
    let defaultOp = await _.cloneDeep(detailsAndRender["vehicle_details"][vehicleName]);
    let dAndRCopy = await _.cloneDeep(detailsAndRender); 
    dAndRCopy["vehicle_render"][vehicleName] = defaultOp["default_optioned_vehicle"];
    await setTeslaModels(dAndRCopy); 
  };



  const [vehicleImg, setVehicleImg] = useState("");


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
        currentUser={currentUser}
      />
      {vehicleData.length === 0 ? (
        <div className="vehiclePanel_super_container">
          <div className="vehiclePanel_facts_container app_displayFlex">
            <div className="vehiclePanel_facts_img">
              <img className="vehiclePanel_img" src="../../../../images/app_art/guy.png" />
            </div>
            <div className="vehiclePanel_facts_content">
              <div className="vpf_content_heading">FACT #{vFactsArr[0]}</div>
              <div className="vpf_content_text">{vFactsArr[1]}</div>
            </div>
          </div>
        </div>
        ) 
        : 
        ""
      }
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
          vehicleImg={vehicleImg}
          setVehicleImg={setVehicleImg}
          selectedVehicle={ele}
          vehicleContainerRef={vehicleContainerRef} 
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
              populatePaymentObject
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
          vehicleData={vehicleData}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.vehiclesReducer.error, 
    teslaModels: state.vehiclesReducer.vehicleRenderData,
    vehicleData: state.vehiclesReducer.vehiclesRendered,
    activeFSDSetting: state.vehiclesReducer.activeFSDSetting,
    activeOffMenuAutopilot: state.vehiclesReducer.activeOffMenuAutopilot,
    menuOptions: state.vehiclesReducer.menuOptions,
    vFactsArr: state.navReducer.vFactsArr,
  };
}

export default connect(mapStateToProps, {
  getAllVehicles,
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
  setMenuOptions: (menuOptions) => (dispatch) =>
    dispatch({
      type: MENU_OPTIONS,
      payload: menuOptions,
    }),
})(VehiclePanel);
