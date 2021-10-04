import React, { useState, useEffect } from "react";
import "./SolarPanels.css";
import SolarCash from "../../SolarData/SolarPymt/SolarCash/SolarCash.js";
import SolarFinance from "../../SolarData/SolarPymt/SolarFinance/SolarFinance.js";

const SolarPanels = ({
  recommendedProducts,
  solarRecommendations,
  setRecommendedProducts,
  panelOptions,
  recommendedSize,
  loan_pymts, 
}) => {
  const [activeSolarBtn, setActiveSolarBtn] = useState("");
  const products = { ...recommendedProducts };
  const [activeSPPayment, setActiveSPPayment] = useState("Cash");

  const [sPVisibility, setSPVisibility] = useState({
    Cash: true,
    Loan: false,
  });

  const showSPComponent = (value) => {
    setSPVisibility({ [value]: true });
  };

  useEffect(() => {
    setActiveSolarBtn(products["selected_btn"]);
  }, [products]);

  const userSelectedProduct = (v) => { 
    setActiveSolarBtn("select_" + v.substring(0, 2) + "kW");
    setRecommendedProducts(solarRecommendations[panelOptions[v]]);
  };

  var selectValue;
  switch(activeSolarBtn){
    case "select_20kW": selectValue = "20 kW"; break;
    case "select_24kW": selectValue = "24 kW"; break;
    case "select_28kW": selectValue = "28 kW"; break;
    case "select_32kW": selectValue = "32 kW"; break;
    default: selectValue = ""; break;
  }

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
            alt="solar panel"
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
                  ${activeSolarBtn === "select_4kW" && "solarbtn_selected"}`}
          >
            4.08 kW
          </div>
          <div
            onClick={(event) => {
              setActiveSolarBtn("select_8kW");
              userSelectedProduct("8 kW");
            }}
            className={`app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_8kw 
                  ${activeSolarBtn === "select_8kW" && "solarbtn_selected"}`}
          >
            8.16 kW
          </div>
          <div
            onClick={(event) => {
              setActiveSolarBtn("select_12kW");
              userSelectedProduct("12 kW");
            }}
            className={`app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_12kw 
                  ${activeSolarBtn === "select_12kW" && "solarbtn_selected"}`}
          >
            12.24 kW
          </div>
          <div
            onClick={(event) => {
              setActiveSolarBtn("select_16kW");
              userSelectedProduct("16 kW");
            }}
            className={`app_seeMore_btn app_noSelect app_Solar_select_kw_btn select_16kw 
                  ${activeSolarBtn === "select_16kW" && "solarbtn_selected"}`}
          >
            16.32 kW
          </div>
        </div>
        <div className="app_Solar_selectKwSize_div">
          {activeSolarBtn === "select_20kW" ||
          activeSolarBtn === "select_24kW" ||
          activeSolarBtn === "select_28kW" ||
          activeSolarBtn === "select_32kW" ? (
            <select
              className={`app_Solar_select app_removeBlue select_20kW select_24kW select_28kW select_32kW solarbtn_selected`}
              onChange={(event) => { 
                userSelectedProduct(event.target.value);
              }}
              value={selectValue}
            >
              <option value="20 kW">20.40 kW</option>
              <option value="24 kW">24.28 kW</option>
              <option value="28 kW">28.56 kW</option>
              <option value="32 kW">32.64 kW</option>
            </select>
          ) : (
            <select
              className={`app_Solar_select app_removeBlue select_20kW select_24kW select_28kW select_32kW`}
              onChange={(event) => {
                userSelectedProduct(event.target.value);
              }}
            >
              <option value="20 kW">20.40 kW</option>
              <option value="24 kW">24.28 kW</option>
              <option value="28 kW">28.56 kW</option>
              <option value="32 kW">32.64 kW</option>
            </select>
          )}
          <span> Select custom size </span>
        </div>
      </div>
      <div className="app_Solar_costs_container">
        <div className="app_displayFlex app_Solar_selectPymt_div">
          <div
            onClick={() => {
              showSPComponent("Cash");
              setActiveSPPayment("Cash");
            }}
            className={`app_Solar_selectPymt_btn ${
              activeSPPayment === "Cash" && "selected_payment"
            }`}
          >
            Cash
          </div>
          <div
            onClick={() => {
              showSPComponent("Loan");
              setActiveSPPayment("Loan");
            }}
            className={`app_Solar_selectPymt_btn ${
              activeSPPayment === "Loan" && "selected_payment"
            }`}
          >
            Loan
          </div>
        </div>
        {sPVisibility.Cash ? <SolarCash products={products} /> : ""}
        {sPVisibility.Loan ? (
          <SolarFinance
            products={products}
            loan_pymts={loan_pymts} 
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SolarPanels;
