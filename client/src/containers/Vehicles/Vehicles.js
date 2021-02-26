import React, { useState } from "react";
import "./Vehicles.css";
import InfoPanel from "../InfoPanel/InfoPanel.js";
import VehiclePanel from "../VehiclePanel/VehiclePanel.js";

const Vehicles = (props) => {
  const { statedata } = props;
  console.log('props0- ',statedata)

  const [modalVisibility, setModalVisibility] = useState({
    locationsModal: false,
    chargingModal: false,
  });

  const showInfoModal = (value) => {
    setModalVisibility({ [value]: true });
  };

  const closeModal = () => {
    setModalVisibility({ locationsModal: false });
    setModalVisibility({ chargingModal: false });
  };

  return (
    <div className="vehicles_container app_pageHeight">
      <div className="vehicles_info_panel app_displayFlex">
        <InfoPanel
          whichComponent={"vehicles"}
          stateData={statedata}
          showInfoModal={showInfoModal}
        />
        <VehiclePanel
          modalVisibility={modalVisibility}
          closeModal={closeModal}
          showWarning={props.showWarning}
        />
      </div>
    </div>
  );
};

export default Vehicles;
