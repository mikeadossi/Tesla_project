import React, { useState } from "react";
import "./Vehicles.css";
import InfoPanel from "../InfoPanel/InfoPanel.js";
import VehiclePanel from "../VehiclePanel/VehiclePanel.js";
import { connect } from "react-redux";

const Vehicles = ({ statedata, changeRegion }) => {
  // const { statedata } = props; 

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
          changeRegion={changeRegion}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  statedata: state.usStateReducer.usStatesData,
});
export default connect(mapStateToProps)(Vehicles);