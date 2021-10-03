import React from "react";
import "./MobileNavCenter.css";
import { Link } from "react-router-dom";

const MobileNavCenter = () => {
  return (
    <div className="mobileNavCenter_container">
      <div>
        <div className="mobileNavCenter_brandname">
          <Link to="/" className="mobileNavCenter_link app_textdecorationNone">
            SIDEKICK
            <span className="headerLeft_brandname_beta"> BETA</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavCenter;
