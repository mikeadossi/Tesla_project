import React, { useState, useEffect } from "react"; 

const VehicleConfigWheels = ({
    teslaDetails,
    changeVehicleWheel,
    name,
    vehicleContent,
    vehicleBattery,
    selectedVehicle,
    renderedTesla 
}) => {

  const [activeWheel, setActiveWheel] = useState("");

  const wheelObject = teslaDetails[vehicleBattery]["wheel"];
  const wheelObjectKeys = Object.keys(wheelObject);


  useEffect(() => {
    const wheel = vehicleContent.vehicle_render[name]["wheel"][0];
    setActiveWheel(wheel);
  }, [name, vehicleContent.vehicle_render])

  return (
    <div className="vehicleConfig_selectWheel_container">
        <div>Select Wheel: </div>
        <ul className="vehicleConfig_select_ul vehicleConfig_selectwheel_ul">
        {wheelObjectKeys.map((w, index) => (
            <div
            key={index}
            onClick={(event) => {
                changeVehicleWheel(vehicleBattery, w, selectedVehicle);
                setActiveWheel(w);
            }}
            className={`app_noSelect app_inlineFlex color_select_container ${
                w === activeWheel && "selected"
            }`}
            >
            <img
                className="app_noSelect vehicleConfig_wheel_select vehicleConfig_18_inch_aero_wheels"
                alt="wheel"
                src={
                `../../../../images/wheels/` +
                wheelObject[w]["image_source"] +
                `.png`
                }
            />
            </div>
        ))}
        </ul>
        <div>
        <input
            type="text"
            placeholder={
            renderedTesla.wheel[0].replace(" inch", '"') +
            ` - ` +
            renderedTesla.wheel[1]
            }
            className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectWheel_input"
            readOnly
        />
        </div>
    </div>
  );
};

export default VehicleConfigWheels;