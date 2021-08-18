import React, { Component } from 'react';
import './SolarAddProduct.css';

const SolarAddProduct = ({
  setActivePurchase,
  activePurchase,
  addFutureUserPurchases,
  sumPurchases,
  removeFromActive,
}) => {
  return (
    <div className="solarAddProduct_container">
      <div className="app_Solar_additions_container">
        <div className="app_padding_bottom_10px">
          Add Future Purchase (hover for details)
        </div>
        <div>
          <div className="app_Solar_additions_select_div">
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_heatPump50") > -1){
                  removeFromActive("select_heatPump50");
                } else {
                  setActivePurchase([...activePurchase, "select_heatPump50"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_heatPump50 
                  ${
                    activePurchase.includes("select_heatPump50") && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 2.48 kWh&#10;Additional kWh/mo: 77 kWh&#10;Additional Monthly cost: $10"
            >
              Heat Pump Water Heater (50–75 gal)
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_heatPump75") > -1){
                  removeFromActive("select_heatPump75");
                } else {
                  setActivePurchase([...activePurchase, "select_heatPump75"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_heatPump75 
                  ${
                    activePurchase.includes("select_heatPump75") && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 3.61 kWh&#10;Additional kWh/mo: 112 kWh&#10;Additional Monthly cost: $15"
            >
              Heat Pump Water Heater (>75 gal)
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_instant110") > -1){
                  removeFromActive("select_instant110");
                } else {
                  setActivePurchase([...activePurchase, "select_instant110"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_instant110 
                  ${
                    activePurchase.includes("select_instant110") && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 12.25 kWh&#10;Additional kWh/mo: 380 kWh&#10;Additional Monthly cost: $65"
            >
              Instantaneous (110 v 29 amp) @1gpm 70°F
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_instant240") > -1){
                  removeFromActive("select_instant240");
                } else {
                  setActivePurchase([...activePurchase, "select_instant240"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_instant240 
                  ${
                    activePurchase.includes("select_instant240") && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 0.38 kWh&#10;Additional kWh/mo: 12 kWh&#10;Additional Monthly cost: $2"
            >
              Instantaneous (240v 50amp) @2.5gpm 83°F
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_energyStar14") > -1){
                  removeFromActive("select_energyStar14");
                } else {
                  setActivePurchase([...activePurchase, "select_energyStar14"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_energyStar14 
                  ${
                    activePurchase.includes("select_energyStar14") &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 1.11 kWh&#10;Additional kWh/mo: 34.5 kWh&#10;Additional Monthly cost: $5"
            >
              Energy Star Refrigerator 14 cu. ft.
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_energyStar25") > -1){
                  removeFromActive("select_energyStar25");
                } else {
                  setActivePurchase([...activePurchase, "select_energyStar25"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_energyStar25 
                  ${
                    activePurchase.includes("select_energyStar25") &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 1.93 kWh&#10;Additional kWh/mo: 60 kWh&#10;Additional Monthly cost: $8"
            >
              Energy Star Refrigerator 25 cu. ft.
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_refrigerator1996") > -1){
                  removeFromActive("select_refrigerator1996");
                } else {
                  setActivePurchase([
                    ...activePurchase,
                    "select_refrigerator1996",
                  ]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_refrigerator1996 
                  ${
                    activePurchase.includes("select_refrigerator1996") &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 4.83 kWh&#10;Additional kWh/mo: 150 kWh&#10;Additional Monthly cost: $20"
            >
              Refrigerator frost-free, 15 cu. ft. (1996)
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_manualDefrost") > -1){
                  removeFromActive("select_manualDefrost");
                } else {
                  setActivePurchase([...activePurchase, "select_manualDefrost"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_manualDefrost 
                  ${
                    activePurchase.includes("select_manualDefrost") &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 2.90 kWh&#10;Additional kWh/mo: 90 kWh&#10;Additional Monthly cost: $12"
            >
              Freezer (manual defrost), 15 cu. ft.
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_electricWH") > -1){
                  removeFromActive("select_electricWH");
                } else {
                  setActivePurchase([...activePurchase, "select_electricWH"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_electricWH 
                  ${
                    activePurchase.includes("select_electricWH") &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 12.25 kWh&#10;Additional kWh/mo: 380 kWh&#10;Additional Monthly cost: $65"
            >
              Electric Water Heater
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_model3") > -1){
                  removeFromActive("select_model3");
                } else {
                  setActivePurchase([...activePurchase, "select_model3"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item select_model3 
                  ${activePurchase.includes("select_model3") && "solarbtn_selected"}`}
              title="Additional kWh/day: 5 kWh&#10;Additional kWh/mo: 140 kWh&#10;Additional Monthly cost: $20"
            >
              Model 3
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_modelS") > -1){
                  removeFromActive("select_modelS");
                } else {
                  setActivePurchase([...activePurchase, "select_modelS"]); 
                } 
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item select_modelS 
                  ${activePurchase.includes("select_modelS") && "solarbtn_selected"}`}
              title="Additional kWh/day: 7.5 kWh&#10;Additional kWh/mo: 210 kWh&#10;Additional Monthly cost: $30"
            >
              Model S
            </div>
            <div
              onClick={(event) => { 
                if(activePurchase.indexOf("select_modelX") > -1){
                  removeFromActive("select_modelX");
                } else {
                  setActivePurchase([...activePurchase, "select_modelX"]); 
                } 
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item select_modelX
                  ${
                    activePurchase.includes("select_modelX") &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 7.5 kWh&#10;Additional kWh/mo: 210 kWh&#10;Additional Monthly cost: $30"
            >
              Model X
            </div>
            <div
              onClick={(event) => {
                if(activePurchase.indexOf("select_modelY") > -1){
                  removeFromActive("select_modelY");
                } else {
                  setActivePurchase([...activePurchase, "select_modelY"]);
                }
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item select_modelY
                  ${
                    activePurchase.includes("select_modelY") &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 5 kWh&#10;Additional kWh/mo: 140 kWh&#10;Additional Monthly cost: $20"
            >
              Model Y
            </div>
          </div>
          {sumPurchases["kWHperDay"] > 0 ? (
            <div className="app_Solar_additions_details">
              <div>
                Additional kWh/day: <span>{sumPurchases.kWHperDay} kWh</span>
              </div>
              <div>
                Additional kWh/month:{" "}
                <span>{sumPurchases.kWHperMonth} kWh</span>
              </div>
              <div>
                Additional monthly cost (w/o Solar):{" "}
                <span>${sumPurchases.monthlyCost.toLocaleString("en-US")}</span>
              </div> 
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  ); 
}

export default SolarAddProduct;

