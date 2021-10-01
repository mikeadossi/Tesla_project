import React from "react";
import "./InfoModal.css";
import InfoModalDataLocations from "../../components/InfoModalData/InfoModalDataLocations/InfoModalDataLocations";

const InfoModal = ({ closeLocations }) => {
  return (
    <div className="infoModal_backing">
      <div className="infoModal_container">
        <div
          className="vehicleConfig_close_container"
          onClick={() => {
            closeLocations();
          }}
        >
          <img
            className="vehicleConfig_close"
            src="../../../../images/Nav/close_2.png"
            alt="close"
          ></img>
        </div>

        <InfoModalDataLocations />
      </div>
    </div>
  );
};

export default InfoModal;
