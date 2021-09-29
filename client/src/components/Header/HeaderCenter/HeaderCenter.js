import React from "react";
import "./HeaderCenter.css";

const HeaderCenter = ({
  zipcode,
  setzipcode,
  acceptZipOrAreacode,
}) => {


  return (
    <div className="headerCenter app_removeBlue">
      <input
        className="headerCenter_input app_main_submit_input"
        placeholder="Enter zipcode or area code"
        onChange={(e) => setzipcode(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            acceptZipOrAreacode(zipcode); 
          }
        }}
      />
      <img
        onClick={() => {
          acceptZipOrAreacode(zipcode); 
        }}
        className="app_search_icon headerCenter_search_icon"
        src="../../../../images/Nav/search_icon.png"
        alt="search icon"
      />
    </div>
  );
};



export default HeaderCenter;
