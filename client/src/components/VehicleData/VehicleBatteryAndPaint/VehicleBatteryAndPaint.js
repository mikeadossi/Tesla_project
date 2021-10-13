import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  populatePaymentObject, 
  changeVehicleColor,
} from "../../../containers/VehiclePanel/VehiclePanelMethods/moduleExports"; 
import { 
  UPDATE_VEHICLE_RENDER_DATA, 
} from "../../../config/actions/types"; 


const VehicleBatteryAndPaint = ({
  selectedVehicle,
  name,
  vehicleContent, 
  renderedTesla,
  teslaDetails,
  changeVehicleBattery,
  batteryObject,
  batteryObjectKeys,
  activeBattery,
  setActiveBattery,
  teslaModels,
  setTeslaModels, 
  setVehicleImg,
}) => {
  const [activeColor, setActiveColor] = useState("");

  const paintObject = teslaDetails["paint_options"];
  const paintObjectKeys = Object.keys(paintObject);
  const vehicleName = name;

  useEffect(() => {
    const color = vehicleContent.vehicle_render[vehicleName]["paint"][0];
    setActiveColor(color);
    const battery = vehicleContent.vehicle_render[vehicleName]["battery"][1];
    setActiveBattery(battery);
  }, [vehicleContent, vehicleName, setActiveColor, setActiveBattery]);

  

  return (
    <div className="vehicleConfig_selectCarAndColor_container">
      <div className="vehicleConfig_selectCar_container">
        <div>Select Battery: </div>
        <div className="vehicleConfig_select_ul vehicleConfig_selectCar_ul">
          <ul className="vehicleConfig_select_srAndoff">
            {batteryObjectKeys.map((batt, index) => {
              if (batt === "off_menu" && batteryObject[batt] !== null) {
                return (
                  <span
                    key={index}
                    onClick={(event) => {
                      changeVehicleBattery(batt, selectedVehicle);
                      setActiveBattery(batt);
                    }}
                    className={`app_noSelect vehicleConfig_select vehicleConfig_select_off ${
                      activeBattery === batt && "selected_btn_alt"
                    }`}
                  >
                    Off
                  </span>
                );
              } else if (
                batt === "standard_battery" &&
                batteryObject[batt] !== null &&
                batteryObjectKeys.includes("off_menu")
              ) {
                return (
                  <span
                    key={index}
                    onClick={(event) => {
                      changeVehicleBattery(batt, selectedVehicle);
                      setActiveBattery(batt);
                    }}
                    className={`app_noSelect vehicleConfig_select vehicleConfig_select_sr ${
                      activeBattery === batt && "selected_btn"
                    }`}
                  >
                    Standard
                  </span>
                );
              } else if (batteryObject[batt] === null) {
                return;
              } else {
                return (
                  <li
                    key={index}
                    onClick={(event) => {
                      changeVehicleBattery(batt, selectedVehicle);
                      setActiveBattery(batt);
                    }}
                    className={`app_noSelect vehicleConfig_select vehicleConfig_select ${
                      activeBattery === batt && "selected_btn"
                    }`}
                  >
                    {batteryObject[batt]["specs"]["Battery"]}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div className="vehicleConfig_selectColor_container">
        <div>Select Color: </div>
        <div className="vehicleConfig_select_ul vehicleConfig_selectColor_ul">
          {paintObjectKeys.map((p, index) => (
            <div
              key={index}
              onClick={async (event) => {
                
                let data = 
                await changeVehicleColor(
                  p, 
                  selectedVehicle,
                  teslaModels,
                  setTeslaModels, 
                  populatePaymentObject,
                  true,
                );  
                setTeslaModels(data);
                setVehicleImg(data["vehicle_render"][name]["vehicle_image"]);
                setActiveColor(p);
              }}
              className={`app_noSelect app_inlineFlex color_select_container ${
                p === activeColor && "selected"
              }`}
            >
              <img
                key={p}
                className="color_select"
                alt=""
                src={
                  `../../../../images/paint/` +
                  paintObject[p]["image_paint"].substring(1) +
                  `_paint.png`
                }
              />
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder={renderedTesla.paint[0] + ` - ` + renderedTesla.paint[1]}
          className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectColor_input"
          readOnly
        />
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    teslaModels: state.vehiclesReducer.vehicleRenderData,
  };
};

export default connect(
  mapStateToProps, { 
    setTeslaModels: (teslaModels) => (dispatch) =>
      dispatch({
        type: UPDATE_VEHICLE_RENDER_DATA,
        payload: teslaModels,
      }),
  }
)(VehicleBatteryAndPaint);
