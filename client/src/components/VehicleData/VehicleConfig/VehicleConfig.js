import React, { Component, useState } from "react";
import "./VehicleConfig.css";
import VehicleCash from "../../VehicleData/Vehicle_pymt/VehicleCash/VehicleCash";
import VehicleLeasing from "../../VehicleData/Vehicle_pymt/VehicleLeasing/VehicleLeasing";
import VehicleFinance from "../../VehicleData/Vehicle_pymt/VehicleFinance/VehicleFinance";
import Vehicle_userEntry_financing from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_financing/Vehicle_userEntry_financing";
import Vehicle_userEntry_leasing from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_leasing/Vehicle_userEntry_leasing";
import Vehicle_userEntry_cash from "../../VehicleData/Vehicle_userEntry/Vehicle_userEntry_cash/Vehicle_userEntry_cash";

const VehicleConfig = ({
  selectedVehicle,
  vehicleContent,
  removeModel,
  selectedColor,
  changeVehicleColor,
}) => {
  // const defaultColor = "white";
  const defaultWheel = "m3_aero_18";
  const defaultInterior = "black_interior";
  const defaultBattery = "standard";
  const defaultLayout = "5 seater";

  // const [selectedColor, setColor] = useState(defaultColor);
  const [selectedWheel, setWheel] = useState(defaultWheel);
  const [selectedInterior, setInterior] = useState(defaultInterior);
  const [selectedBattery, setBattery] = useState(defaultBattery);
  const [selectedLayout, setLayout] = useState(defaultLayout);

  const showComponent = (value) => {
    setVisibility({ [value]: true });
  };

  const [visibility, setVisibility] = useState({
    Cash: true,
    Lease: false,
    Loan: false,
  });

  const name = `${selectedVehicle}`.split(' ').map((iv , i)=> {
    if(i===0){
      return iv.toLowerCase();
    }
    return iv
  }).join('')

  const jsonobj = vehicleContent[name];

  if (!jsonobj) {
    return null;
  }
  console.log("jsonobj ---> ", vehicleContent);
  const jsonobj2 = jsonobj.vehicle_image;
  const jsonobj3 = jsonobj.image_vehicle;

  return (
    <div className="app_Config_container">
      <div className="app_configTitle app_displayFlex">
        <div className="vehicleConfig_vehicleName">{selectedVehicle}</div>
        <div className="vehicleConfig_header_options_container app_displayFlex">
          <div className="app_options_btn">Inventory</div>
          <div className="app_options_btn">Specs</div>
          <div
            className="vehicleConfig_close_container"
            onClick={() => removeModel(selectedVehicle.name)}
          >
            <img
              className="vehicleConfig_close"
              src="../../../../images/Nav/close_2.png"
              alt="close"
            ></img>
          </div>
        </div>
      </div>
      <div className="app_displayFlex">
        <div className="app_inlineFlex app_columns_width vehicleConfig_column1">
          <div className="vehicleConfig_columns_blockContent">
            <div className="vehicleConfig_modelName_container">
              <span className="vehicleConfig_modelName">
                {jsonobj.battery[0]}
              </span>
              <span className="vehicleConfig_modelPrice">
                Cash Price: ${jsonobj.cash_price}
              </span>
            </div>

            <div className="vehicleConfig_vehicleImg_container">
              <div>
                <div className="vehicleConfig_image_container">
                  <img
                    className="vehicleConfig_img"
                    src={
                      `../../../../images/` + jsonobj3 + `/` + jsonobj2 + `.png`
                    }
                    alt="model 3 image"
                  ></img>
                </div>

                <div className="app_Config_specs_container vehicleConfig_specs_container">
                  <div className="app_Config_spec vehicleConfig_range">
                    {jsonobj.miles_range} miles range
                  </div>
                  <div className="app_Config_spec vehicleConfig_topSpeed">
                    {jsonobj.mph} mph
                  </div>
                  <div className="app_Config_spec vehicleConfig_mph">
                    {jsonobj.zero_to_sixty_seconds}sec 0-60
                  </div>
                </div>
              </div>
            </div>

            <div className="vehicleConfig_pricing_container">
              <div className="app_displayFlex app_Solar_selectPymt_div">
                <div
                  onClick={() => showComponent("Cash")}
                  className="app_Solar_selectPymt_btn"
                >
                  Cash
                </div>
                <div
                  onClick={() => showComponent("Loan")}
                  className="app_Solar_selectPymt_btn"
                >
                  Loan
                </div>
                <div
                  onClick={() => showComponent("Lease")}
                  className="app_Solar_selectPymt_btn"
                >
                  Lease
                </div>
              </div>
              <div className="vehicleConfig_pricing_subcontainers">
                {visibility.Cash ? <VehicleCash /> : ""}
                {visibility.Loan ? <VehicleFinance /> : ""}
                {visibility.Lease ? <VehicleLeasing /> : ""}
              </div>
            </div>

            <div className="vehicleConfig_selectCarAndColor_container">
              <div className="vehicleConfig_selectCar_container">
                <div>Select Battery: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectCar_ul">
                  <li className="vehicleConfig_select_srAndoff">
                    <span
                      onClick={() => setBattery("standard")}
                      className={`app_noSelect vehicleConfig_select vehicleConfig_select_sr ${
                        selectedBattery == "standard" && "selected_btn"
                      }`}
                    >
                      Standard
                    </span>
                    <span
                      onClick={() => setBattery("offmenu")}
                      className={`app_noSelect vehicleConfig_select vehicleConfig_select_off ${
                        selectedBattery == "offmenu" && "selected_btn_alt"
                      }`}
                    >
                      Off
                    </span>
                  </li>
                  <li
                    onClick={() => setBattery("long_range")}
                    className={`app_noSelect vehicleConfig_select ${
                      selectedBattery == "long_range" && "selected_btn"
                    }`}
                  >
                    Long Range
                  </li>
                  <li
                    onClick={() => setBattery("performance")}
                    className={`app_noSelect vehicleConfig_select ${
                      selectedBattery == "performance" && "selected_btn"
                    }`}
                  >
                    Performance
                  </li>
                </ul>
              </div>
              <div className="vehicleConfig_selectColor_container">
                <div>Select Color: </div>
                <div className="vehicleConfig_select_ul vehicleConfig_selectColor_ul">
                  <div 
                    onClick={() =>
                      changeVehicleColor("white","Pearl White", selectedVehicle)
                    }
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedColor == "white" && "selected"
                    }`}
                  >
                    <img
                      className="color_select vehicleConfig_pearl_white_multicoat"
                      src="../../../../images/paint/white_paint.png"
                    />
                  </div>
                  <div 
                    onClick={() =>
                      changeVehicleColor("black","Solid Black", selectedVehicle)
                    }
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedColor == "black" && "selected"
                    }`}
                  >
                    <img
                      className="color_select vehicleConfig_solid_black"
                      src="../../../../images/paint/black_paint.png"
                    />
                  </div>
                  <div 
                    onClick={() =>
                      changeVehicleColor("silver","Midnight Silver", selectedVehicle)
                    }
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedColor == "silver" && "selected"
                    }`}
                  >
                    <img
                      className="color_select vehicleConfig_midnight_silver_metallic"
                      src="../../../../images/paint/silver_paint.png"
                    />
                  </div>
                  <div 
                    onClick={() =>
                      changeVehicleColor("blue","Deep Blue", selectedVehicle)
                    }
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedColor == "blue" && "selected"
                    }`}
                  >
                    <img
                      className="color_select vehicleConfig_deep_blue_metallic"
                      src="../../../../images/paint/blue_paint.png"
                    />
                  </div>
                  <div 
                    onClick={() =>
                      changeVehicleColor("red","Red Multicoat", selectedVehicle)
                    }
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedColor == "red" && "selected"
                    }`}
                  >
                    <img
                      className="color_select vehicleConfig_red_multicoat"
                      src="../../../../images/paint/red_paint.png"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder={jsonobj.paint[0] +` - `+jsonobj.paint[1]} 
                  className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectColor_input"
                  readonly="readonly"
                />
              </div>
            </div>

            <div className="vehicleConfig_selectWheelAndInterior_container">
              <div className="vehicleConfig_selectWheel_container">
                <div>Select Wheel: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectwheel_ul">
                  <div
                    onClick={() => setWheel("m3_aero_18")}
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedWheel == "m3_aero_18" && "selected"
                    }`}
                  >
                    <img
                      className="app_noSelect vehicleConfig_wheel_select vehicleConfig_18_inch_aero_wheels"
                      src="../../../../images/wheels/model3_aero_18.png"
                    />
                  </div>
                  <div
                    onClick={() => setWheel("m3_sport_19")}
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedWheel == "m3_sport_19" && "selected"
                    }`}
                  >
                    <img
                      className="app_noSelect vehicleConfig_wheel_select vehicleConfig_19_inch_sport_wheels"
                      src="../../../../images/wheels/model3_sport_19.png"
                    />
                  </div>
                </ul>
                <input
                  type="text"
                  placeholder='18" Aero wheels - incl.'
                  className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectWheel_input"
                  readonly="readonly"
                />
              </div>

              <div className="vehicleConfig_selectInteriorColor_container">
                <div>Select Interior Color: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectInteriorColor_ul">
                  <div
                    onClick={() => setInterior("black_interior")}
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedInterior == "black_interior" && "selected"
                    }`}
                  >
                    <img
                      className="app_noSelect color_select vehicleConfig_black_interior"
                      src="../../../../images/interior/black_interior.png"
                    />
                  </div>
                  <div
                    onClick={() => setInterior("white_interior")}
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      selectedInterior == "white_interior" && "selected"
                    }`}
                  >
                    <img
                      className="app_noSelect color_select vehicleConfig_white_interior"
                      src="../../../../images/interior/white_interior.png"
                    />
                  </div>
                </ul>
                <input
                  type="text"
                  placeholder="All black - included"
                  className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectInteriorColor_input"
                  readonly="readonly"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="app_config_border"></div>

        <div className="app_inlineFlex app_columns_width vehicleConfig_column2">
          <div className="vehicleConfig_columns_blockContent">
            <div className="vehicleConfig_selectLayout_and_autopilot_container">
              <div className="vehicleConfig_selectLayout_container">
                <div className="app_textalign">Select Layout: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectlayout_ul">
                  <li
                    onClick={() => setLayout("5 seater")}
                    className={`app_noSelect vehicleConfig_select layout_select vehicleConfig_5_seater ${
                      selectedLayout == "5 seater" && "selected_btn"
                    }`}
                  >
                    5 Seater - Included
                  </li>
                  <li
                    onClick={() => setLayout("6 seater")}
                    className={`app_noSelect vehicleConfig_select layout_select vehicleConfig_6_seater ${
                      selectedLayout == "6 seater" && "selected_btn"
                    }`}
                  >
                    6 Seater - $1,500
                  </li>
                  <li
                    onClick={() => setLayout("7 seater")}
                    className={`app_noSelect vehicleConfig_select layout_select vehicleConfig_6_seater ${
                      selectedLayout == "7 seater" && "selected_btn"
                    }`}
                  >
                    7 Seater - $3,000
                  </li>
                </ul>
              </div>

              <div className="vehicleConfig_autopilot_container">
                <div className="app_textalign">Select Autopilot: </div>
                <div>
                  <input
                    type="radio"
                    name="autopilot_radio"
                    value="No Autopilot"
                    className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_noAutopilot_radio"
                  ></input>
                  <span className="vehicleConfig_autopilot">No autopilot</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="autopilot_radio"
                    value="Autopilot"
                    className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_autopilot_radio"
                  ></input>
                  <span>Autopilot - $3,000</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="autopilot_radio"
                    value="Full Self Driving"
                    className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_fsd_radio"
                  ></input>
                  <span className="app_font11">
                    FSD &amp; Autopilot - $10,000
                  </span>
                </div>
              </div>
            </div>

            <div className="vehicleConfig_selectTowHitch_container">
              <ul className="vehicleConfig_select_ul vehicleConfig_selectTowHitch_ul">
                <input
                  type="checkbox"
                  className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_towHitch_checkbox"
                ></input>
                <span>Tow Hitch - $1,000</span>
              </ul>
            </div>

            <div className="vehicleConfig_incentives">
              <div>Incentives:</div>
              <p className="vehicleConfig_incentives_text">
                $2,000 or $4,500 rebate (based on income eligibility) for Model
                3 and Model Y*
                <br />
                $5,000 grant (based on income eligibility)*
                <br />
                Review eligibility prior to applying
                <br />
                $1,500 California Clean Fuel Reward for all new electric
                vehicles registered in California
              </p>
            </div>

            <div className="veicleConfig_userEntry_container">
              <div className="veicleConfig_userEntry_subcontainer">
                <div className="app_displayFlex app_Solar_selectPymt_div">
                  <div
                    onClick={() => showComponent("Cash")}
                    className="app_Solar_selectPymt_btn"
                  >
                    Cash
                  </div>
                  <div
                    onClick={() => showComponent("Loan")}
                    className="app_Solar_selectPymt_btn"
                  >
                    Loan
                  </div>
                  <div
                    onClick={() => showComponent("Lease")}
                    className="app_Solar_selectPymt_btn"
                  >
                    Lease
                  </div>
                </div>
                <div className="vehicleConfig_userEntry_containers">
                  {visibility.Cash ? <Vehicle_userEntry_cash /> : ""}
                  {visibility.Loan ? <Vehicle_userEntry_financing /> : ""}
                  {visibility.Lease ? <Vehicle_userEntry_leasing /> : ""}
                </div>
              </div>
              <div className="vehicleConfig_submit_btn_container">
                <button className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_setAll_btn app_cursorPointer">
                  APPLY ALL
                </button>
                <button className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_reset_btn app_cursorPointer">
                  RESET
                </button>
                <button className="app_removeBlue app_submit_btn app_noSelect vehicleConfig_control_btn vehicleConfig_submit_btn app_cursorPointer">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleConfig;
