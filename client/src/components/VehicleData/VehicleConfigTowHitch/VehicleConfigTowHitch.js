import React, { useState, useEffect } from "react";

const VehicleConfigTowHitch = ({
  name,
  addTowHitch,
  vehicleBattery,
  vehicleContent,
  selectedVehicle,
  teslaDetails,
  renderedTesla,
}) => {
  const [activeTowHitch, setActiveTowHitch] = useState(null);
  const renderedTowHitch = renderedTesla.tow_hitch;

  useEffect(() => {
    const activeTowHitch = vehicleContent.vehicle_render[name]["tow_hitch"];
    setActiveTowHitch(activeTowHitch);
  }, [name, vehicleContent.vehicle_render]);

  let towHitchPrice = teslaDetails[vehicleBattery]["tow_hitch"];
  if (towHitchPrice !== null) {
    towHitchPrice = teslaDetails[vehicleBattery]["tow_hitch"]["price"];
  }

  return (
    <div>
      {(() => {
        if (renderedTowHitch !== null) {
          return (
            <div className="vehicleConfig_selectTowHitch_container">
              <ul className="vehicleConfig_select_ul vehicleConfig_selectTowHitch_ul">
                <input
                  onChange={(e) => {
                    const value = e.target.value;
                    addTowHitch(vehicleBattery, selectedVehicle);
                    setActiveTowHitch(
                      value === towHitchPrice ? "null" : towHitchPrice
                    );
                  }}
                  type="checkbox"
                  checked={activeTowHitch === towHitchPrice}
                  value={activeTowHitch}
                  className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_towHitch_checkbox"
                ></input>
                <span>Tow Hitch - $1,000</span>
              </ul>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default VehicleConfigTowHitch;
