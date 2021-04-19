import React from "react";
import "./Solar.css";
import InfoPanel from "../InfoPanel/InfoPanel.js";
import SolarProductPanel from "../SolarProductPanel/SolarProductPanel.js";
import { connect } from "react-redux";

const Solar = (props) => {
  const { statedata } = props;

  return (
    <div className="solar_container">
      <div className="solar_info_panel app_displayFlex">
        <InfoPanel whichComponent={"solar"} stateData={statedata} />
        <SolarProductPanel />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  statedata: state.usStateReducer.usStatesData,
});
export default connect(mapStateToProps)(Solar);
