import React from "react";
import "./InfoModalData_locations.css";
import { useSelector } from "react-redux"; 

const InfoModalData_locations = () => {  

  const allLoc = useSelector(
    (state) => state.navReducer.getLocations
  ); 

  return (
    <div className="infoModalData_locations_container">
      <h1>LOCATIONS NEARBY</h1>
      <div className="app_modalData_content">
        {allLoc.allShowrooms ? (
          <div className="infoModalData_showrooms_container">
            <h3 className="modalTitle">SHOWROOMS</h3>
            <div className="infoModalData_showroom_container">
              {allLoc.allShowrooms.sSortedArr[0] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {allLoc.allShowrooms.sObj[allLoc.allShowrooms.sSortedArr[0]][0]}
                  </h4>
                  {allLoc.allShowrooms.sObj[allLoc.allShowrooms.sSortedArr[0]][2].map(
                    (line, index) => (
                      <p className="infoPanel_showroom1_address" key={index}>
                        {line}
                      </p>
                    )
                  )}
                  <p>
                    <span>Store: </span>
                    <span className="infoPanel_showroom1_phone">
                      {allLoc.allShowrooms.sObj[allLoc.allShowrooms.sSortedArr[0]][4]}
                    </span>
                  </p>
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={allLoc.allShowrooms.sObj[allLoc.allShowrooms.sSortedArr[0]][1]}
                      target="_blank"
                    >
                      link
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
              {allLoc.allShowrooms.sSortedArr[1] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {allLoc.allShowrooms.sObj[allLoc.allShowrooms.sSortedArr[1]][0]}
                  </h4>
                  {allLoc.allShowrooms.sObj[allLoc.allShowrooms.sSortedArr[1]][2].map(
                    (line, index) => (
                      <p className="infoPanel_showroom1_address" key={index}>
                        {line}
                      </p>
                    )
                  )}
                  <p>
                    <span>Store: </span>
                    <span className="infoPanel_showroom1_phone">
                      {allLoc.allShowrooms.sObj[allLoc.allShowrooms.sSortedArr[1]][4]}
                    </span>
                  </p>
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={allLoc.allShowrooms.sObj[allLoc.allShowrooms.sSortedArr[1]][1]}
                      target="_blank"
                    >
                      link
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {allLoc.allServiceCenters ? (
          <div className="infoModalData_showrooms_container">
            <h3 className="modalTitle">SERVICE CENTERS</h3>
            <div className="infoModalData_showroom_container">
              {allLoc.allServiceCenters.scSortedArr[0] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {
                      allLoc.allServiceCenters.scObj[
                        allLoc.allServiceCenters.scSortedArr[0]
                      ][0]
                    }
                  </h4>
                  {allLoc.allServiceCenters.scObj[
                    allLoc.allServiceCenters.scSortedArr[0]
                  ][2].map((line, index) => (
                    <p className="infoPanel_showroom1_address" key={index}>
                      {line}
                    </p>
                  ))}
                  <p>
                    <span>Store: </span>
                    <span className="infoPanel_showroom1_phone">
                      {
                        allLoc.allServiceCenters.scObj[
                          allLoc.allServiceCenters.scSortedArr[0]
                        ][4]
                      }
                    </span>
                  </p>
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={
                        allLoc.allServiceCenters.scObj[
                          allLoc.allServiceCenters.scSortedArr[0]
                        ][1]
                      }
                      target="_blank"
                    >
                      link
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
              {allLoc.allServiceCenters.scSortedArr[1] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {
                      allLoc.allServiceCenters.scObj[
                        allLoc.allServiceCenters.scSortedArr[1]
                      ][0]
                    }
                  </h4>
                  {allLoc.allServiceCenters.scObj[
                    allLoc.allServiceCenters.scSortedArr[1]
                  ][2].map((line, index) => (
                    <p className="infoPanel_showroom1_address" key={index}>
                      {line}
                    </p>
                  ))}
                  <p>
                    <span>Store: </span>
                    <span className="infoPanel_showroom1_phone">
                      {
                        allLoc.allServiceCenters.scObj[
                          allLoc.allServiceCenters.scSortedArr[1]
                        ][4]
                      }
                    </span>
                  </p>
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={
                        allLoc.allServiceCenters.scObj[
                          allLoc.allServiceCenters.scSortedArr[1]
                        ][1]
                      }
                      target="_blank"
                    >
                      link
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {allLoc.allChargingLocations ? (
          <div className="infoModalData_showrooms_container">
            <h3 className="modalTitle">CHARGING LOCATIONS</h3>
            <div className="infoModalData_showroom_container">
              {allLoc.allChargingLocations.clSortedArr[0] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {
                      allLoc.allChargingLocations.clObj[
                        allLoc.allChargingLocations.clSortedArr[0]
                      ][0]
                    }
                  </h4>
                  {allLoc.allChargingLocations.clObj[
                    allLoc.allChargingLocations.clSortedArr[0]
                  ][2].map((line, index) => (
                    <p className="infoPanel_showroom1_address" key={index}>
                      {line}
                    </p>
                  ))}
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={
                        allLoc.allChargingLocations.clObj[
                          allLoc.allChargingLocations.clSortedArr[0]
                        ][1]
                      }
                      target="_blank"
                    >
                      link
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
              {allLoc.allChargingLocations.clSortedArr[1] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {
                      allLoc.allChargingLocations.clObj[
                        allLoc.allChargingLocations.clSortedArr[1]
                      ][0]
                    }
                  </h4>
                  {allLoc.allChargingLocations.clObj[
                    allLoc.allChargingLocations.clSortedArr[1]
                  ][2].map((line, index) => (
                    <p className="infoPanel_showroom1_address" key={index}>
                      {line}
                    </p>
                  ))}
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={
                        allLoc.allChargingLocations.clObj[
                          allLoc.allChargingLocations.clSortedArr[1]
                        ][1]
                      }
                      target="_blank"
                    >
                      link
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InfoModalData_locations;
