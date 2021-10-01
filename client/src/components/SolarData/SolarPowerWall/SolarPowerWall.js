import React, { useState } from "react";
import "./SolarPowerWall.css";
import PowerwallCash from "../../SolarData/PowerwallPymt/PowerwallCash/PowerwallCash.js";
import PowerwallFinance from "../../SolarData/PowerwallPymt/PowerwallFinance/PowerwallFinance.js";

const SolarPowerWall = ({
  recommendedProducts,
  powerwallPricing,
  loan_pymts,
}) => {
  const products = { ...recommendedProducts };
  const [userPreferredPW, setUserPreferredPW] = useState(
    powerwallPricing[products["recommended_powerwalls"]]
  );
  const [activePWBtn, setActivePWBtn] = useState(
    products["recommended_powerwalls"]
  );
  const [activePWPayment, setActivePWPayment] = useState("Cash");

  const [pWVisibility, setPWVisibility] = useState({
    Cash: true,
    Loan: false,
  });

  const showPWComponent = (value) => {
    setPWVisibility({ [value]: true });
  };

  return (
    <div className="app_columns_width vehicleConfig_column2">
      <div className="app_configTitle app_displayFlex">
        <div className="app_productName">Powerwall</div>
      </div>
      <div className="app_Solar_Img_container solarPowerWall_Img_container">
        <div className="solar_image_container app_solar_image_container">
          <img
            className="solar_img"
            src="../../../../images/solar/powerwall.png"
            alt="powerwall"
          ></img>
        </div>

        <div className="app_Config_specs_container app_Solar_specs_container">
          {activePWBtn === products["recommended_powerwalls"] ? (
            <div className="app_Config_spec vehicleConfig_range">
              Recommended:{" "}
              <span>
                {powerwallPricing[products["recommended_powerwalls"]]["num"]}
              </span>
            </div>
          ) : (
            <div className="app_Config_spec vehicleConfig_range paint_red">
              Recommended:{" "}
              <span>
                {powerwallPricing[products["recommended_powerwalls"]]["num"]}
              </span>
            </div>
          )}
          <div className="app_Config_spec vehicleConfig_range">
            <span>{userPreferredPW["num"]}</span> Cost: $
            <span>{userPreferredPW["cash_price"].toLocaleString("en-US")}</span>
          </div>
        </div>
      </div>

      <div className="app_Solar_kw_div">
        <div className="app_displayFlex">
          <div
            onClick={(event) => {
              setActivePWBtn("select_1PW");
              setUserPreferredPW(powerwallPricing["select_1PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_1PW
                    ${activePWBtn === "select_1PW" && "solarbtn_selected"}
                  `}
          >
            1
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_2PW");
              setUserPreferredPW(powerwallPricing["select_2PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_2PW
                    ${activePWBtn === "select_2PW" && "solarbtn_selected"}
                  `}
          >
            2
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_3PW");
              setUserPreferredPW(powerwallPricing["select_3PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_3PW
                    ${activePWBtn === "select_3PW" && "solarbtn_selected"}
                  `}
          >
            3
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_4PW");
              setUserPreferredPW(powerwallPricing["select_4PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_4PW
                    ${activePWBtn === "select_4PW" && "solarbtn_selected"}
                  `}
          >
            4
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_5PW");
              setUserPreferredPW(powerwallPricing["select_5PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_5PW
                    ${activePWBtn === "select_5PW" && "solarbtn_selected"}
                  `}
          >
            5
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_6PW");
              setUserPreferredPW(powerwallPricing["select_6PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_6PW
                    ${activePWBtn === "select_6PW" && "solarbtn_selected"}
                  `}
          >
            6
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_7PW");
              setUserPreferredPW(powerwallPricing["select_7PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_7PW
                    ${activePWBtn === "select_7PW" && "solarbtn_selected"}
                  `}
          >
            7
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_8PW");
              setUserPreferredPW(powerwallPricing["select_8PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_8PW
                    ${activePWBtn === "select_8PW" && "solarbtn_selected"}
                  `}
          >
            8
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_9PW");
              setUserPreferredPW(powerwallPricing["select_9PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_9PW
                    ${activePWBtn === "select_9PW" && "solarbtn_selected"}
                  `}
          >
            9
          </div>
          <div
            onClick={(event) => {
              setActivePWBtn("select_10PW");
              setUserPreferredPW(powerwallPricing["select_10PW"]);
            }}
            className={`
                    app_seeMore_btn 
                    app_noSelect 
                    app_Solar_select_kw_btn 
                    select_10PW
                    ${activePWBtn === "select_10PW" && "solarbtn_selected"}
                  `}
          >
            10
          </div>
        </div>
      </div>
      <div className="app_Solar_costs_container">
        <div className="app_displayFlex app_Solar_selectPymt_div">
          <div
            onClick={() => {
              showPWComponent("Cash");
              setActivePWPayment("Cash");
            }}
            className={`app_Solar_selectPymt_btn ${
              activePWPayment === "Cash" && "selected_payment"
            }`}
          >
            Cash
          </div>
          <div
            onClick={() => {
              showPWComponent("Loan");
              setActivePWPayment("Loan");
            }}
            className={`app_Solar_selectPymt_btn ${
              activePWPayment === "Loan" && "selected_payment"
            }`}
          >
            Loan
          </div>
        </div>
        {pWVisibility.Cash ? (
          <PowerwallCash userPreferredPW={userPreferredPW} />
        ) : (
          ""
        )}
        {pWVisibility.Loan ? (
          <PowerwallFinance
            userPreferredPW={userPreferredPW}
            loan_pymts={loan_pymts}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SolarPowerWall;
