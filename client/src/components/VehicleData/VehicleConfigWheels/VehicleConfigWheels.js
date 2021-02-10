import React from "react";  

const VehicleConfigWheels = ({ 
    wheelObjectKeys,
    changeVehicleWheel,
    vehicleBattery,
    selectedVehicle,
    setActiveWheel,
    activeWheel,
    wheelObject,
    renderedTesla 
}) => {

  return (
    <div className="vehicleConfig_selectWheel_container">
        <div>Select Wheel: </div>
        <ul className="vehicleConfig_select_ul vehicleConfig_selectwheel_ul">
        {wheelObjectKeys.map((w) => (
            <div
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
            readonly="readonly"
        />
        </div>
    </div>
  );
};

export default VehicleConfigWheels;