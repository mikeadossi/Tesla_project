import React, { Component } from 'react';
import './VehicleCash.css';

const VehicleCash = () => {

  return (
    <div className="vehicleCash_container">
        <div className="vehicleConfig_pricing_subcontainer1 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_lease" >
                <div>Cash/Lease: </div>
                <div>$300/mo.</div>
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loan">
                <div>Loan: </div>
                <div>$200/mo.</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_tradein">
                <div>Trd Value: </div>
                <div>$100,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_tradeinPayoff">
                <div>Trd Payoff: </div>
                <div>$100,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_tradeinEquity">
                <div>Trd Equity: </div>
                <div>$100,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loanToValueRatio">
                <div>Loan to Value: </div>
                <div>100%</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_tradeinCashback">
                <div>Trd cashback: </div>
                <div>$100,000</div> 
            </div>
        </div>

        <div className="vehicleConfig_pricing_subcontainer2 app_inline-block">
            <div className="vehicleConfig_pricing vehicleConfig_stateFees">
                <div>CA Total Fees: </div>
                <div>$200,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_stateTax">
                <div>CA Tax: </div>
                <div>$3,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_leaseTax">
                <div>Lease Tax: </div>
                <div>$3,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_cashAmtDue">
                <div>Amt Due (CASH): </div>
                <div>$10,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_loanAmtDue">
                <div>Amt Due (LOAN): </div>
                <div>$1,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_leaseAmtDue">
                <div>Amt Due (LEASE): </div>
                <div>$1,000</div> 
            </div>
            <div className="vehicleConfig_pricing vehicleConfig_customerCashDown">
                <div>Cash Down Payment: </div>
                <div>$0</div>
            </div>
        </div>
    </div>
  );
}

export default VehicleCash;