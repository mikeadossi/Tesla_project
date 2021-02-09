import React, { useState, useEffect } from "react"; 

const VehicleBatteryAndPaint = ({
  selectedVehicle, 
  name,
  vehicleContent,
  changeVehicleColor, 
  renderedTesla,
  teslaDetails,
  changeVehicleBattery
}) => {

  const [activeBattery, setActiveBattery] = useState("");
  const [activeColor, setActiveColor] = useState("");
  
  const paintObject = teslaDetails["paint_options"];
  const paintObjectKeys = Object.keys(paintObject);
  const vehicleName = name;

  useEffect(() => {
    const color = vehicleContent.vehicle_render[vehicleName]["paint"][0];
    setActiveColor(color);
    const battery = vehicleContent.vehicle_render[vehicleName]["battery"][1];
    setActiveBattery(battery);
  }, [vehicleContent, vehicleName])

  const batteryObject = {
    standard_battery: teslaDetails.standard_battery,
    off_menu: teslaDetails.off_menu,
    long_range: teslaDetails.long_range,
    performance: teslaDetails.performance,
    plaid: teslaDetails.plaid,
  };

  const batteryObjectKeys = [
    "standard_battery",
    "off_menu",
    "long_range",
    "performance",
    "plaid",
  ];


  return (

    <div className="vehicleConfig_selectCarAndColor_container">
        <div className="vehicleConfig_selectCar_container">
            <div>Select Battery: </div>
            <ul className="vehicleConfig_select_ul vehicleConfig_selectCar_ul">
            <li className="vehicleConfig_select_srAndoff">
                {batteryObjectKeys.map((batt) => {
                if (batt === "off_menu" && batteryObject[batt] !== null) {
                    return (
                    <span
                        onClick={(event) => {
                        changeVehicleBattery(batt, selectedVehicle);
                        setActiveBattery(batt);
                        }}
                        className={`app_noSelect vehicleConfig_select vehicleConfig_select_off ${
                        activeBattery == batt && "selected_btn_alt"
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
                        onClick={(event) => {
                        changeVehicleBattery(batt, selectedVehicle);
                        setActiveBattery(batt);
                        }}
                        className={`app_noSelect vehicleConfig_select vehicleConfig_select_sr ${
                        activeBattery == batt && "selected_btn"
                        }`}
                    >
                        Standard
                    </span>
                    );
                } else if (batteryObject[batt] == null) {
                    return;
                } else {
                    return (
                    <li
                        onClick={(event) => {
                        changeVehicleBattery(batt, selectedVehicle);
                        setActiveBattery(batt);
                        }}
                        className={`app_noSelect vehicleConfig_select vehicleConfig_select ${
                        activeBattery == batt && "selected_btn"
                        }`}
                    >
                        {batteryObject[batt]["specs"]["Battery"]}
                    </li>
                    );
                }
                })}
            </li>
            </ul>
        </div>
        <div className="vehicleConfig_selectColor_container">
            <div>Select Color: </div>
            <div className="vehicleConfig_select_ul vehicleConfig_selectColor_ul">
            {paintObjectKeys.map((p) => (
                <div
                onClick={(event) => {
                    changeVehicleColor(p, selectedVehicle);
                    setActiveColor(p);
                }}
                className={`app_noSelect app_inlineFlex color_select_container ${
                    p === activeColor && "selected"
                }`}
                >
                <img
                    className="color_select"
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
            placeholder={
                renderedTesla.paint[0] + ` - ` + renderedTesla.paint[1]
            }
            className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectColor_input"
            readonly="readonly"
            />
        </div>
    </div>

  );
};

export default VehicleBatteryAndPaint;