import React from "react";
import "./InfoPanelLocationsNearby.css";
import { connect, useDispatch } from "react-redux";
import { showLocations } from "../../../config/actions/navActions";

const InfoPanelLocationsNearby = ({
  vehicleOrder,
  stateAbbr,
  allShowrooms,
  allServiceCenters,
  allChargingLocations,
  closeLocations,
  showLocations,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="InfoPanel_charging_container">
      <div id="infoPanel_loaded_title">LOCATIONS</div>
      <div className="infoPanel_section_data infoPanel_locations_container">
        <div>
          {allShowrooms ? (
            <div className="infoPanel_location_div">
              <h4 className="infoPanel_location_title">SHOWROOM</h4>
              {allShowrooms.sSortedArr[0] ? (
                <p className="infoPanel_location_text">
                  {allShowrooms.sObj[allShowrooms.sSortedArr[0]][0]}
                </p>
              ) : (
                ""
              )}
              {allShowrooms.sSortedArr[1] ? (
                <p className="infoPanel_location_text">
                  {allShowrooms.sObj[allShowrooms.sSortedArr[1]][0]}
                </p>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {allServiceCenters ? (
            <div className="infoPanel_location_div">
              <h4 className="infoPanel_location_title">SERVICE CENTER</h4>
              {allServiceCenters.scSortedArr[0] ? (
                <p className="infoPanel_location_text">
                  {allServiceCenters.scObj[allServiceCenters.scSortedArr[0]][0]}
                </p>
              ) : (
                ""
              )}
              {allServiceCenters.scSortedArr[1] ? (
                <p className="infoPanel_location_text">
                  {allServiceCenters.scObj[allServiceCenters.scSortedArr[1]][0]}
                </p>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          {allChargingLocations ? (
            <div className="infoPanel_location_div">
              <h4 className="infoPanel_location_title">CHARGING LOCATION</h4>
              {allChargingLocations.clSortedArr[0] ? (
                <p className="infoPanel_location_text">
                  {
                    allChargingLocations.clObj[
                      allChargingLocations.clSortedArr[0]
                    ][0]
                  }
                </p>
              ) : (
                ""
              )}
              {allChargingLocations.clSortedArr[1] ? (
                <p className="infoPanel_location_text">
                  {
                    allChargingLocations.clObj[
                      allChargingLocations.clSortedArr[1]
                    ][0]
                  }
                </p>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          <div className="app_source_footer">
            <div className="infoPanel_location_findUs">
              <a
                className=""
                href="https://www.tesla.com/findus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tesla Find Us
              </a>
            </div>
            <div
              className="app_seeMore_btn infoPanel_locations_seeMore"
              onClick={() => {
                showLocations(dispatch, allShowrooms);
              }}
            >
              See More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default InfoPanelLocationsNearby;

const mapDispatchToProps = (dispatch, allShowrooms) => ({
  showLocations: showLocations(dispatch, allShowrooms),
});

export default connect(null, mapDispatchToProps)(InfoPanelLocationsNearby);
