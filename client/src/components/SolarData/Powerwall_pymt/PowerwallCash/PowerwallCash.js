import React, { Component } from 'react';
import './PowerwallCash.css';

const PowerwallCash = ({powerwallPricing}) => {
    return (
        <div className="powerwallCash_container"> 
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">{powerwallPricing["select_2PW"]["num"]}</span>
                <span className="app_inline-block app_Solar_cost">${powerwallPricing["select_2PW"]["pw_price"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Gateway</span>
                <span className="app_inline-block app_Solar_cost">${powerwallPricing["select_2PW"]["gateway_price"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Power Installation</span>
                <span className="app_inline-block app_Solar_cost">${powerwallPricing["select_2PW"]["install"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Cash Price</span>
                <span className="app_inline-block app_Solar_cost">${powerwallPricing["select_2PW"]["cash_price"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Federal Tax Credit</span>
                <span className="app_inline-block app_Solar_cost">-${powerwallPricing["select_2PW"]["fed_credit"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Price After Incentives (excludes sales tax)</span>
                <span className="app_inline-block app_Solar_cost">${powerwallPricing["select_2PW"]["price_after_incentives"].toLocaleString("en-US")}</span>
            </div>
        </div> 
    );
}

export default PowerwallCash;