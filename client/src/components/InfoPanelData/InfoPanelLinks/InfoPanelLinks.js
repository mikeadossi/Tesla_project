import React from "react";
import "./InfoPanelLinks.css";

const InfoPanelLinks = (props) => {
  const link =
    "https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=" +
    props.zipcode +
    "&range=200";

  return (
    <div className="InfoPanel_charging_container">
      <div id="infoPanel_loaded_title">LINKS</div>
      <div className="infoPanel_section_data InfoPanelLinks_container">
        {props.whichComponent === "vehicles" ? (
          <div className="content_vehicle">
            {props.vehicleOrder ? (
              <div className="InfoPanelLinks_div">
                <a
                  className="InfoPanelLinks app_textdecorationNone"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Inventory (w/ zipcode)
                </a>
              </div>
            ) : (
              ""
            )}
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.plugshare.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plug Share
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://chargehub.com/en/charging-stations-map.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chargehub
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.kbb.com/whats-my-car-worth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kelley Blue Book
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/support/mobile-service"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tesla Mobile Service
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/insurance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tesla Insurance
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/sites/default/files/model_3_owners_manual_north_america_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Model 3 Owners Manual
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/sites/default/files/model_s_owners_manual_north_america_en_us.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Model S Owners Manual
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/sites/default/files/model_x_owners_manual_north_america_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Model X Owners Manual
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/sites/default/files/model_y_owners_manual_north_america_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Model Y Owners Manual
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
        {props.whichComponent === "solar" ? (
          <div className="content_solar">
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/support/energy/solar-panels/learn/solar-price-match-guarantee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Price Match Guarantee
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/support/energy/solar-panels/learn/subscription-solar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solar Subscription
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/support/energy/powerwall/mobile-app/mobile-app-overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mobile App Overview
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/support/energy/solar-panels/learn/tesla-solar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Why Tesla Solar Panels
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/support/energy/solar-roof/learn/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solar Roof Overview
              </a>
            </div>
            <div className="InfoPanelLinks_div">
              <a
                className="InfoPanelLinks app_textdecorationNone"
                href="https://www.tesla.com/support/energy/powerwall/learn/incentives"
                target="_blank"
                rel="noopener noreferrer"
              >
                Energy Incentives
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InfoPanelLinks;
