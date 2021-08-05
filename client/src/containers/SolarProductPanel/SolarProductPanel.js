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
  const [recommendedProducts, setRecommendedProducts] = useState("");
  const [recommendedSize, setRecommendedSize] = useState("");

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

  const solarRecommendations = {
    101: {
      recommended_size: "4.08",
      kWh_per_day: "10-15",
      panel_cost: 10200,
      fed_credit: 2652,
      price_after_incentives: 7548,
      recommended_powerwalls: 1,
      selected_btn: "select_4kW",
    },
    151: {
      recommended_size: "8.16",
      kWh_per_day: "16-30",
      panel_cost: 20400,
      fed_credit: 5304,
      price_after_incentives: 15096,
      recommended_powerwalls: 2,
      selected_btn: "select_8kW",
    },
    201: {
      recommended_size: "12.24",
      kWh_per_day: "31-40",
      panel_cost: 30600,
      fed_credit: 7956,
      price_after_incentives: 22644,
      recommended_powerwalls: 2,
      selected_btn: "select_12kW",
    },
    301: {
      recommended_size: "16.32",
      kWh_per_day: "41-50",
      panel_cost: 40800,
      fed_credit: 10608,
      price_after_incentives: 30192,
      recommended_powerwalls: 3,
      selected_btn: "select_16kW",
    },
  };

  const panelOptions = {
    "4 kW": 101,
    "8 kW": 151,
    "12 kW": 201,
    "16 kW": 301,
  };

  console.log('>> zz =====> ',zipcode_data.id)

  return (   
    <div className="app_Panel_container"> 
      <SolarMenu 
        zip={zipcode_data.id}
        setShowSolarConfig={setShowSolarConfig}
        solarRecommendations={solarRecommendations}
        setRecommendedProducts={setRecommendedProducts}
        setRecommendedSize={setRecommendedSize}
      />
      {showSolarConfig ? <SolarConfig 
        recommendedProducts={recommendedProducts}
        solarRecommendations={solarRecommendations}
        setRecommendedProducts={setRecommendedProducts} 
        panelOptions={panelOptions}
        recommendedSize={recommendedSize} 
      /> : ""}
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