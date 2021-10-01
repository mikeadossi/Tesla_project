import React from "react";
import "./InfoPanelNeutralContainer.css";

const InfoPanelNeutralContainer = ({ showComponent, vOrder }) => {
  return (
    <div className="InfoPanelNeutralContainer_div">
      {vOrder ? (
        <div className="InfoPanelPayments_div">
          <div
            className="infoPanel_section app_cursorPointer"
            onClick={() => showComponent("InfoPanelPayments")}
          >
            PAYMENT
          </div>
        </div>
      ) : (
        ""
      )}
      {vOrder ? (
        <div className="InfoPanelIncentives_div">
          <div
            className="infoPanel_section app_cursorPointer"
            onClick={() => showComponent("InfoPanelIncentives")}
          >
            INCENTIVES
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="InfoPanelWarranty_div">
        <div
          className="infoPanel_section app_cursorPointer"
          onClick={() => showComponent("InfoPanelWarranty")}
        >
          WARRANTY
        </div>
      </div>
      <div className="InfoPanelLinks_div">
        <div
          className="infoPanel_section app_cursorPointer"
          onClick={() => showComponent("InfoPanelLinks")}
        >
          LINKS
        </div>
      </div>
    </div>
  );
};

export default InfoPanelNeutralContainer;
