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
  changeVehicleInterior,
  changeVehicleLayout,
  changeVehicleBattery,
  addTowHitch,
  toggleFSD,
  selectOffMenuAutopilot,
  usStateVehicleOrder,
}) => {
  const showComponent = (value) => {
    setVisibility({ [value]: true });
  };

  const [visibility, setVisibility] = useState({
    Cash: true,
    Lease: false,
    Loan: false,
  });

  const [activeColor, setActiveColor] = useState("");
  const [activeWheel, setActiveWheel] = useState("");
  const [activeInterior, setActiveInterior] = useState("");
  const [activeBattery, setActiveBattery] = useState("");
  const [activeLayout, setActiveLayout] = useState("");
  const [activeTowHitch, setActiveTowHitch] = useState(null);
  const [activePayment, setActivePayment] = useState("Cash");
  const [activeFSDSetting, setActiveFSDSetting] = useState("autopilot");
  const [activeOffMenuAutopilot, setActiveOffMenuAutopilot] = useState(
    "no_autopilot"
  );
  const [activeFormVals, setActiveFormVals] = useState({});
  const [error, setFormError] = useState(false);

  const handleClearField = (field) => {
    setActiveFormVals({
      ...activeFormVals,
      [field]: "",
    });
  };

  const handleFormChange = (field, value) => {
    setActiveFormVals({
      ...activeFormVals,
      [field]: value,
    });
  };

  const handlePaymentFormSubmit = () => {
    console.log("activeFormVals", activeFormVals);

    let formError = false;

    if (!activeFormVals["leaseTermLength"]) {
      formError = true;
    }

    setFormError(formError); 
  };

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
  const paintObject = teslaDetails["paint_options"];
  const paintObjectKeys = Object.keys(paintObject);

  const batteryObject = {
    standard_battery: teslaDetails.standard_battery,
    off_menu: teslaDetails.off_menu,
    long_range: teslaDetails.long_range,
    performance: teslaDetails.performance,
    plaid: teslaDetails.plaid,
  };

  const batteryObjectKeys = [
    "standard_battery",
    "off_menu",
    "long_range",
    "performance",
    "plaid",
  ];

  const vehicleBattery = renderedTesla["battery"][1]; // ex: "long_range"
  const wheelObject = teslaDetails[vehicleBattery]["wheel"];
  const wheelObjectKeys = Object.keys(wheelObject);

  const interiorObject = teslaDetails[vehicleBattery]["interior"];
  const interiorObjectKeys = Object.keys(interiorObject);

  const seatingObject = teslaDetails[vehicleBattery]["layout"];
  const seatingObjectKeys = Object.keys(seatingObject);

  // console.log('vehicleContent 1 -- ',vehicleContent);
  // console.log('vehicleContent 2 -- ',vehicleContent["vehicle_render"]["model3"]["batteries_pymt_object"]["long_range"] );
  // console.log('vehicleContent 2 -- ',vehicleContent["vehicle_render"]["model3"]["long_range"]["payment_obj"]);

  let towHitchPrice = teslaDetails[vehicleBattery]["tow_hitch"];
  if (towHitchPrice !== null) {
    towHitchPrice = teslaDetails[vehicleBattery]["tow_hitch"]["price"];
  }

  let selectedVehicleCpy = name;

  const offMenuObj =
    vehicleContent.vehicle_details["model3"]["off_menu"]["autopilot"];

  useEffect(() => {
    const color = vehicleContent.vehicle_render[selectedVehicleCpy]["paint"][0];
    setActiveColor(color);
    const wheel = vehicleContent.vehicle_render[selectedVehicleCpy]["wheel"][0];
    setActiveWheel(wheel);
    const interior =
      vehicleContent.vehicle_render[selectedVehicleCpy]["interior"][0];
    setActiveInterior(interior);
    const battery =
      vehicleContent.vehicle_render[selectedVehicleCpy]["battery"][1];
    setActiveBattery(battery);
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
      leaseAPR: vehicleContent.vehicle_render[selectedVehicleCpy]["apr"],
    });
  }, [vehicleContent, selectedVehicleCpy]);

  if (!renderedTesla) {
    return null;
  }

  const renderedTeslaImgFolder = renderedTesla.image_vehicle;
  const renderedTeslaImg = renderedTesla.vehicle_image;
  const renderedTowHitch = renderedTesla.tow_hitch;
  // console.log('lookit here renderedTesla - ',Object.keys(renderedTesla) );
  // console.log('lookit here renderedTesla - ',renderedTesla["model"] );
  // console.log('lookit here teslaDetails - ',Object.keys(teslaDetails) );

  const modelInfo = {
    modelName: name,
    modelBattery: vehicleBattery,
    configuredPrice: renderedTesla["cash_price"],
    pymtContent: renderedTesla["payment_object"],
  };

  // console.log('yolo: ',renderedTesla["batteries_pymt_object"])
  // console.log('vehicle and battery :',name,' ',vehicleBattery);
  // console.log('RT ----------=> ',renderedTesla["payment_object"]);
  // console.log('RT ----------=> ',renderedTesla["payment_object"]["cashDueAtDelivery"]);

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

            <div className="vehicleConfig_pricing_container">
              <div className="app_displayFlex app_Solar_selectPymt_div">
                <div
                  onClick={() => {
                    showComponent("Cash");
                    setActivePayment("Cash");
                  }}
                  className={`app_Solar_selectPymt_btn ${
                    activePayment == "Cash" && "selected_payment"
                  }`}
                >
                  Cash
                </div>
                <div
                  onClick={() => {
                    showComponent("Loan");
                    setActivePayment("Loan");
                  }}
                  className={`app_Solar_selectPymt_btn ${
                    activePayment == "Loan" && "selected_payment"
                  }`}
                >
                  Loan
                </div>
                <div
                  onClick={() => {
                    showComponent("Lease");
                    setActivePayment("Lease");
                  }}
                  className={`app_Solar_selectPymt_btn ${
                    activePayment == "Lease" && "selected_payment"
                  }`}
                >
                  Lease
                </div>
              </div>
              <div className="vehicleConfig_pricing_subcontainers">
                {visibility.Cash ? (
                  <VehicleCash
                    usStateVehicleOrder={usStateVehicleOrder}
                    vehicleContent={vehicleContent}
                    modelInfo={modelInfo}
                  />
                ) : (
                  ""
                )}
                {visibility.Loan ? (
                  <VehicleFinance
                    usStateVehicleOrder={usStateVehicleOrder}
                    vehicleContent={vehicleContent}
                    modelInfo={modelInfo}
                  />
                ) : (
                  ""
                )}
                {visibility.Lease ? (
                  <VehicleLeasing
                    usStateVehicleOrder={usStateVehicleOrder}
                    vehicleContent={vehicleContent}
                    modelInfo={modelInfo}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="vehicleConfig_selectCarAndColor_container">
              <div className="vehicleConfig_selectCar_container">
                <div>Select Battery: </div>
                <ul className="vehicleConfig_select_ul vehicleConfig_selectCar_ul">
                  <li className="vehicleConfig_select_srAndoff">
                    {batteryObjectKeys.map((batt) => {
                      if (batt === "off_menu" && batteryObject[batt] !== null) {
                        return (
                          <span
                            onClick={(event) => {
                              changeVehicleBattery(batt, selectedVehicle);
                              setActiveBattery(batt);
                            }}
                            className={`app_noSelect vehicleConfig_select vehicleConfig_select_off ${
                              activeBattery == batt && "selected_btn_alt"
                            }`}
                          >
                            Off
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
                            className={`app_noSelect vehicleConfig_select vehicleConfig_select_sr ${
                              activeBattery == batt && "selected_btn"
                            }`}
                          >
                            Standard
                          </span>
                        );
                      } else if (batteryObject[batt] == null) {
                        return;
                      } else {
                        return (
                          <li
                            onClick={(event) => {
                              changeVehicleBattery(batt, selectedVehicle);
                              setActiveBattery(batt);
                            }}
                            className={`app_noSelect vehicleConfig_select vehicleConfig_select ${
                              activeBattery == batt && "selected_btn"
                            }`}
                          >
                            {batteryObject[batt]["specs"]["Battery"]}
                          </li>
                        );
                      }
                    })}
                  </li>
                </ul>
              </div>
              <div className="vehicleConfig_selectColor_container">
                <div>Select Color: </div>
                <div className="vehicleConfig_select_ul vehicleConfig_selectColor_ul">
                  {paintObjectKeys.map((p) => (
                    <div
                      onClick={(event) => {
                        changeVehicleColor(p, selectedVehicle);
                        setActiveColor(p);
                      }}
                      className={`app_noSelect app_inlineFlex color_select_container ${
                        p === activeColor && "selected"
                      }`}
                    >
                      <img
                        className="color_select"
                        src={
                          `../../../../images/paint/` +
                          paintObject[p]["image_paint"].substring(1) +
                          `_paint.png`
                        }
                      />
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder={
                    renderedTesla.paint[0] + ` - ` + renderedTesla.paint[1]
                  }
                  className="app_noSelect app_removeBlue vehicleConfig_select_input vehicleConfig_selectColor_input"
                  readonly="readonly"
                />
              </div>
            </div>
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

            <div className="veicleConfig_userEntry_container">
              <div className="veicleConfig_userEntry_subcontainer">
                <div className="app_displayFlex app_Solar_selectPymt_div">
                  <div
                    onClick={() => {
                      showComponent("Cash");
                      setActivePayment("Cash");
                    }}
                    className={`app_Solar_selectPymt_btn ${
                      activePayment == "Cash" && "selected_payment"
                    }`}
                  >
                    Cash
                  </div>
                  <div
                    onClick={() => {
                      showComponent("Loan");
                      setActivePayment("Loan");
                    }}
                    className={`app_Solar_selectPymt_btn ${
                      activePayment == "Loan" && "selected_payment"
                    }`}
                  >
                    Loan
                  </div>
                  <div
                    onClick={() => {
                      showComponent("Lease");
                      setActivePayment("Lease");
                    }}
                    className={`app_Solar_selectPymt_btn ${
                      activePayment == "Lease" && "selected_payment"
                    }`}
                  >
                    Lease
                  </div>
                </div>
                <div className="vehicleConfig_userEntry_containers">
                  {visibility.Cash ? (
                    <Vehicle_userEntry_cash
                      usStateVehicleOrder={usStateVehicleOrder}
                      modelInfo={modelInfo}
                      activeFormVals={activeFormVals}
                      handleFormChange={handleFormChange}
                      error={error}
                      handleClearField={handleClearField}
                    />
                  ) : (
                    ""
                  )}
                  {visibility.Loan ? (
                    <Vehicle_userEntry_financing
                      usStateVehicleOrder={usStateVehicleOrder}
                      modelInfo={modelInfo}
                      activeFormVals={activeFormVals}
                      handleFormChange={handleFormChange}
                      error={error}
                      handleClearField={handleClearField}
                    />
                  ) : (
                    ""
                  )}
                  {visibility.Lease ? (
                    <Vehicle_userEntry_leasing
                      usStateVehicleOrder={usStateVehicleOrder}
                      modelInfo={modelInfo}
                      activeFormVals={activeFormVals}
                      handleFormChange={handleFormChange}
                      error={error}
                      handleClearField={handleClearField}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="vehicleConfig_submit_btn_container">
                <button className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_setAll_btn app_cursorPointer">
                  APPLY ALL
                </button>
                <button className="app_removeBlue app_noSelect vehicleConfig_control_btn vehicleConfig_reset_btn app_cursorPointer">
                  RESET
                </button>
                <button
                  onClick={handlePaymentFormSubmit}
                  className="app_removeBlue app_submit_btn app_noSelect vehicleConfig_control_btn vehicleConfig_submit_btn app_cursorPointer"
                >
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
