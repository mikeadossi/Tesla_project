import React from "react";
import "./Solar.css";
import InfoPanel from "../InfoPanel/InfoPanel.js";
import SolarProductPanel from "../SolarProductPanel/SolarProductPanel.js";
import { connect } from "react-redux";

const Solar = (props) => {
  const { statedata } = props;  

  return (
    <div className="solar_container app_pageHeight">
      <div className="solar_info_panel app_displayFlex">
        <InfoPanel 
          whichComponent={"solar"} 
          stateData={statedata} 
          currentUser={props.currentUser}
        />
        <SolarProductPanel 
          alertUser={props.alertUser} 
          setAlertUser={props.setAlertUser}
          currentUser={props.currentUser}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  statedata: state.usStateReducer.usStatesData,
});

export default connect(mapStateToProps)(Solar);

