import React, { useState, useEffect } from "react";
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
}) => {
  const [zipcode, setZipcode] = useState('90210'); 
  
  // useEffect(() => {
  //   if(statedata[0] && statedata[0].vehicle_order){
  //     console.log('statedata[0]: ',statedata[0].state_name);
  //     console.log('zipcode_data.state_name: ',zipcode_data.state_name)
  //     var vehicle_order = JSON.parse(statedata[0]["vehicle_order"]);
  //     changeRegion(zipcode_data.state_name, zipcode_data.county, vehicle_order);
  //   }
  // }, [zipcode_data]);

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
