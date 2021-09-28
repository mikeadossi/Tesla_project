import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ currentUser }) => {
  let currYr = new Date().getFullYear();
  const [showEmailAddress, setShowEmailAddress] = useState("false");

  const toggleEmailAddress = () => {
    let bool;
    if (showEmailAddress === "false") {
      bool = "true";
    } else if (showEmailAddress === "true") {
      bool = "false";
    }
    setShowEmailAddress(bool);
  };

  return (
    <div>
      <div className="footer_container">
        <span
          className="footer_text footer_contact"
          onClick={() => toggleEmailAddress()}
        >
          {showEmailAddress === "true" ? (
            <span className="footer_text footer_email">
              tesla_sidekick@yahoo.com
            </span>
          ) : (
            ""
          )}
          Contact
        </span>
        <span>
          {currentUser && currentUser.user_email ? (
            <span>
              <Link
                to="/settings"
                className="footer_text app_textdecorationNone"
              >
                Settings
              </Link>
              <Link
                to="/notifications"
                className="footer_text app_textdecorationNone"
              >
                Notifications
              </Link>
            </span>
          ) : (
            ""
          )}
          <Link to="/" className="footer_text app_textdecorationNone">
            About
          </Link>
          <Link to="/vehicles" className="footer_text app_textdecorationNone">
            Vehicle
          </Link>
          <Link to="/solar" className="footer_text app_textdecorationNone">
            Solar
          </Link>
        </span>
        <span className="footer_text footer_project">© {currYr} Sidekick</span>
      </div>
    </div>
  );
};

export default Footer;
