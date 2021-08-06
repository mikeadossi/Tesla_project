import React, { useState, useEffect } from "react";
import "./SolarPanels.css";

const SolarPanels = ({
  recommendedProducts,
  solarRecommendations,
  setRecommendedProducts,
  panelOptions,
  recommendedSize,
  setActivePurchase,
  activePurchase,
  addFutureUserPurchases,
  sumPurchases,
}) => {
  const [activeSolarBtn, setActiveSolarBtn] = useState(""); 
  const products = recommendedProducts;


  useEffect(() => {
    setActiveSolarBtn(products["selected_btn"]);
  }, [products]);

  const userSelectedProduct = (v) => { 
    setRecommendedProducts(solarRecommendations[panelOptions[v]]);
  };

  return (
    <div className="app_columns_width vehicleConfig_column1">
      <div className="app_configTitle app_displayFlex">
        <div className="app_productName">Solar Panels</div>
      </div>
      <div className="app_Solar_Img_container">
        <div className="solar_image_container app_solar_image_container">
          <img
            className="solar_img"
            src="../../../../images/solar/solar_panels.png"
            alt="solar panel image"
          ></img>
        </div>

        <div className="app_Config_specs_container app_Solar_specs_container">
          {recommendedSize === products["recommended_size"] ? (
            <div className="app_Config_spec vehicleConfig_range">
              Recommended: {recommendedSize} kW
            </div>
          ) : (
            <div className="app_Config_spec vehicleConfig_range paint_red">
              Recommended: {recommendedSize} kW
            </div>
          )}
          <div className="app_Config_spec vehicleConfig_topSpeed">
            {products["recommended_size"]} kW = {products["kWh_per_day"]}{" "}
            kWh/day
          </div>
        </div>
      </div>

      <div className="app_Solar_kw_div">
        <div className="app_displayFlex">
          <div
            onClick={(event) => {
              setActiveSolarBtn("select_4kW"); 
              userSelectedProduct("4 kW");
            }}
            className={`app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_4kw 
                  ${activeSolarBtn == "select_4kW" && "solarbtn_selected"}`}
          >
            4.08 kW
          </div>
          <div
            onClick={(event) => {
              setActiveSolarBtn("select_8kW"); 
              userSelectedProduct("8 kW");
            }}
            className={`app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_8kw 
                  ${activeSolarBtn == "select_8kW" && "solarbtn_selected"}`}
          >
            8.16 kW
          </div>
          <div
            onClick={(event) => {
              setActiveSolarBtn("select_12kW"); 
              userSelectedProduct("12 kW");
            }}
            className={`app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_12kw 
                  ${activeSolarBtn == "select_12kW" && "solarbtn_selected"}`}
          >
            12.24 kW
          </div>
          <div
            onClick={(event) => {
              setActiveSolarBtn("select_16kW"); 
              userSelectedProduct("16 kW");
            }}
            className={`app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_16kw 
                  ${activeSolarBtn == "select_16kW" && "solarbtn_selected"}`}
          >
            16.32 kW
          </div>
        </div>
        <div className="app_Solar_selectKwSize_div"
          onClick={(event) => { 
            console.log('ev: ',event.target.value) 
            userSelectedProduct(event.target.value);
          }}
        >
          {
           activeSolarBtn === "select_20kW" || 
           activeSolarBtn === "select_24kW" || 
           activeSolarBtn === "select_28kW" || 
           activeSolarBtn === "select_32kW" 
           ? 
            <select
              className={`app_Solar_select app_removeBlue select_20kW select_24kW select_28kW select_32kW solarbtn_selected`}
            >
              <option value="20 kW">20.40 kW</option>
              <option value="24 kW">24.28 kW</option>
              <option value="28 kW">28.56 kW</option>
              <option value="32 kW">32.64 kW</option>
            </select>
          : 
            <select
              className={`app_Solar_select app_removeBlue select_20kW select_24kW select_28kW select_32kW`}
            >
              <option value="20 kW">20.40 kW</option>
              <option value="24 kW">24.28 kW</option>
              <option value="28 kW">28.56 kW</option>
              <option value="32 kW">32.64 kW</option>
            </select>
          }
          <span> Select custom size </span>
        </div>
      </div>
      <div className="app_Solar_costs_container">
        <div className="app_displayFlex app_Solar_selectPymt_div">
          <div className="app_Solar_selectPymt_btn">Cash</div>
          <div className="app_Solar_selectPymt_btn">Loan</div>
        </div>
        <div className="">
          <div className="app_Solar_cost_div">
            <span className="app_inline-block">
              {products["recommended_size"]} kW Solar Panels
            </span>
            <span className="app_inline-block app_Solar_cost">
              ${products["panel_cost"].toLocaleString("en-US")}
            </span>
          </div>
          <div className="app_Solar_cost_div">
            <span className="app_inline-block">Federal Tax Credit</span>
            <span className="app_inline-block app_Solar_cost">
              -${products["fed_credit"].toLocaleString("en-US")}
            </span>
          </div>
          <div className="app_Solar_cost_div">
            <span className="app_inline-block">Price After Incentives</span>
            <span className="app_inline-block app_Solar_cost">
              ${products["price_after_incentives"].toLocaleString("en-US")}
            </span>
          </div>
        </div>
      </div>

      <div className="app_Solar_additions_container">
        <div className="app_padding_bottom_10px">
          Add Future Purchase (hover for details)
        </div>
        <div>
          <div className="app_Solar_additions_select_div">
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_model3"]);
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item select_model3 
                  ${activePurchase == "select_model3" && "solarbtn_selected"}`}
            >
              Model 3
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_modelS"]);
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item select_modelS 
                  ${activePurchase == "select_modelS" && "solarbtn_selected"}`}
            >
              Model S
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_modelX"]);
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item select_modelX
                  ${activePurchase == "select_modelX" && "solarbtn_selected"}`}
            >
              Model X
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_modelY"]);
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item select_modelY
                  ${activePurchase == "select_modelY" && "solarbtn_selected"}`}
            >
              Model Y
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_electricWH"]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_electricWH 
                  ${
                    activePurchase == "select_electricWH" && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 12.25 kWh&#10;Additional kWh/mo: 380 kWh&#10;Additional Monthly cost: $65"
            >
              Electric Water Heater
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_heatPump50"]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_heatPump50 
                  ${
                    activePurchase == "select_heatPump50" && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 2.48 kWh&#10;Additional kWh/mo: 77 kWh&#10;Additional Monthly cost: $10"
            >
              Heat Pump Water Heater (50–75 gal)
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_heatPump75"]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_heatPump75 
                  ${
                    activePurchase == "select_heatPump75" && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 3.61 kWh&#10;Additional kWh/mo: 112 kWh&#10;Additional Monthly cost: $15"
            >
              Heat Pump Water Heater (>75 gal)
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_instant110"]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_instant110 
                  ${
                    activePurchase == "select_instant110" && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 12.25 kWh&#10;Additional kWh/mo: 380 kWh&#10;Additional Monthly cost: $65"
            >
              Instantaneous (110 v 29 amp) @1gpm 70°F
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_instant240"]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_instant240 
                  ${
                    activePurchase == "select_instant240" && "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 0.38 kWh&#10;Additional kWh/mo: 12 kWh&#10;Additional Monthly cost: $2"
            >
              Instantaneous (240v 50amp) @2.5gpm 83°F
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_energyStar14"]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_energyStar14 
                  ${
                    activePurchase == "select_energyStar14" &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 1.11 kWh&#10;Additional kWh/mo: 34.5 kWh&#10;Additional Monthly cost: $5"
            >
              Energy Star Refrigerator 14 cu. ft.
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_energyStar25"]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_energyStar25 
                  ${
                    activePurchase == "select_energyStar25" &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 1.93 kWh&#10;Additional kWh/mo: 60 kWh&#10;Additional Monthly cost: $8"
            >
              Energy Star Refrigerator 25 cu. ft.
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([
                  ...activePurchase,
                  "select_refrigerator1996",
                ]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_refrigerator1996 
                  ${
                    activePurchase == "select_refrigerator1996" &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 4.83 kWh&#10;Additional kWh/mo: 150 kWh&#10;Additional Monthly cost: $20"
            >
              Refrigerator frost-free, 15 cu. ft. (1996)
            </div>
            <div
              onClick={(event) => {
                setActivePurchase([...activePurchase, "select_manualDefrost"]);
                addFutureUserPurchases();
              }}
              className={`app_seeMore_btn app_noSelect app_Solar_additions_item app_Solar_pool_wider_btn select_manualDefrost 
                  ${
                    activePurchase == "select_manualDefrost" &&
                    "solarbtn_selected"
                  }`}
              title="Additional kWh/day: 2.90 kWh&#10;Additional kWh/mo: 90 kWh&#10;Additional Monthly cost: $12"
            >
              Freezer (manual defrost), 15 cu. ft.
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
              <div>
                New Recommended Size: <span>16.32 kW</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarPanels;
