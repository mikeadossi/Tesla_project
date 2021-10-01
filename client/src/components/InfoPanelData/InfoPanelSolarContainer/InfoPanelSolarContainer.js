import React from "react";
import "./InfoPanelSolarContainer.css";

const InfoPanelSolarContainer = (props) => {
  return (
    <div className="InfoPanelSolarContainer_div">
      <div className="InfoPanelRoofTypes_div">
        <div
          className="infoPanel_section app_cursorPointer"
          onClick={() => props.showComponent("InfoPanelRoofTypes")}
        >
          ROOF TYPES
        </div>
        <div className=""></div>
      </div>
      <div className="infoPanel_technical_div">
        <div
          className="infoPanel_section app_cursorPointer"
          onClick={() => props.showComponent("InfoPanelInstallation")}
        >
          INSTALLATION
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default InfoPanelSolarContainer;
