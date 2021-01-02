import React, { Component } from "react";
import "./InfoPanel_payments.css";

const InfoPanel_payments = (props) => {
  const vehicleOrder = props.vehicleOrder;
  const stateAbbr = props.stateAbbr;

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
        <div className="content_neutral">{stateAbbr} State Tax: 7.5%</div>
        <div className="content_neutral">{stateAbbr} Local gov. Tax: ~2.5%</div>
        <div className="content_vehicle">{stateAbbr} Registration fees: $15-500</div>
        <div className="content_vehicle">{stateAbbr} Plate transfer fees: $65</div>
        <div className="content_vehicle">{stateAbbr} Title Fees: $0</div>
        <div className="content_solar">
          Notice: There may be additional upgrades required, e.g., electric main
          panel, or hidden conduit.
        </div>
        <div className="content_solar">
          A Federal Investment Tax Credit (ITC) is generally available to anyone
          who purchases solar panels. Powerwall paired with solar, including
          existing solar PV systems, is a qualified expenditure. To be eligible
          for tax credits, you must have tax liability at least equal to the
          credit. Tesla does not guarantee incentive amounts or your
          eligibility. Please consult with a tax advisor.
        </div>
        <div className="app_source_footer">
          <a
            href="https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel_payments;
