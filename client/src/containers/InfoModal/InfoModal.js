import React, { useEffect } from "react";
import "./InfoModal.css";
import InfoModalData_locations from "../../components/InfoModalData/InfoModalData_locations/InfoModalData_locations"; 

const InfoModal = ({
  closeLocations,
}) => { 


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

        <InfoModalData_locations />

      </div>
    </div>
  );
};

export default InfoModal;
