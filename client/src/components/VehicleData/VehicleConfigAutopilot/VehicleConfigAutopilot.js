import React from "react"; 

const VehicleConfigAutopilot = ({ 
    selectedVehicle,
    name,
    vehicleBattery,
    selectOffMenuAutopilot,
    vehicleContent,
    toggleFSD,
    activeFSDSetting,
    setActiveFSDSetting,
    activeOffMenuAutopilot,
    setActiveOffMenuAutopilot,
    setTeslaModels, 
    populatePaymentObject,
}) => {

  const offMenuObj = vehicleContent.vehicle_details["model3"]["off_menu"]["autopilot"];


  return (
    <div className="vehicleConfig_selectLayout_and_autopilot_container">
        {(() => {
        if (vehicleBattery === "off_menu") {
            return (
            <div>
                <div className="vehicleConfig_autopilot_container">
                <div className="app_textalign">Select Autopilot: </div>
                <div>
                    <input
                    onChange={(e) => {
                        const value = e.target.value; // ex: value = "no_autopilot"
                        selectOffMenuAutopilot(value);
                        setActiveOffMenuAutopilot(value);
                    }}
                    type="radio"
                    name="autopilot_radio"
                    checked={activeOffMenuAutopilot === "no_autopilot"}
                    value="no_autopilot"
                    className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_noAutopilot_radio"
                    ></input>
                    <span className="vehicleConfig_autopilot">
                        No autopilot
                    </span>
                </div>
                <div>
                    <input
                    onChange={(e) => {
                        const value = e.target.value;
                        selectOffMenuAutopilot(value);
                        setActiveOffMenuAutopilot(value);
                    }}
                    type="radio"
                    name="autopilot_radio"
                    checked={
                        activeOffMenuAutopilot === "autopilot_charge"
                    }
                    value="autopilot_charge"
                    className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_autopilot_radio"
                    ></input>
                    <span>
                    Autopilot - $
                    {offMenuObj["autopilot_charge"]["price"]}
                    </span>
                </div>
                <div>
                    <input
                    onChange={(e) => {
                        const value = e.target.value;
                        selectOffMenuAutopilot(value);
                        setActiveOffMenuAutopilot(value);
                    }}
                    type="radio"
                    name="autopilot_radio"
                    checked={
                        activeOffMenuAutopilot === "fsd_and_autopilot"
                    }
                    value="fsd_and_autopilot"
                    className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_fsd_radio"
                    ></input>
                    <span className="app_font11">
                    FSD &amp; Autopilot - $
                    {offMenuObj["fsd_and_autopilot"]["price"]}
                    </span>
                </div>
                </div>
                <div className="vehicleConfig_borderBottom"></div>
            </div>
            );
        } else {
            return (
            <div>
                <div className="vehicleConfig_selectFSD_container">
                <ul className="vehicleConfig_select_ul vehicleConfig_selectFSD_ul">
                    <input 
                        onChange={(e) => {
                            const value = e.target.value;
                            toggleFSD(vehicleBattery, selectedVehicle, activeFSDSetting, setTeslaModels, populatePaymentObject);
                            activeFSDSetting[selectedVehicle] = value === "fsd" ? "autopilot" : "fsd"
                            setActiveFSDSetting(activeFSDSetting);
                        }}
                        type="checkbox"
                        checked={activeFSDSetting[selectedVehicle] === "fsd"}
                        value={activeFSDSetting[selectedVehicle]}
                        className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_towHitch_checkbox"
                    ></input>
                    <span>Full Self Driving - $10,000</span>
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

export default VehicleConfigAutopilot;