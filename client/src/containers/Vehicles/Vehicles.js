import React, { useState, useEffect } from "react";
import "./Vehicles.css";
import InfoPanel from "../InfoPanel/InfoPanel.js";
import VehiclePanel from "../VehiclePanel/VehiclePanel.js";
import { getMyZipcodeData } from "../../config/actions/navActions";
import { getLocations } from "./VehiclesMethods/moduleExports"; 
import { connect } from "react-redux"; 

const Vehicles = ({ 
  statedata, 
  changeRegion, 
  zipcode, 
  zipcode_data, 
}) => { 

  const [allShowrooms, setAllShowrooms] = useState({});
  const [allServiceCenters, setAllServiceCenters] = useState({});
  const [allChargingLocations, setAllChargingLocations] = useState({});

  useEffect(() => {
    if (zipcode_data) {
      let zipLong = zipcode_data.longitude;
      let zipLat = zipcode_data.latitude; 
        setAllShowrooms(
          getLocations("all_showrooms", zipLong, zipLat, statedata)
        );  
        setAllServiceCenters(
          getLocations("all_service_centers", zipLong, zipLat, statedata)
        );  
        setAllChargingLocations(
          getLocations("all_charging_locations", zipLong, zipLat, statedata)
        ); 
    }
  }, []);

  return (
    <div className="vehicles_container app_pageHeight">
      <div className="vehicles_info_panel app_displayFlex">
        <InfoPanel
          whichComponent={"vehicles"}
          stateData={statedata}
          zipcode={zipcode} 
          setAllShowrooms={setAllShowrooms}
          setAllServiceCenters={setAllServiceCenters}
          setAllChargingLocations={setAllChargingLocations}
          allShowrooms={allShowrooms}
          allServiceCenters={allServiceCenters}
          allChargingLocations={allChargingLocations}
        />
        <VehiclePanel 
          changeRegion={changeRegion} 
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  statedata: state.usStateReducer.usStatesData,
  zipcode_data: state.navReducer.zipcode_data,
});
export default connect(mapStateToProps, { getMyZipcodeData })(Vehicles);