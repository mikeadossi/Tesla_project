import React, { useState, useEffect } from "react";
import "./InfoModalData_locations.css";

const InfoModalData_locations = ({
  allShowrooms: showroomData,
  allServiceCenters,
  allChargingLocations,
}) => {
  const [allShowrooms, setAllShowrooms] = useState({});
  console.log("hey", allShowrooms);

  useEffect(() => {
    if(showroomData){
      setAllShowrooms(showroomData);
    }
    
  }, []);

  return (
    <div className="infoModalData_locations_container">
      <h1>LOCATIONS NEARBY</h1>
      <div className="app_modalData_content">
        {allShowrooms ? (
          <div className="infoModalData_showrooms_container">
            <h3 className="modalTitle">SHOWROOMS</h3>
            <div className="infoModalData_showroom_container">
              {allShowrooms.sSortedArr[0] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {allShowrooms.sObj[allShowrooms.sSortedArr[0]][0]}
                  </h4>
                  {allShowrooms.sObj[allShowrooms.sSortedArr[0]][2].map(
                    (line, index) => (
                      <p className="infoPanel_showroom1_address" key={index}>
                        {line}
                      </p>
                    )
                  )}
                  <p>
                    <span>Store: </span>
                    <span className="infoPanel_showroom1_phone">
                      {allShowrooms.sObj[allShowrooms.sSortedArr[0]][4]}
                    </span>
                  </p>
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={allShowrooms.sObj[allShowrooms.sSortedArr[0]][1]}
                      target="_blank"
                    >
                      link
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
              {allShowrooms.sSortedArr[1] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {allShowrooms.sObj[allShowrooms.sSortedArr[1]][0]}
                  </h4>
                  {allShowrooms.sObj[allShowrooms.sSortedArr[1]][2].map(
                    (line, index) => (
                      <p className="infoPanel_showroom1_address" key={index}>
                        {line}
                      </p>
                    )
                  )}
                  <p>
                    <span>Store: </span>
                    <span className="infoPanel_showroom1_phone">
                      {allShowrooms.sObj[allShowrooms.sSortedArr[1]][4]}
                    </span>
                  </p>
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={allShowrooms.sObj[allShowrooms.sSortedArr[1]][1]}
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

        {allServiceCenters ? (
          <div className="infoModalData_showrooms_container">
            <h3 className="modalTitle">SERVICE CENTERS</h3>
            <div className="infoModalData_showroom_container">
              {allServiceCenters.scSortedArr[0] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {
                      allServiceCenters.scObj[
                        allServiceCenters.scSortedArr[0]
                      ][0]
                    }
                  </h4>
                  {allServiceCenters.scObj[
                    allServiceCenters.scSortedArr[0]
                  ][2].map((line, index) => (
                    <p className="infoPanel_showroom1_address" key={index}>
                      {line}
                    </p>
                  ))}
                  <p>
                    <span>Store: </span>
                    <span className="infoPanel_showroom1_phone">
                      {
                        allServiceCenters.scObj[
                          allServiceCenters.scSortedArr[0]
                        ][4]
                      }
                    </span>
                  </p>
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={
                        allServiceCenters.scObj[
                          allServiceCenters.scSortedArr[0]
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
              {allServiceCenters.scSortedArr[1] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {
                      allServiceCenters.scObj[
                        allServiceCenters.scSortedArr[1]
                      ][0]
                    }
                  </h4>
                  {allServiceCenters.scObj[
                    allServiceCenters.scSortedArr[1]
                  ][2].map((line, index) => (
                    <p className="infoPanel_showroom1_address" key={index}>
                      {line}
                    </p>
                  ))}
                  <p>
                    <span>Store: </span>
                    <span className="infoPanel_showroom1_phone">
                      {
                        allServiceCenters.scObj[
                          allServiceCenters.scSortedArr[1]
                        ][4]
                      }
                    </span>
                  </p>
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={
                        allServiceCenters.scObj[
                          allServiceCenters.scSortedArr[1]
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

        {allChargingLocations ? (
          <div className="infoModalData_showrooms_container">
            <h3 className="modalTitle">CHARGING LOCATIONS</h3>
            <div className="infoModalData_showroom_container">
              {allChargingLocations.clSortedArr[0] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {
                      allChargingLocations.clObj[
                        allChargingLocations.clSortedArr[0]
                      ][0]
                    }
                  </h4>
                  {allChargingLocations.clObj[
                    allChargingLocations.clSortedArr[0]
                  ][2].map((line, index) => (
                    <p className="infoPanel_showroom1_address" key={index}>
                      {line}
                    </p>
                  ))}
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={
                        allChargingLocations.clObj[
                          allChargingLocations.clSortedArr[0]
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
              {allChargingLocations.clSortedArr[1] ? (
                <div className="infoPanel_showroom1">
                  <h4 className="infoPanel_showroom1_name">
                    {
                      allChargingLocations.clObj[
                        allChargingLocations.clSortedArr[1]
                      ][0]
                    }
                  </h4>
                  {allChargingLocations.clObj[
                    allChargingLocations.clSortedArr[1]
                  ][2].map((line, index) => (
                    <p className="infoPanel_showroom1_address" key={index}>
                      {line}
                    </p>
                  ))}
                  <p className="infoPanel_showroom1_openTimes">
                    For Opening times and more:{" "}
                    <a
                      href={
                        allChargingLocations.clObj[
                          allChargingLocations.clSortedArr[1]
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
