import React, { useEffect } from "react";
import "./InfoModal.css";
import InfoModalData_locations from "../../components/InfoModalData/InfoModalData_locations/InfoModalData_locations"; 

const InfoModal = ({
  closeLocations, 
  allShowrooms,
  allServiceCenters,
  allChargingLocations,
  zipcode_data, 
  statedata
}) => {
  console.log('** all showroom InfoModal **',allShowrooms)


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

        <InfoModalData_locations
          allShowrooms={allShowrooms}
          allServiceCenters={allServiceCenters}
          allChargingLocations={allChargingLocations}
        />

      </div>
    </div>
  );
};

export default InfoModal;
