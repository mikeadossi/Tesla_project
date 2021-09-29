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
  GET_VEHICLE_CONTENT,
  FSD_SETTING,
  OFFMENU_AUTOPILOT,
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
  updateRenderData
}) => {
  const dispatch = useDispatch();

  // const [teslaModels, setTeslaModels] = useState({});
  // const [activeFSDSetting, setActiveFSDSetting] = useState("autopilot");
  // const [activeOffMenuAutopilot, setActiveOffMenuAutopilot] = useState(
    // "no_autopilot"
  // );

  // useEffect(() => {
  //   dispatch({
  //     type: UPDATE_VEHICLE_RENDER_DATA,
  //     payload: teslaModels,
  //   });
  // }, []);

  // const [vehicleData, setVehicleData] = useState([]);
  const [menuOptions, setMenuOptions] = useState("");
  const [usStateVehicleOrder, setUsStateVehicleOrder] = useState("");
  const [loadTeslaData, setLoadTeslaData] = useState(false);
  const vehicleContainerRef = useRef();

  // useEffect(() => {
  //   dispatch({
  //     type: VIEW_RENDERED_OPTIONS,
  //     payload: vehicleData,
  //   });
  // }, [vehicleData]);

  // useEffect(() => {
  //   dispatch({
  //     type: GET_VEHICLE_CONTENT,
  //     payload: teslaModels,
  //   });
  // }, [teslaModels]);

  useEffect(() => {
    if (zipcode_data.id) {
      getAllVehicles();
      getAllStateData(zipcode_data.state_abbr);
    }
  }, [zipcode_data.state_abbr]);

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

  const runReset = (vehicleName, detailsAndRender) => {
    console.log('vehicleName- ',vehicleName);
    console.log('detailsAndRender- ',detailsAndRender);
    console.log('detailsAndRender["vehicle_details"]- ',detailsAndRender["vehicle_details"]);
    console.log('detailsAndRender["vehicle_details"][vehicleName]- ',detailsAndRender["vehicle_details"][vehicleName]);
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

    console.log("runReset was called- ", newDetailsAndRender);
    setTeslaModels(newDetailsAndRender);
    dispatch(updateRenderData(newDetailsAndRender,));
    // updateRenderData(newDetailsAndRender, dispatch);
    
  };

  // console.log("VehiclePanel=", teslaModels);

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
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch, newData) => ({
  updateRenderData: updateRenderData(newData, dispatch),
});

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
  };
}

export default connect( 
  mapStateToProps, 
  {
    getAllVehicles,
    getAllStateData, 
    updateRenderData: () => (newData, dispatch) => updateRenderData(newData, dispatch),
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
  }, 
)(VehiclePanel);
