import React, { useState, useEffect } from 'react';
import './SolarProductPanel.css';
import SolarMenu from '../../components/SolarData/SolarMenu/SolarMenu';
import SolarConfig from '../../components/SolarData/SolarConfig/SolarConfig';
import { connect } from "react-redux";

import { getAllStateData } from "../../config/actions/usStateActions";

const SolarProductPanel = ({zipcode_data, usStatesData}) => { 

  const [solarStateData, setSolarStateData] = useState("");
  const [solarProductData, setSolarProductData] = useState("");
  const [showSolarConfig, setShowSolarConfig] = useState(false);

  useEffect(() => {
    if (zipcode_data.id) { 
      getAllStateData(zipcode_data.state_abbr);
    }
  }, [zipcode_data]); // this becomes available when we call action getMyZipcodeData()

  useEffect(() => { 
    if (usStatesData[0]) { 
      // show Submit Energy Use options
      setSolarStateData(() => {
        return [
          usStatesData[0]["state_abbr"],
          zipcode_data["id"],
          JSON.parse(usStatesData[0]["vehicle_order"]),
          JSON.parse(usStatesData[0]["payment_object"]),
        ];
      }); 
    }
  }, [usStatesData]); // this becomes available when we call action getAllStateData()

  console.log('>> zz =====> ',zipcode_data.id)

  return (   
    <div className="app_Panel_container"> 
      <SolarMenu 
        zip={zipcode_data.id} 
        setShowSolarConfig={setShowSolarConfig}
      />
      {showSolarConfig ? <SolarConfig /> : ""}
    </div>
  ); 
}

function mapStateToProps(state) {
  return {
    error: state.vehiclesReducer.error,
    usStatesData: state.usStateReducer.usStatesData,
    zipcode_data: state.navReducer.zipcode_data, 
  };
}

export default connect(mapStateToProps, { 
  getAllStateData,
})(SolarProductPanel);