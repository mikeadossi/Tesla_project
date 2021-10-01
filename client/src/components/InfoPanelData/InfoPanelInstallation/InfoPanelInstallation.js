import React from "react";
import "./InfoPanelInstallation.css";

const InfoPanelInstallation = () => {
  return (
    <div className="InfoPanel_charging_container">
      <div id="infoPanel_loaded_title">PREPARING FOR INSTALLATION</div>
      <div className="infoPanel_section_data InfoPanelInstallation_container">
        <ul>
          <li>
            Obtain approval from your Homeowner’s Association (HOA) if you are
            part of one.
          </li>
          <li>
            Ensure no other contractors or workers are on site during your solar
            installation. We cannot start installation if other workers are on
            site.
          </li>
          <li>
            Clear cars from your driveway and any breakable objects from your
            yard. Provide safe access to your electrical panel.
          </li>
          <li>
            Contact Tesla if work has been done to your home since you ordered
            your system.
          </li>
          <li>
            Ensure someone 18 years or older is home for the first hour of
            installation.
          </li>
          <li>
            Please keep any pets away from the installation area for their
            safety.
          </li>
          <li>Have your Wi-Fi network name and password handy.</li>
        </ul>
        <div className="app_source_footer">
          <a
            href="https://www.tesla.com/support/energy/solar-panels/going-solar/solar-panel-installation"
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

export default InfoPanelInstallation;
