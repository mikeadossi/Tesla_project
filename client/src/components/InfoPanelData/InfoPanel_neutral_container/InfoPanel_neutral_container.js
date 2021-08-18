import React from "react";
import "./InfoPanel_neutral_container.css";

const InfoPanel_neutral_container = ({ 
  showComponent,
  whichComponent,
}) => { 
  
  return (
    <div className="InfoPanel_neutral_container_div">
      <div className="infoPanel_payments_div">
        <div
          className="infoPanel_section app_cursorPointer"
          onClick={() =>
            showComponent("InfoPanel_payments")
          }
        >
          PAYMENT
        </div>
      </div>
      <div className="infoPanel_incentives_div">
        <div
          className="infoPanel_section app_cursorPointer"
          onClick={() => showComponent("InfoPanel_incentives")}
        >
          INCENTIVES
        </div>
      </div>
      <div className="infoPanel_warranty_div">
        <div
          className="infoPanel_section app_cursorPointer"
          onClick={() => showComponent("InfoPanel_warranty")}
        >
          WARRANTY
        </div>
      </div>
      <div className="infoPanel_links_div">
        <div
          className="infoPanel_section app_cursorPointer"
          onClick={() => showComponent("InfoPanel_links")}
        >
          LINKS
        </div>
      </div>
    </div>
  );
};

export default InfoPanel_neutral_container;
