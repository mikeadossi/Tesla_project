import React, { useState, useEffect } from "react";   

const VehicleConfigLayouts = ({  
    name,
    teslaDetails,
    vehicleBattery,
    selectedVehicle, 
    changeVehicleLayout,
    vehicleContent
}) => {

    const [activeLayout, setActiveLayout] = useState("");
    const seatingObject = teslaDetails[vehicleBattery]["layout"];
    const seatingObjectKeys = Object.keys(seatingObject);

    useEffect(() => {
        const layout = vehicleContent.vehicle_render[name]["layout"][0];
        setActiveLayout(layout);
    })

  return (
    <div>
        {(() => {
        if (seatingObjectKeys.length > 1) {
            return (
            <div className="vehicleConfig_selectLayout_super">
                <div className="vehicleConfig_selectLayout_container">
                <div className="app_textalign">Select Layout: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectlayout_ul">
                    {seatingObjectKeys.map((s) => {
                    if (seatingObjectKeys.length > 1) {
                        return (
                        <li
                            onClick={(event) => {
                            changeVehicleLayout(
                                vehicleBattery,
                                s,
                                selectedVehicle
                            );
                            setActiveLayout(s);
                            }}
                            className={`app_noSelect vehicleConfig_select layout_select vehicleConfig_5_seater ${
                            activeLayout == s && "selected_btn"
                            }`}
                        >
                            {seatingObject[s]["altName"]} -{" "}
                            {seatingObject[s]["price"]}
                        </li>
                        );
                    }
                    })}
                </ul>
                </div>
                <div className="vehicleConfig_borderBottom"></div>
            </div>
            );
        }
        })()}
    </div>
  );
};

export default VehicleConfigLayouts;