import React from "react";  

const VehicleConfigInteriors = ({ 
    interiorObjectKeys,
    interiorObject,
    changeVehicleInterior,
    vehicleBattery,
    selectedVehicle,
    setActiveInterior,
    activeInterior,
    renderedTesla 
}) => {

  return (
    <div className="vehicleConfig_selectInteriorColor_container">
        <div>Select Interior Color: </div>
        <ul className="vehicleConfig_select_ul vehicleConfig_selectInteriorColor_ul">
            {interiorObjectKeys.map((i) => (
                <div
                onClick={(event) => {
                    changeVehicleInterior(
                    vehicleBattery,
                    i,
                    selectedVehicle
                    );
                    setActiveInterior(i);
                }}
                className={`app_noSelect app_inlineFlex color_select_container ${
                    i === activeInterior && "selected"
                }`}
                >
                <img
                    className="app_noSelect color_select vehicleConfig_black_interior"
                    src={
                    `../../../../images/interior/` +
                    interiorObject[i]["image"] +
                    `.png`
                    }
                />
                </div>
            ))}
        </ul>
        <input
            type="text"
            placeholder={
                renderedTesla.interior[0] +
                ` - ` +
                renderedTesla.interior[2]
            }
            className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectInteriorColor_input"
            readonly="readonly"
        />
    </div>
  );
};

export default VehicleConfigInteriors;