import React from "react";
import "./InfoPanel_payments.css";

const InfoPanel_payments = (props) => {
  const vehicleOrder = props.vehicleOrder;
  const stateAbbr = props.stateAbbr; 

  // make sure to include whether this state allows for net trade0in tax credit - www.realcartips.com/selling/010-states-that-allow-trade-in-tax-credit.shtml

  return (
    <div className="InfoPanel_charging_container">
      <div id="infoPanel_loaded_title">PAYMENTS</div>
      <div className="infoPanel_section_data infoPanel_payments_container">
        <div className="content_vehicle">
        {stateAbbr} Tesla Leasing:{" "}
          {vehicleOrder.leasing_available && (
            <span className="infoPanel_leasing_availability app_available">
              Available
            </span>
          )}
          {!vehicleOrder.leasing_available && (
            <span className="infoPanel_leasing_availability app_unavailable">
              Unavailable
            </span>
          )}
        </div>
        <div className="content_vehicle">
          {stateAbbr} Tesla Financing:{" "}
          {vehicleOrder.financing_available && (
            <span className="infoPanel_financing_availability app_available">
              Available
            </span>
          )}
          {!vehicleOrder.financing_available && (
            <span className="infoPanel_financing_availability app_unavailable">
              Unavailable
            </span>
          )}
        </div>
        <div className="content_neutral">{stateAbbr} State Tax: {vehicleOrder.state_tax_rate}%</div>
        <div className="content_vehicle">
          <h4>Registration</h4>
          <div>{vehicleOrder.registration.details}</div>
          <h4>Next Steps</h4>
          <div>{vehicleOrder.registration.next_steps}</div>
          <div className="app_source_footer">
            <a href={vehicleOrder.registration.source} target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
        <div className="content_solar"> 
          <div>
            {stateAbbr} Solar Panel Subscription:{" "}
            {vehicleOrder.solar_panel_subscription && (
              <span className="infoPanel_solar_availability app_available">
                Available
              </span>
            )}
            {!vehicleOrder.solar_panel_subscription && (
              <span className="infoPanel_solar_availability app_unavailable">
                Unavailable
              </span>
            )}
          </div>
          <div>{stateAbbr} State Tax: {vehicleOrder.state_tax_rate}%</div>
          <h4>Upgrades and ITC</h4>
          <div>
            Notice: There may be additional upgrades required, e.g., electric main
            panel, or hidden conduit.
          </div>
          <div>
            A Federal Investment Tax Credit (ITC) is generally available to anyone
            who purchases solar panels. Powerwall paired with solar, including
            existing solar PV systems, is a qualified expenditure. To be eligible
            for tax credits, you must have tax liability at least equal to the
            credit. Tesla does not guarantee incentive amounts or your
            eligibility. Please consult with a tax advisor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel_payments;
