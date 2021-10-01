import React from 'react';
import './SolarFinance.css';

const SolarFinance = ({
    products,
    loan_pymts,
}) => {

    return (
        <div className="solarFinance_container"> 
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
          <div className="app_Solar_cost_div">
            <span className="app_inline-block">Est. Loan Payment</span>
            <span className="app_inline-block app_Solar_cost">
              ${Math.ceil(loan_pymts(products["panel_cost"])[0]).toLocaleString("en-US")}/mo
            </span>
          </div>
          <div className="app_Solar_cost_div">
            <span className="app_inline-block">Loan After Est. Incentives</span>
            <span className="app_inline-block app_Solar_cost">
              ${Math.ceil(loan_pymts(products["panel_cost"])[1]).toLocaleString("en-US")}/mo
            </span>
          </div>
          <div className="solar_small_print">
              ${Math.ceil(loan_pymts(products["panel_cost"])[2]).toLocaleString("en-US")} down, 120 months, 2.99% APR
          </div>
        </div> 
    );
}

export default SolarFinance;