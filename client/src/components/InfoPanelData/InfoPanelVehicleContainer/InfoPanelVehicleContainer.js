import React from "react";
import "./InfoPanelVehicleContainer.css";

const InfoPanelVehicleContainer = (props) => {
  return (
    <div className="InfoPanelVehicleContainer_div">
      {props.vOrder ? (
        <div className="infoPanel_locations_div">
          <div
            className="infoPanel_section app_cursorPointer"
            onClick={() => props.showComponent("InfoPanelLocationsNearby")}
          >
            LOCATIONS NEARBY
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoPanelVehicleContainer;
