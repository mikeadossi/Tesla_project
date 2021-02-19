import React, { useState, useEffect } from "react"; 
import './VehicleSpecs.css';

const VehicleSpecs = () => {

  return (
    <div className="vehicleSpecs">
        <div>Vehicle Specifications</div>
        <div className="batteryOptionsContainer">
          <div className="batteryOption app_Menu_btn app_noSelect">Standard</div>
          <div className="batteryOption app_Menu_btn app_noSelect">Long Range</div>
          <div className="batteryOption app_Menu_btn app_noSelect">Plaid</div>
        </div>
        <div className="specsMainContainer">
          <div className="specsContainer specsContainerLeft">
            <div className="specSubContainer">
              <div className="specsHeading">General</div>
              <div className="specContainer darkerBacking"><div className="spec">Drivetrain</div><div className="specDetail">AWD</div></div>
              <div className="specContainer"><div className="spec">Curb Weight</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Ground Clearance (max)</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Ground Clearance (min):</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Staggered tires</div><div className="specDetail">No</div></div> 
              <div className="specContainer"><div className="spec">Tire type</div><div className="specDetail">All Season</div></div> 
              <div className="specContainer darkerBacking"><div className="spec">Dimensions</div><div className="specDetail">HxWxL</div></div>
              <div className="specContainer"><div className="spec">Towing Capacity</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Displays</div><div className="specDetail">15" Touchscreen</div></div>
              <div className="specContainer"><div className="spec">Supercharging Max/Pymt type</div><div className="specDetail">170 kW</div></div>
              <div className="specContainer darkerBacking"><div className="spec">Onboard charger max</div><div className="specDetail">7.6 kW (32A)</div></div>
            </div>
            <div className="specSubContainer">
              <div className="specsHeading">Interior Dimensions</div>
              <div className="specContainer darkerBacking"><div className="spec">Passenger Volume (cubic feet)</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Front Head Room</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Front Leg Room</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Front Shoulder Room</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Front Hip Room</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Second Row Head Room</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Second Row Leg Room</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Second Row Shoulder Room</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Second Row Hip Room</div><div className="specDetail"></div></div>
            </div> 
          </div>
          <div className="app_config_border specsBorder"></div>
          <div className="specsContainer specsContainerRight">
            <div className="specSubContainer">
              <div className="specsHeading">Cargo Area</div>
              <div className="specContainer darkerBacking"><div className="spec">Trunk Space (cubic feet)</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Cargo Area w/ Rear Seat Down</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Cargo Area w/ Rear Seat Up</div><div className="specDetail"></div></div>
            </div> 
            <div className="specSubContainer">
              <div className="specsHeading">Seats and Trim</div>
              <div className="specContainer darkerBacking"><div className="spec">Heated Seats (front and rear)</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Heated Steering Wheel</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Cooled Seats (front and rear)</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Cooled Steering Wheel</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Floormats</div><div className="specDetail"></div></div>
            </div>
            <div className="specSubContainer">
              <div className="specsHeading">Convenience</div> 
              <div className="specContainer darkerBacking"><div className="spec">Powerfold rear seats</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Powerlift gate</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Heated Door Mirrors</div><div className="specDetail"></div></div>
            </div>
            <div className="specSubContainer">
              <div className="specsHeading">Charging</div>
              <div className="specContainer darkerBacking"><div className="spec">Charge time 110v</div><div className="specDetail"></div></div>
              <div className="specContainer"><div className="spec">Charge time 240v</div><div className="specDetail"></div></div>
              <div className="specContainer darkerBacking"><div className="spec">Charge time Wall Connector</div><div className="specDetail"></div></div> 
            </div>
          </div>
        </div>
    </div>
  );
};

export default VehicleSpecs;