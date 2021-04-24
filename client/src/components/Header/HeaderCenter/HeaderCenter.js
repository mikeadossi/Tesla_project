import React, { useState, useEffect } from "react";
import "./HeaderCenter.css";
import { connect } from "react-redux";
import { getMyZipcodeData } from "../../../config/actions/navActions";

const HeaderCenter = ({ getMyZipcodeData, zipcode_data, cashAmt }) => {
  const [zipcode, setZipcode] = useState('90210'); 

  return (
    <div className="headerCenter app_removeBlue"> 
      <input
        className="headerCenter_input app_main_submit_input" 
        placeholder="Enter zipcode or area code" 
        onChange={(e) => setZipcode(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            getMyZipcodeData(zipcode);
          }
        }}
      />
      <img 
        onClick={() => getMyZipcodeData(zipcode)}
        className="app_search_icon headerCenter_search_icon"
        src="../../../../images/Nav/search_icon.png"
        alt="search icon"
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.navReducer.error,
    zipcode_data: state.navReducer.zipcode_data,
  };
}

export default connect(mapStateToProps, { getMyZipcodeData })(HeaderCenter); 
