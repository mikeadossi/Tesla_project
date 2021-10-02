import React, { useState } from "react";
import "./ProductMenu.css";
import { Link } from "react-router-dom";

const ProductMenu = () => {
  const [alertUser, setAlertUser] = useState([]);
  // [{"background-color": "darkseagreen"},"You are logged in!"]

  return (
    <div className="sticky_productMenu">
      <div className="productMenu_container">
        <div className="productMenu_subcontainer app_displayFlex">
          <div className="productMenu_hamburger_container">
            <img
              className="productMenu_hamburger_btn"
              src="../../../../images/Nav/hamburger_grey.png"
              alt="menu"
            />
          </div>
          <div className="productMenu_btn_container">
            <Link to="/vehicles" className="">
              <div className="productMenu_btn vehicle_menu_btn">VEHICLE</div>
            </Link>
            <Link to="/solar" className="">
              <div className="productMenu_btn solar_menu_btn">SOLAR</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="productMenu_loggedIn_container" style={alertUser[0]}>
        <div className="productMenu_loggedIn">{alertUser[1]}</div>
      </div>
    </div>
  );
};

export default ProductMenu;
