import React from "react";
import "./HeaderCenter.css";

const HeaderCenter = ({
  zipcode,
  setzipcode,
  submitZipOrAreacode,
}) => {

  return (
    <div className="headerCenter app_removeBlue">
      <input
        className="headerCenter_input app_main_submit_input"
        placeholder="Enter zipcode or area code"
        value={zipcode}
        onChange={(e) => setzipcode(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") { 
            submitZipOrAreacode(zipcode);
          }
        }}
      />
      <img
        onClick={() => { 
          submitZipOrAreacode(zipcode);
        }}
        className="app_search_icon headerCenter_search_icon"
        src="../../../../images/Nav/search_icon.png"
        alt="search icon"
      />
    </div>
  );
};



export default HeaderCenter;
