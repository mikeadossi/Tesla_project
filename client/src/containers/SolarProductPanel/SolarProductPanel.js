import React, { useState } from "react";
import "./SolarProductPanel.css";
import SolarMenu from "../../components/SolarData/SolarMenu/SolarMenu";
import SolarConfig from "../../components/SolarData/SolarConfig/SolarConfig"; 
import { connect } from "react-redux";

const SolarProductPanel = ({ 
  zipcode_data, 
  sFactsArr,
  alertUser,
  setAlertUser,
  currentUser
}) => {

  const [showSolarConfig, setShowSolarConfig] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState("");
  const [recommendedSize, setRecommendedSize] = useState(""); 


  const solarRecommendations = {
    101: {
      recommended_size: "4.08",
      kWh_per_day: "10-15",
      panel_cost: 10200,
      fed_credit: 2652,
      price_after_incentives: 7548,
      recommended_powerwalls: "select_1PW",
      selected_btn: "select_4kW",
    },
    151: {
      recommended_size: "8.16",
      kWh_per_day: "16-30",
      panel_cost: 20400,
      fed_credit: 5304,
      price_after_incentives: 15096,
      recommended_powerwalls: "select_2PW",
      selected_btn: "select_8kW",
    },
    201: {
      recommended_size: "12.24",
      kWh_per_day: "31-40",
      panel_cost: 30600,
      fed_credit: 7956,
      price_after_incentives: 22644,
      recommended_powerwalls: "select_2PW",
      selected_btn: "select_12kW",
    },
    301: {
      recommended_size: "16.32",
      kWh_per_day: "41-50",
      panel_cost: 40800,
      fed_credit: 10608,
      price_after_incentives: 30192,
      recommended_powerwalls: "select_3PW",
      selected_btn: "select_16kW",
    },
    401: {
      recommended_size: "20.40",
      kWh_per_day: "51-60",
      panel_cost: 51000,
      fed_credit: 13260,
      price_after_incentives: 37740,
      recommended_powerwalls: "select_3PW",
      selected_btn: "select_20kW",
    },
    501: {
      recommended_size: "24.28",
      kWh_per_day: "61-70",
      panel_cost: 61200,
      fed_credit: 15912,
      price_after_incentives: 45288,
      recommended_powerwalls: "select_4PW",
      selected_btn: "select_24kW",
    },
    601: {
      recommended_size: "28.56",
      kWh_per_day: "71-80",
      panel_cost: 71400,
      fed_credit: 18564,
      price_after_incentives: 52836,
      recommended_powerwalls: "select_4PW",
      selected_btn: "select_28kW",
    },
    701: {
      recommended_size: "32.64",
      kWh_per_day: "81-90",
      panel_cost: 81600,
      fed_credit: 21216,
      price_after_incentives: 60384,
      recommended_powerwalls: "select_5PW",
      selected_btn: "select_32kW",
    },
  };

  const panelOptions = {
    "4 kW": 101,
    "8 kW": 151,
    "12 kW": 201,
    "16 kW": 301,
    "20 kW": 401,
    "24 kW": 501,
    "28 kW": 601,
    "32 kW": 701,
  };

  const powerwallPricing = {
    select_1PW: {
      num: "1 Powerwall",
      pw_price: 7500,
      gateway_price: 1000,
      install: 3500,
      cash_price: 12000,
      fed_credit: 3120,
      price_after_incentives: 8880,
    },
    select_2PW: {
      num: "2 Powerwalls",
      pw_price: 10500,
      gateway_price: 1000,
      install: 3000,
      cash_price: 14500,
      fed_credit: 3770,
      price_after_incentives: 10730,
    },
    select_3PW: {
      num: "3 Powerwalls",
      pw_price: 13500,
      gateway_price: 1000,
      install: 2500,
      cash_price: 17000,
      fed_credit: 4420,
      price_after_incentives: 12580,
    },
    select_4PW: {
      num: "4 Powerwalls",
      pw_price: 16500,
      gateway_price: 1000,
      install: 2000,
      cash_price: 19500,
      fed_credit: 5070,
      price_after_incentives: 14430,
    },
    select_5PW: {
      num: "5 Powerwalls",
      pw_price: 19500,
      gateway_price: 1000,
      install: 1500,
      cash_price: 22000,
      fed_credit: 5720,
      price_after_incentives: 16280,
    },
    select_6PW: {
      num: "6 Powerwalls",
      pw_price: 22500,
      gateway_price: 1000,
      install: 1000,
      cash_price: 24500,
      fed_credit: 6370,
      price_after_incentives: 18130,
    },
    select_7PW: {
      num: "7 Powerwalls",
      pw_price: 25500,
      gateway_price: 1000,
      install: 500,
      cash_price: 27000,
      fed_credit: 7020,
      price_after_incentives: 19980,
    },
    select_8PW: {
      num: "8 Powerwalls",
      pw_price: 28500,
      gateway_price: 1000,
      install: 0,
      cash_price: 29500,
      fed_credit: 7670,
      price_after_incentives: 21830,
    },
    select_9PW: {
      num: "9 Powerwalls",
      pw_price: 31500,
      gateway_price: 1000,
      install: 0,
      cash_price: 32500,
      fed_credit: 8450,
      price_after_incentives: 24050,
    },
    select_10PW: {
      num: "10 Powerwalls",
      pw_price: 34500,
      gateway_price: 1000,
      install: 0,
      cash_price: 35500,
      fed_credit: 9230,
      price_after_incentives: 26270,
    },
  };
  


  return (
    <div className="app_Panel_container">
      <SolarMenu
        zip={zipcode_data.id}
        setShowSolarConfig={setShowSolarConfig}
        solarRecommendations={solarRecommendations}
        setRecommendedProducts={setRecommendedProducts}
        setRecommendedSize={setRecommendedSize}
        alertUser={alertUser} 
        setAlertUser={setAlertUser}
        currentUser={currentUser}
      />
      {showSolarConfig ? ( 
        <SolarConfig
          recommendedProducts={recommendedProducts}
          solarRecommendations={solarRecommendations}
          setRecommendedProducts={setRecommendedProducts}
          panelOptions={panelOptions}
          recommendedSize={recommendedSize}
          powerwallPricing={powerwallPricing}
          alertUser={alertUser} 
          setAlertUser={setAlertUser}
          currentUser={currentUser}
        />
      ) : (
        <div className="spp_super_container">
          <div className="spp_facts_container app_displayFlex">
            <div className="spp_facts_img">
              <div className="spp_img">SOLR IMAGE</div>
            </div>
            <div className="spp_facts_content">
              <div className="spp_content_heading">FACT #{sFactsArr[0]}</div>
              <div className="spp_content_text">{sFactsArr[1]}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.vehiclesReducer.error, 
    zipcode_data: state.navReducer.zipcode_data,
    sFactsArr: state.navReducer.sFactsArr,
  };
}

export default connect(mapStateToProps)(SolarProductPanel);
