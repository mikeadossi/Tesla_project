import React from 'react';
import './PowerwallFinance.css';

const PowerwallFinance = ({ 
    userPreferredPW,
    loan_pymts, 
}) => {

    console.log('userPreferredPW -- ',userPreferredPW)

    return (
        <div className="powerwallFinance_container"> 
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">{userPreferredPW["num"]}</span>
                <span className="app_inline-block app_Solar_cost">${userPreferredPW["pw_price"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Gateway</span>
                <span className="app_inline-block app_Solar_cost">${userPreferredPW["gateway_price"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Power Installation</span>
                <span className="app_inline-block app_Solar_cost">${userPreferredPW["install"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Cash Price</span>
                <span className="app_inline-block app_Solar_cost">${userPreferredPW["cash_price"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Federal Tax Credit</span>
                <span className="app_inline-block app_Solar_cost">-${userPreferredPW["fed_credit"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Price After Incentives (excludes sales tax)</span>
                <span className="app_inline-block app_Solar_cost">${userPreferredPW["price_after_incentives"].toLocaleString("en-US")}</span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Est. Loan Payment</span>
                <span className="app_inline-block app_Solar_cost">
                    ${Math.ceil(loan_pymts(userPreferredPW["cash_price"])[0]).toLocaleString("en-US")}/mo
                </span>
            </div>
            <div className="app_Solar_cost_div">
                <span className="app_inline-block">Loan After Est. Incentives</span>
                <span className="app_inline-block app_Solar_cost">
                    ${Math.ceil(loan_pymts(userPreferredPW["cash_price"])[1]).toLocaleString("en-US")}/mo
                </span>
            </div>
            <div className="solar_small_print">
              ${Math.ceil(loan_pymts(userPreferredPW["cash_price"])[2]).toLocaleString("en-US")} down, 120 months, 2.99% APR
          </div>
        </div> 
    );
}

export default PowerwallFinance;