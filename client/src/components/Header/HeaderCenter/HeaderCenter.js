import React, { useState, useEffect } from "react";
import "./HeaderCenter.css";

const HeaderCenter = ({ getZipcodeData }) => {
  const [zipcode, setZipcode] = useState();

  return (
    <div className="headerCenter app_removeBlue">
      <input
        className="headerCenter_input app_main_submit_input"
        placeholder="Enter zipcode or area code"
        onChange={(e) => setZipcode(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            getZipcodeData(zipcode);
          }
        }}
      />
      <img
        onClick={() => getZipcodeData(zipcode)}
        className="app_search_icon headerCenter_search_icon"
        src="../../../../images/Nav/search_icon.png"
        alt="search icon"
      />
    </div>
  );
};

export default HeaderCenter;
