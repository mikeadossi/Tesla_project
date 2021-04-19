import React, { Component } from "react";
import "./ScrollUp.css";

const ScrollUp = ({ vehicleData, vehicleContainerRef }) => {
  const renderedVehiclesArr = vehicleData.length ? vehicleData : [];
  //Finds y value of given object
  
  const findPos = (obj) => {
    var curtop = 0;
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop + 50;
      } while ((obj = obj.offsetParent));
      return [curtop];
    }
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    const app_Panel_container = vehicleContainerRef.current;
    window.scroll(
      0,
      findPos(document.querySelector(".app_Panel_container").children[i]) - 165
    );
    // window.scroll(0, app_Panel_container.children[i]);
  };

  return (
    <div className="scrollUp_container">
      <div className="scrollUp_top">Top</div>
      <div className="scrollUp_vehicle_container">
        {renderedVehiclesArr.map((option, i) => {
          return (
            <div
              className="scrollUp_button"
              onClick={(e) => handleClick(e, i + 1)}
            >
              {/* <a href={`#${option}`}> */}
              {option.split(" ")[1]}
              {/* </a> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollUp;
