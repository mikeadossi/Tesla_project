import React, { useState } from "react";
import "./InfoPanel.css";
import InfoPanel_locations_nearby from "../../components/InfoPanelData/InfoPanel_locations_nearby/InfoPanel_locations_nearby";
import InfoPanel_payments from "../../components/InfoPanelData/InfoPanel_payments/InfoPanel_payments";
import InfoPanel_incentives from "../../components/InfoPanelData/InfoPanel_incentives/InfoPanel_incentives";
import InfoPanel_warranty from "../../components/InfoPanelData/InfoPanel_warranty/InfoPanel_warranty";
import InfoPanel_links from "../../components/InfoPanelData/InfoPanel_links/InfoPanel_links"; 
import InfoPanel_installation from "../../components/InfoPanelData/InfoPanel_installation/InfoPanel_installation";
import InfoPanel_roofTypes from "../../components/InfoPanelData/InfoPanel_roofTypes/InfoPanel_roofTypes";
import InfoPanel_solar_container from "../../components/InfoPanelData/InfoPanel_solar_container/InfoPanel_solar_container";
import InfoPanel_vehicle_container from "../../components/InfoPanelData/InfoPanel_vehicle_container/InfoPanel_vehicle_container";
import InfoPanel_neutral_container from "../../components/InfoPanelData/InfoPanel_neutral_container/InfoPanel_neutral_container";

const InfoPanel = (props) => {
  
  const [visibility, setVisibility] = useState({
    InfoPanel_locations_nearby: false, 
    InfoPanel_payments: false,
    InfoPanel_links: false,
    InfoPanel_incentives: false,
    InfoPanel_warranty: false,
    InfoPanel_installation: false,
    InfoPanel_roofTypes: false,
  });


  const showComponent = (value) => { 
    setVisibility({ [value]: true });
  };

  const stateAbbreviation = props.stateData.length
    ? props.stateData[0].state_abbr
    : null;

  const vOrder = props.stateData.length
    ? JSON.parse(props.stateData[0].vehicle_order)
    : null;


  return (
    <div className="infoPanel_container">
      <div className="infoPanel_subcontainer sticky_infoPanel">
        <h3 className="infoPanel_title">INFORMATION</h3>
        {props.whichComponent == "vehicles" && (
          <>
            <InfoPanel_vehicle_container showComponent={showComponent} />
            <InfoPanel_neutral_container showComponent={showComponent} />
          </>
        )}
        {props.whichComponent == "solar" && (
          <>
            <InfoPanel_solar_container showComponent={showComponent} />
            <InfoPanel_neutral_container showComponent={showComponent} />
          </>
        )}

        <div>
          {visibility.InfoPanel_locations_nearby ? (
          <>
            <InfoPanel_locations_nearby 
              vehicleOrder={vOrder} 
              stateAbbr={stateAbbreviation} 
              showInfoModal={props.showInfoModal}
            /> 
          </>
          ) : (
            ""
          )} 
          {visibility.InfoPanel_payments ? (
          <>
            <InfoPanel_payments 
              vehicleOrder={vOrder} 
              stateAbbr={stateAbbreviation} 
              whichComponent={props.whichComponent}
            /> 
          </>
          ) : (
            ""
          )}
          {visibility.InfoPanel_links ? (
          <>
            <InfoPanel_links 
              vehicleOrder={vOrder} 
              stateAbbr={stateAbbreviation} 
              whichComponent={props.whichComponent}
            /> 
          </>
          ) : (
            ""
          )}
          {visibility.InfoPanel_warranty ? (
          <>
            <InfoPanel_warranty 
              vehicleOrder={vOrder} 
              stateAbbr={stateAbbreviation} 
              whichComponent={props.whichComponent}
            /> 
          </>
          ) : (
            ""
          )}
          {visibility.InfoPanel_incentives ? (
          <>
            <InfoPanel_incentives 
              vehicleOrder={vOrder} 
              stateAbbr={stateAbbreviation} 
              whichComponent={props.whichComponent}
            /> 
          </>
          ) : (
            ""
          )}
          {visibility.InfoPanel_installation ? (
          <>
            <InfoPanel_installation 
              vehicleOrder={vOrder} 
              stateAbbr={stateAbbreviation} 
            /> 
          </>
          ) : (
            ""
          )}
          {visibility.InfoPanel_roofTypes ? (
          <>
            <InfoPanel_roofTypes 
              vehicleOrder={vOrder} 
              stateAbbr={stateAbbreviation} 
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

export default InfoPanel;
