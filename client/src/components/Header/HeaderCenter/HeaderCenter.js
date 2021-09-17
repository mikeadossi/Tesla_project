import React from "react";
import "./HeaderCenter.css"; 
import { connect } from "react-redux";
import { getMyZipcodeData } from "../../../config/actions/navActions";
import { getAllStateData } from "../../../config/actions/usStateActions";

const HeaderCenter = ({ 
  getMyZipcodeData, 
  getAllStateData,
  zipcode_data, 
  cashAmt,
  changeRegion,
  statedata,
  zipcode,
  setZipcode,
}) => { 


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
        onClick={() => {
          getMyZipcodeData(zipcode); 
        }}
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
    statedata: state.usStateReducer.usStatesData,
  };
}

export default connect(mapStateToProps, { getMyZipcodeData, getAllStateData })(HeaderCenter); 
