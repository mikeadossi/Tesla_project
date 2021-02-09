import React, { useState, useEffect } from "react";
import "./VehicleConfig.css"; 
import VehicleConfigPricing from "../../VehicleData/VehicleConfigPricing/VehicleConfigPricing";
import VehicleConfigUserEntry from "../../VehicleData/VehicleConfigUserEntry/VehicleConfigUserEntry";
import VehicleBatteryAndPaint from "../../VehicleData/VehicleBatteryAndPaint/VehicleBatteryAndPaint";
import VehicleMenu from "../VehicleMenu/VehicleMenu";

const VehicleConfig = ({
  selectedVehicle,
  vehicleContent, 
  changeVehicleColor,
  changeVehicleWheel,
  changeVehicleInterior,
  changeVehicleLayout,
  changeVehicleBattery,
  addTowHitch,
  toggleFSD,
  selectOffMenuAutopilot,
  usStateVehicleOrder,
  populatePaymentObject,
  setUserPymtEntry,
  modelInfo,
  setTeslaModels
}) => {
  const showComponent = (value) => {
    setVisibility({ [value]: true });
  };

  const [visibility, setVisibility] = useState({
    Cash: true,
    Lease: false,
    Loan: false,
  });

  const [activeWheel, setActiveWheel] = useState("");
  const [activeInterior, setActiveInterior] = useState(""); 
  const [activeLayout, setActiveLayout] = useState("");
  const [activeTowHitch, setActiveTowHitch] = useState(null); 
  const [activeFSDSetting, setActiveFSDSetting] = useState("autopilot");
  const [activeOffMenuAutopilot, setActiveOffMenuAutopilot] = useState(
    "no_autopilot"
  );
  const [activeFormVals, setActiveFormVals] = useState({}); 

  const name = `${selectedVehicle}`
  .split(" ")
  .map((iv, i) => {
    if (i === 0) {
      return iv.toLowerCase();
    }
    return iv;
  })
  .join("");

  const renderedTesla = vehicleContent.vehicle_render[name];
  const teslaDetails = vehicleContent.vehicle_details[name];

  const vehicleBattery = renderedTesla["battery"][1]; // ex: "long_range"
  const wheelObject = teslaDetails[vehicleBattery]["wheel"];
  const wheelObjectKeys = Object.keys(wheelObject);

  const interiorObject = teslaDetails[vehicleBattery]["interior"];
  const interiorObjectKeys = Object.keys(interiorObject);

  const seatingObject = teslaDetails[vehicleBattery]["layout"];
  const seatingObjectKeys = Object.keys(seatingObject);

  let towHitchPrice = teslaDetails[vehicleBattery]["tow_hitch"];
  if (towHitchPrice !== null) {
    towHitchPrice = teslaDetails[vehicleBattery]["tow_hitch"]["price"];
  }

  let selectedVehicleCpy = name;

  const offMenuObj =
    vehicleContent.vehicle_details["model3"]["off_menu"]["autopilot"];

  useEffect(() => { 
    const wheel = vehicleContent.vehicle_render[selectedVehicleCpy]["wheel"][0];
    setActiveWheel(wheel);
    const interior =
      vehicleContent.vehicle_render[selectedVehicleCpy]["interior"][0];
    setActiveInterior(interior); 
    const layout =
      vehicleContent.vehicle_render[selectedVehicleCpy]["layout"][0];
    setActiveLayout(layout);
    const autopilotSetting =
      vehicleContent.vehicle_render[selectedVehicleCpy]["autopilot"][0];
    setActiveOffMenuAutopilot(autopilotSetting);
    const activeFSDSetting =
      vehicleContent.vehicle_render[selectedVehicleCpy]["autopilot"][0];
    setActiveFSDSetting(activeFSDSetting);
    const activeTowHitch =
      vehicleContent.vehicle_render[selectedVehicleCpy]["tow_hitch"];
    setActiveTowHitch(activeTowHitch);

    setActiveFormVals({
      ...activeFormVals,
      leaseInterestRate: vehicleContent.vehicle_render[selectedVehicleCpy]["payment_object"]["lease"]["leaseInterestRate"],
      loanApr: vehicleContent.vehicle_render[selectedVehicleCpy]["payment_object"]["finance"]["loanApr"]
    });
  }, [vehicleContent, selectedVehicleCpy]);

  if (!renderedTesla) {
    return null;
  }


  const renderedTeslaImgFolder = renderedTesla.image_vehicle;
  const renderedTeslaImg = renderedTesla.vehicle_image;
  const renderedTowHitch = renderedTesla.tow_hitch; 

  

  return (
      
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
                    `../../../../images/` +
                    renderedTeslaImgFolder +
                    `/` +
                    renderedTeslaImg +
                    `.png`
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


          <VehicleConfigPricing  
              vehicleContent={vehicleContent}
              usStateVehicleOrder={usStateVehicleOrder}
              modelInfo={modelInfo}
          />

          <VehicleBatteryAndPaint
              selectedVehicle={selectedVehicle}
              name={name}
              vehicleContent={vehicleContent}
              changeVehicleColor={changeVehicleColor} 
              renderedTesla={renderedTesla}
              teslaDetails={teslaDetails}
              changeVehicleBattery={changeVehicleBattery}
          />

        </div>
      </div>

      <div className="app_config_border"></div>











      <div className="app_inlineFlex app_columns_width vehicleConfig_column2">
        <div className="vehicleConfig_columns_blockContent">
          <div className="vehicleConfig_selectWheelAndInterior_container">
            <div className="vehicleConfig_selectWheel_container">
              <div>Select Wheel: </div>
              <ul className="vehicleConfig_select_ul vehicleConfig_selectwheel_ul">
                {wheelObjectKeys.map((w) => (
                  <div
                    onClick={(event) => {
                      changeVehicleWheel(vehicleBattery, w, selectedVehicle);
                      setActiveWheel(w);
                    }}
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      w === activeWheel && "selected"
                    }`}
                  >
                    <img
                      className="app_noSelect vehicleConfig_wheel_select vehicleConfig_18_inch_aero_wheels"
                      src={
                        `../../../../images/wheels/` +
                        wheelObject[w]["image_source"] +
                        `.png`
                      }
                    />
                  </div>
                ))}
              </ul>
              <div>
                <input
                  type="text"
                  placeholder={
                    renderedTesla.wheel[0].replace(" inch", '"') +
                    ` - ` +
                    renderedTesla.wheel[1]
                  }
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
                    onClick={(event) => {
                      changeVehicleInterior(
                        vehicleBattery,
                        i,
                        selectedVehicle
                      );
                      setActiveInterior(i);
                    }}
                    className={`app_noSelect app_inlineFlex color_select_container ${
                      i === activeInterior && "selected"
                    }`}
                  >
                    <img
                      className="app_noSelect color_select vehicleConfig_black_interior"
                      src={
                        `../../../../images/interior/` +
                        interiorObject[i]["image"] +
                        `.png`
                      }
                    />
                  </div>
                ))}
              </ul>
              <input
                type="text"
                placeholder={
                  renderedTesla.interior[0] +
                  ` - ` +
                  renderedTesla.interior[2]
                }
                className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectInteriorColor_input"
                readonly="readonly"
              />
            </div>
            <div className="vehicleConfig_borderBottom"></div>
          </div>













          {(() => {
            if (seatingObjectKeys.length > 1) {
              return (
                <div className="vehicleConfig_selectLayout_super">
                  <div className="vehicleConfig_selectLayout_container">
                    <div className="app_textalign">Select Layout: </div>
                    <ul className="vehicleConfig_select_ul vehicleConfig_selectlayout_ul">
                      {seatingObjectKeys.map((s) => {
                        if (seatingObjectKeys.length > 1) {
                          return (
                            <li
                              onClick={(event) => {
                                changeVehicleLayout(
                                  vehicleBattery,
                                  s,
                                  selectedVehicle
                                );
                                setActiveLayout(s);
                              }}
                              className={`app_noSelect vehicleConfig_select layout_select vehicleConfig_5_seater ${
                                activeLayout == s && "selected_btn"
                              }`}
                            >
                              {seatingObject[s]["altName"]} -{" "}
                              {seatingObject[s]["price"]}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                  <div className="vehicleConfig_borderBottom"></div>
                </div>
              );
            }
          })()}













          <div className="vehicleConfig_selectLayout_and_autopilot_container">
            {(() => {
              if (vehicleBattery === "off_menu") {
                return (
                  <div>
                    <div className="vehicleConfig_autopilot_container">
                      <div className="app_textalign">Select Autopilot: </div>
                      <div>
                        <input
                          onChange={(e) => {
                            const value = e.target.value; // ex: value = "no_autopilot"
                            selectOffMenuAutopilot(value);
                            setActiveOffMenuAutopilot(value);
                          }}
                          type="radio"
                          name="autopilot_radio"
                          checked={activeOffMenuAutopilot === "no_autopilot"}
                          value="no_autopilot"
                          className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_noAutopilot_radio"
                        ></input>
                        <span className="vehicleConfig_autopilot">
                          No autopilot
                        </span>
                      </div>
                      <div>
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            selectOffMenuAutopilot(value);
                            setActiveOffMenuAutopilot(value);
                          }}
                          type="radio"
                          name="autopilot_radio"
                          checked={
                            activeOffMenuAutopilot === "autopilot_charge"
                          }
                          value="autopilot_charge"
                          className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_autopilot_radio"
                        ></input>
                        <span>
                          Autopilot - $
                          {offMenuObj["autopilot_charge"]["price"]}
                        </span>
                      </div>
                      <div>
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            selectOffMenuAutopilot(value);
                            setActiveOffMenuAutopilot(value);
                          }}
                          type="radio"
                          name="autopilot_radio"
                          checked={
                            activeOffMenuAutopilot === "fsd_and_autopilot"
                          }
                          value="fsd_and_autopilot"
                          className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_fsd_radio"
                        ></input>
                        <span className="app_font11">
                          FSD &amp; Autopilot - $
                          {offMenuObj["fsd_and_autopilot"]["price"]}
                        </span>
                      </div>
                    </div>
                    <div className="vehicleConfig_borderBottom"></div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <div className="vehicleConfig_selectFSD_container">
                      <ul className="vehicleConfig_select_ul vehicleConfig_selectFSD_ul">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            toggleFSD(vehicleBattery, selectedVehicle);
                            setActiveFSDSetting(
                              value === "fsd" ? "autopilot" : "fsd"
                            );
                          }}
                          type="checkbox"
                          checked={activeFSDSetting === "fsd"}
                          value={activeFSDSetting}
                          className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_towHitch_checkbox"
                        ></input>
                        <span>Full Self Driving - $10,000</span>
                      </ul>
                    </div>
                    <div className="vehicleConfig_borderBottom"></div>
                  </div>
                );
              }
            })()}
          </div>












          <div>
            {(() => {
              if (renderedTowHitch !== null) {
                return (
                  <div className="vehicleConfig_selectTowHitch_container">
                    <ul className="vehicleConfig_select_ul vehicleConfig_selectTowHitch_ul">
                      <input
                        onChange={(e) => {
                          const value = e.target.value;
                          addTowHitch(vehicleBattery, selectedVehicle);
                          setActiveTowHitch(
                            value === towHitchPrice ? "null" : towHitchPrice
                          );
                        }}
                        type="checkbox"
                        checked={activeTowHitch === towHitchPrice}
                        value={activeTowHitch}
                        className="app_noSelect vehicleConfig_select vehicleConfig_accessory_select vehicleConfig_towHitch_checkbox"
                      ></input>
                      <span>Tow Hitch - $1,000</span>
                    </ul>
                  </div>
                );
              }
            })()}
          </div>











          <VehicleConfigUserEntry
              renderedTesla={renderedTesla}
              name={name}
              vehicleContent={vehicleContent}
              usStateVehicleOrder={usStateVehicleOrder}
              populatePaymentObject={populatePaymentObject}
              setUserPymtEntry={setUserPymtEntry}
              modelInfo={modelInfo}
              setTeslaModels={setTeslaModels}
          />

        </div>
      </div>
    </div> 
  );
};

export default VehicleConfig;
