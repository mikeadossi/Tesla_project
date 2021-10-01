import React from "react";
import "./ScrollUp.css";
import { animateScroll as scroll } from "react-scroll";

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
    window.scroll(
      0,
      findPos(document.querySelector(".app_Panel_container").children[i]) - 165
    ); 
  };

  const scrollTop = () => {
    scroll.scrollToTop(); 
  }

  return (
    <div className="scrollUp_container">
      <div 
        className="scrollUp_top"
        onClick={(e) => scrollTop()}
      >
        Top
      </div>
      <div className="scrollUp_vehicle_container">
        {renderedVehiclesArr.map((option, i) => {
          return (
            <div
              key={i}
              className="scrollUp_button"
              onClick={(e) => handleClick(e, i + 1)}
            > 
              {option.split(" ")[1]} 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollUp;
