import React from 'react';
import './SolarCash.css';

const SolarCash = ({products}) => {
    return (
        <div className="solarCash_container"> 
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
    );
}

export default SolarCash;
