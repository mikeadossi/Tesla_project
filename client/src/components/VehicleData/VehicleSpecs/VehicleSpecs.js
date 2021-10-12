import React, { useEffect } from "react";
import "./VehicleSpecs.css";

const VehicleSpecs = ({
  selectedVehicle,
  vehicleContent,
  modelInfo,
  changeVehicleBattery,
  batteryObject,
  batteryObjectKeys,
  setActiveBattery,
  activeBattery,
  detailed_specs,
  touchscreen,
}) => {


  return (
    <div className="vehicleSpecs">
      <div>Vehicle Specifications</div>
      <div className="batteryOptionsContainer">
        {batteryObjectKeys.map((batt) => {
          if (batt === "off_menu" && batteryObject[batt] !== null) {
            return (
              <span
                onClick={(event) => {
                  changeVehicleBattery(batt, selectedVehicle);
                  setActiveBattery(batt);
                }}
                className={`batteryOption app_Spec_btn app_noSelect ${
                  activeBattery === batt && "selected_spec"
                }`}
              >
                Off Menu
              </span>
            );
          } else if (
            batt === "standard_battery" &&
            batteryObject[batt] !== null &&
            batteryObjectKeys.includes("off_menu")
          ) {
            return (
              <span
                onClick={(event) => {
                  changeVehicleBattery(batt, selectedVehicle);
                  setActiveBattery(batt);
                }}
                className={`batteryOption app_Spec_btn app_noSelect ${
                  activeBattery === batt && "selected_spec"
                }`}
              >
                Standard Range
              </span>
            );
          } else if (batteryObject[batt] === null) {
            if (activeBattery !== modelInfo["modelBattery"]) {
              setActiveBattery(modelInfo["modelBattery"]);
            }
            return;
          } else {
            return (
              <span
                onClick={(event) => {
                  changeVehicleBattery(batt, selectedVehicle);
                  setActiveBattery(batt);
                }}
                className={`batteryOption app_Spec_btn app_noSelect ${
                  activeBattery === batt && "selected_spec"
                }`}
              >
                {batteryObject[batt]["specs"]["Battery"]}
              </span>
            );
          }
        })}
      </div>
      <div className="specsMainContainer">
        <div className="specsContainer specsContainerLeft">
          <div className="specSubContainer">
            <div className="specsHeading">General</div>
            <div className="specContainer darkerBacking">
              <div className="spec">Drivetrain</div>
              <div className="specDetail">
                {detailed_specs.general_specs.drivetrain}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Curb Weight</div>
              <div className="specDetail">
                {detailed_specs.general_specs.curb_weight}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Ground Clearance (max)</div>
              <div className="specDetail">
                {detailed_specs.general_specs.ground_clearance_max}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Ground Clearance (min):</div>
              <div className="specDetail">
                {detailed_specs.general_specs.ground_clearance_min}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Staggered tires</div>
              <div className="specDetail">
                {detailed_specs.general_specs.staggered_tires}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Tire type</div>
              <div className="specDetail">
                {detailed_specs.general_specs.tire_type}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec_shrunk">Dimensions</div>
              <div className="specDetail">
                {detailed_specs.general_specs.dimensions}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Towing Capacity</div>
              <div className="specDetail">
                {detailed_specs.general_specs.towing_capacity}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Displays</div>
              <div className="specDetail">{touchscreen}</div>
            </div>
            <div className="specContainer">
              <div className="spec">Supercharging Max/Pymt type</div>
              <div className="specDetail">
                {detailed_specs.general_specs.supercharging_max_pymt_type}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec_shrunk">Onboard charger max</div>
              <div className="specDetail">
                {detailed_specs.general_specs.onboard_charger_max}
              </div>
            </div>
          </div>
          <div className="specSubContainer">
            <div className="specsHeading">Interior Dimensions</div>
            <div className="specContainer darkerBacking">
              <div className="spec">Passenger Volume (cubic feet)</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.passenger_volume_cubic_feet}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Front Head Room</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.front_head_room}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Front Leg Room</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.front_leg_room}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Front Shoulder Room</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.front_shoulder_room}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Front Hip Room</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.front_hip_room}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Second Row Head Room</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.second_row_head_room}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Second Row Leg Room</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.second_row_leg_room}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Second Row Shoulder Room</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.second_row_shoulder_room}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Second Row Hip Room</div>
              <div className="specDetail">
                {detailed_specs.interior_dimensions.second_row_hip_room}
              </div>
            </div>
          </div>
        </div>
        <div className="app_config_border specsBorder"></div>
        <div className="specsContainer specsContainerRight">
          <div className="specSubContainer">
            <div className="specsHeading">Cargo Area</div>
            <div className="specContainer darkerBacking">
              <div className="spec">Trunk Space (cubic feet)</div>
              <div className="specDetail">
                {detailed_specs.cargo_area.trunk_space_cubic_feet}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Cargo Area w/ Rear Seat Down</div>
              <div className="specDetail">
                {detailed_specs.cargo_area.cargo_area_rear_seat_down}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Cargo Area w/ Rear Seat Up</div>
              <div className="specDetail">
                {detailed_specs.cargo_area.cargo_area_rear_seat_up}
              </div>
            </div>
          </div>
          <div className="specSubContainer">
            <div className="specsHeading">Seats and Trim</div>
            <div className="specContainer darkerBacking">
              <div className="spec">Heated Seats (front and rear)</div>
              <div className="specDetail">
                {detailed_specs.seats_and_trim.heated_seats_front_and_rear}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Heated Steering Wheel</div>
              <div className="specDetail">
                {detailed_specs.seats_and_trim.heated_steering_wheel}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Cooled Seats (front and rear)</div>
              <div className="specDetail">
                {detailed_specs.seats_and_trim.cooled_seats_front_and_rear}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Cooled Steering Wheel</div>
              <div className="specDetail">
                {detailed_specs.seats_and_trim.cooled_steering_wheel}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Floormats</div>
              <div className="specDetail">
                {detailed_specs.seats_and_trim.floormats}
              </div>
            </div>
          </div>
          <div className="specSubContainer">
            <div className="specsHeading">Convenience</div>
            <div className="specContainer darkerBacking">
              <div className="spec">Powerfold rear seats</div>
              <div className="specDetail">
                {detailed_specs.convenience.powerfold_rear_seats}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Powerlift gate</div>
              <div className="specDetail">
                {detailed_specs.convenience.powerlift_gate}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Heated Door Mirrors</div>
              <div className="specDetail">
                {detailed_specs.convenience.heated_door_mirrors}
              </div>
            </div>
          </div>
          <div className="specSubContainer">
            <div className="specsHeading">Charging</div>
            <div className="specContainer darkerBacking">
              <div className="spec">Charge time 110v</div>
              <div className="specDetail">
                {detailed_specs.charging.charge_time_110v}
              </div>
            </div>
            <div className="specContainer">
              <div className="spec">Charge time 240v</div>
              <div className="specDetail">
                {detailed_specs.charging.charge_time_240v}
              </div>
            </div>
            <div className="specContainer darkerBacking">
              <div className="spec">Charge time Wall Connector</div>
              <div className="specDetail">
                {detailed_specs.charging.charge_time_wall_connector}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSpecs;
