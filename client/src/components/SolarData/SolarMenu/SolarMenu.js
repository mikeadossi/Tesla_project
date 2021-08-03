import React, { useState } from "react";
import "./SolarMenu.css";

const SolarMenu = ({ zip, setShowSolarConfig }) => {

  const [userEnergyCost, setUserEnergyCost] = useState("");

  /* TODO: move bottom two objects to SolarProductPanel, 
  then write submitEnergyCost code to update state (hence UI), 
  then write new function for each button to update state
  */
  const solarRecommendations = {
    101: {
      recommended_size: "4.08",
      kWh_per_day: "10-15",
      panel_cost: 10200,
      fed_credit: 2652,
      recommended_powerwalls: 1,
    },
    151: {
      recommended_size: "8.16",
      kWh_per_day: "16-30",
      panel_cost: 20400,
      fed_credit: 5304,
      recommended_powerwalls: 2,
    },
    201: {
      recommended_size: "12.24",
      kWh_per_day: "31-40",
      panel_cost: 30600,
      fed_credit: 7956,
      recommended_powerwalls: 2,
    },
    301: {
      recommended_size: "16.32",
      kWh_per_day: "41-50",
      panel_cost: 40800,
      fed_credit: 10608,
      recommended_powerwalls: 3,
    },
  };

  const energyAppliance = {
    electric_water:{kWh_per_day:12.25, kWh_per_mo:380, additional_mo_cost:65}, 
    heat_pump_50:{kWh_per_day:2.48, kWh_per_mo:77, additional_mo_cost:10}, 
    heat_pump_75:{kWh_per_day:3.61, kWh_per_mo:112, additional_mo_cost:15}, 
    instantaneous_110:{kWh_per_day:12.25, kWh_per_mo:380, additional_mo_cost:65}, 
    instantaneus_240:{kWh_per_day:0.38, kWh_per_mo:12, additional_mo_cost:2}, 
    energy_star_14:{kWh_per_day:1.11, kWh_per_mo:34.5, additional_mo_cost:5}, 
    energy_start_25:{kWh_per_day:1.93, kWh_per_mo:60, additional_mo_cost:8}, 
    refrigerator_15:{kWh_per_day:4.83, kWh_per_mo:150, additional_mo_cost:20}, 
    freezer:{kWh_per_day:2.90, kWh_per_mo:90, additional_mo_cost:12},
  };
  // https://www.siliconvalleypower.com/residents/save-energy/appliance-energy-use-chart



  const openSolarConfig = (e, value) => {
    e.preventDefault();
    setShowSolarConfig(true);
    submitEnergyCost(value);
  };

  const submitEnergyCost = (v) => {
    console.log("-----> ",v);
    // if v = $120 
    // Run loop that checks to see if number is less than [101,151,201,301] then take array
    // save this array and pass it to UI 
  }

  return (
    <div>
      <div className="app_Menu_container solarMenu_form_container">
        <h3 className="solarMenu_form_title">Submit Energy Use</h3>
        {zip ? (
          <div className="solarMenu_div">
            <form className="solarMenu_form">
              <div className="app_displayFlex">
                <div className="solarMenu_form_bill">
                  <label className="solarMenu_form_bill_label">
                    Average monthly electricity cost:
                  </label>
                  <span>$</span>
                  <input 
                    className="solarMenu_form_bill_input app_main_submit_input app_removeBlue"
                    onChange={(e) => setUserEnergyCost(e.target.value)}
                  ></input>
                </div>
                <button
                  className="solarMenu_form_submit_btn app_submit_btn app_noSelect app_removeBlue"
                  onClick={(e) => openSolarConfig(e, userEnergyCost)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SolarMenu;
