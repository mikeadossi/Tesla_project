import React, { useState, useEffect } from "react";
import "./InfoPanel.css";
import InfoPanelLocationsNearby from "../../components/InfoPanelData/InfoPanelLocationsNearby/InfoPanelLocationsNearby";
import InfoPanelPayments from "../../components/InfoPanelData/InfoPanelPayments/InfoPanelPayments";
import InfoPanelIncentives from "../../components/InfoPanelData/InfoPanelIncentives/InfoPanelIncentives";
import InfoPanelWarranty from "../../components/InfoPanelData/InfoPanelWarranty/InfoPanelWarranty";
import InfoPanelLinks from "../../components/InfoPanelData/InfoPanelLinks/InfoPanelLinks";
import InfoPanelInstallation from "../../components/InfoPanelData/InfoPanelInstallation/InfoPanelInstallation";
import InfoPanelRoofTypes from "../../components/InfoPanelData/InfoPanelRoofTypes/InfoPanelRoofTypes";
import InfoPanelSolarContainer from "../../components/InfoPanelData/InfoPanelSolarContainer/InfoPanelSolarContainer";
import InfoPanelVehicleContainer from "../../components/InfoPanelData/InfoPanelVehicleContainer/InfoPanelVehicleContainer";
import InfoPanelNeutralContainer from "../../components/InfoPanelData/InfoPanelNeutralContainer/InfoPanelNeutralContainer";
import GrayBackground from "../../components/GrayBackground/GrayBackground";
import { getMyZipcodeData } from "../../config/actions/navActions";
import { connect, useDispatch } from "react-redux";
import { GET_LOCATIONS } from "../../config/actions/types";

const InfoPanel = (props) => {
  console.log('InfoPanel props->',props)
  const dispatch = useDispatch();
  const allLocations = {
    allShowrooms: props.allShowrooms,
    allServiceCenters: props.allServiceCenters,
    allChargingLocations: props.allChargingLocations,
  }; 

  useEffect(() => {
    // here we pass our state data to our redux store
    dispatch({
      type: GET_LOCATIONS,
      payload: allLocations,
    });
  }, [allLocations, dispatch]);

  const [visibility, setVisibility] = useState({
    InfoPanelLocationsNearby: false,
    InfoPanelPayments: false,
    InfoPanelLinks: false,
    InfoPanelIncentives: false,
    InfoPanelWarranty: false,
    InfoPanelInstallation: false,
    InfoPanelRoofTypes: false,
  });

  const showComponent = (value) => {
    setVisibility({ [value]: true });
  };

  const stateAbbreviation = props.stateData["state_abbr"] || null;
  const vOrder = props.stateData["vehicle_order"] || null;
  const vehicleIncentives = props.stateData["vehicle_incentives"] || null;
  const solarIncentives = props.stateData["solar_incentives"] || null;


  return (
    <div className="infoPanel_container">
      <GrayBackground currentUser={props.currentUser} />
      <div className="infoPanel_subcontainer sticky_infoPanel">
        <h3 className="infoPanel_title">INFORMATION</h3>
        {props.whichComponent === "vehicles" && (
          <>
            <InfoPanelVehicleContainer
              showComponent={showComponent}
              vOrder={vOrder}
              currentUser={props.currentUser}
            />
            <InfoPanelNeutralContainer
              showComponent={showComponent}
              vOrder={vOrder}
              currentUser={props.currentUser}
            />
          </>
        )}
        {props.whichComponent === "solar" && (
          <>
            <InfoPanelSolarContainer showComponent={showComponent} currentUser={props.currentUser} />
            <InfoPanelNeutralContainer showComponent={showComponent} currentUser={props.currentUser} />
          </>
        )}

        <div>
          {visibility.InfoPanelLocationsNearby ? (
            <>
              <InfoPanelLocationsNearby
                vehicleOrder={vOrder}
                stateAbbr={stateAbbreviation}
                allShowrooms={props.allShowrooms}
                allServiceCenters={props.allServiceCenters}
                allChargingLocations={props.allChargingLocations}
                currentUser={props.currentUser}
              />
            </>
          ) : (
            ""
          )}
          {visibility.InfoPanelPayments ? (
            <>
              <InfoPanelPayments
                vehicleOrder={vOrder}
                stateAbbr={stateAbbreviation}
                whichComponent={props.whichComponent}
                currentUser={props.currentUser}
              />
            </>
          ) : (
            ""
          )}
          {visibility.InfoPanelLinks ? (
            <>
              <InfoPanelLinks
                vehicleOrder={vOrder}
                stateAbbr={stateAbbreviation}
                whichComponent={props.whichComponent}
                zipcode={props.zipcode_data.id}
                currentUser={props.currentUser}
              />
            </>
          ) : (
            ""
          )}
          {visibility.InfoPanelWarranty ? (
            <>
              <InfoPanelWarranty
                stateAbbr={stateAbbreviation}
                whichComponent={props.whichComponent}
                currentUser={props.currentUser}
              />
            </>
          ) : (
            ""
          )}
          {visibility.InfoPanelIncentives ? (
            <>
              <InfoPanelIncentives
                vehicleOrder={vOrder}
                vehicleIncentives={vehicleIncentives}
                solarIncentives={solarIncentives}
                stateAbbr={stateAbbreviation}
                whichComponent={props.whichComponent}
                currentUser={props.currentUser}
              />
            </>
          ) : (
            ""
          )}
          {visibility.InfoPanelInstallation ? (
            <>
              <InfoPanelInstallation
                vehicleOrder={vOrder}
                stateAbbr={stateAbbreviation}
                currentUser={props.currentUser}
              />
            </>
          ) : (
            ""
          )}
          {visibility.InfoPanelRoofTypes ? (
            <>
              <InfoPanelRoofTypes
                vehicleOrder={vOrder}
                stateAbbr={stateAbbreviation}
                currentUser={props.currentUser}
              />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.navReducer.error,
    zipcode_data: state.navReducer.zipcode_data,
  };
}

export default connect(mapStateToProps, { getMyZipcodeData })(InfoPanel);
