import React, { useState, useEffect } from "react";
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
  changeVehicleColor,
  changeVehicleWheel,
  changeVehicleInterior
}) => {

  const defaultBattery = "standard";
  const defaultLayout = "5 seater";

  const showComponent = (value) => {
    setVisibility({ [value]: true });
  };

  const [visibility, setVisibility] = useState({
    Cash: true,
    Lease: false,
    Loan: false,
  });

  const [activeColor, setActiveColor] = useState('');
  const [activeWheel, setActiveWheel] = useState('');
  const [activeInterior, setActiveInterior] = useState('');


  const name = `${selectedVehicle}`.split(' ').map((iv , i)=> {
    if(i===0){
      return iv.toLowerCase();
    }
    return iv
  }).join('')

  const renderedTesla = vehicleContent.vehicle_render[name]; 
  const teslaDetails = vehicleContent.vehicle_details[name];
  const paintObject = teslaDetails["paint_options"];
  const paintObjectKeys = Object.keys(paintObject); 

  const vehicleBattery = renderedTesla["battery"][1]; // ex: "long_range"
  const wheelObject = teslaDetails[vehicleBattery]["wheel"];
  const wheelObjectKeys = Object.keys(wheelObject);

  const interiorObject = teslaDetails[vehicleBattery]["interior"];
  const interiorObjectKeys = Object.keys(interiorObject);

  const [selectedBattery, setBattery] = useState(defaultBattery);
  const [selectedLayout, setLayout] = useState(defaultLayout);

  let selectedVehicleCpy = selectedVehicle.replace(/ /g,'');
  selectedVehicleCpy = selectedVehicleCpy.replace('M', 'm');
   

  useEffect(() => {
    const color = vehicleContent.vehicle_render[selectedVehicleCpy]["paint"][0];
    setActiveColor(color);
    const wheel = vehicleContent.vehicle_render[selectedVehicleCpy]["wheel"][0];
    setActiveWheel(wheel);
    const interior = vehicleContent.vehicle_render[selectedVehicleCpy]["interior"][0];
    setActiveInterior(interior);
  }, [vehicleContent, selectedVehicleCpy])

  if (!renderedTesla) {
    return null;
  }

  const renderedTeslaImgFolder = renderedTesla.image_vehicle;
  const renderedTeslaImg = renderedTesla.vehicle_image;
  const renderedTowHitch = renderedTesla.tow_hitch;


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
                {renderedTesla.battery[0]}
              </span>
              <span className="vehicleConfig_modelPrice">
                Cash Price: ${renderedTesla.cash_price}
              </span>
            </div>

            <div className="vehicleConfig_vehicleImg_container">
              <div>
                <div className="vehicleConfig_image_container">
                  <img
                    className="vehicleConfig_img"
                    src={
                      `../../../../images/` + renderedTeslaImgFolder + `/` + renderedTeslaImg + `.png`
                    }
                    alt="model 3 image"
                  ></img>
                </div>

                <div className="app_Config_specs_container vehicleConfig_specs_container">
                  <div className="app_Config_spec vehicleConfig_range">
                    {renderedTesla.miles_range} miles range
                  </div>
                  <div className="app_Config_spec vehicleConfig_topSpeed">
                    {renderedTesla.mph} mph
                  </div>
                  <div className="app_Config_spec vehicleConfig_mph">
                    {renderedTesla.zero_to_sixty_seconds}sec 0-60
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
                {paintObjectKeys.map((p) => ( 
                  <div 
                    onClick={(event) =>
                    {
                      changeVehicleColor(p, selectedVehicle);
                      setActiveColor(p)
                    }
                    }
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      (p === activeColor) && "selected"
                    }`}
                  >
                    <img
                      className="color_select"
                      src={`../../../../images/paint/`+paintObject[p]["image_paint"].substring(1)+`_paint.png`}
                    />
                  </div>
                ))}
                </div>
                <input
                  type="text"
                  placeholder={renderedTesla.paint[0] +` - `+renderedTesla.paint[1]} 
                  className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectColor_input"
                  readonly="readonly"
                />
              </div>
            </div>

            <div className="vehicleConfig_selectWheelAndInterior_container">

              <div className="vehicleConfig_selectWheel_container">
                <div>Select Wheel: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectwheel_ul">
                  {wheelObjectKeys.map((w) => (
                    <div
                      onClick={(event) =>
                        { 
                          changeVehicleWheel(vehicleBattery, w, selectedVehicle);
                          setActiveWheel(w)
                        }
                      }
                      className={`app_noSelect app_inlineFlex color_select_container ${
                        (w === activeWheel) && "selected"
                      }`}
                    >
                      <img
                        className="app_noSelect vehicleConfig_wheel_select vehicleConfig_18_inch_aero_wheels" 
                        src={`../../../../images/wheels/`+wheelObject[w]["image_source"]+`.png`}
                      />
                    </div>
                  ))}
                </ul>
                <div className="yolo">
                  <input
                    type="text"
                    placeholder={renderedTesla.wheel[0]}
                    className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectWheel_input"
                    readonly="readonly"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={renderedTesla.wheel[1]}
                    className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectWheel_input"
                    readonly="readonly"
                  />
                </div>
              </div>

              <div className="vehicleConfig_selectInteriorColor_container">
                <div>Select Interior Color: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectInteriorColor_ul">
                  {interiorObjectKeys.map((i) => (
                    <div
                      onClick={(event) =>
                        { 
                          changeVehicleInterior(vehicleBattery, i, selectedVehicle);
                          setActiveInterior(i)
                        }
                      }
                      className={`app_noSelect app_inlineFlex color_select_container ${
                        (i === activeInterior) && "selected"
                      }`}
                    >
                      <img
                        className="app_noSelect color_select vehicleConfig_black_interior"
                        src={`../../../../images/interior/`+interiorObject[i]["image"]+`.png`}
                      />
                    </div>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder={renderedTesla.interior[0] +` - `+renderedTesla.interior[2]}
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

            <div>
              {
                (() => {
                  if(renderedTowHitch){
                    return  (<div className="vehicleConfig_selectTowHitch_container">
                      <ul className="vehicleConfig_select_ul vehicleConfig_selectTowHitch_ul">
                        <input
                          type="checkbox"
                          className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_towHitch_checkbox"
                        ></input>
                        <span>Tow Hitch - $1,000</span>
                      </ul>
                    </div>)
                  }
                })()
              }
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
