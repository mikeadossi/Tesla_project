import React, { Component } from 'react';
import './ProductMenu.css';
import { Link }  from 'react-router-dom';

class ProductMenu extends Component {
  render() {
    return (
      <div>
        <div className="productMenu_container">
          <div className="productMenu_btn_container">
            <Link to="/vehicles" className="">
              <h3 className="productMenu_btn vehicle_menu_btn">Vehicle</h3>
            </Link>
            <Link to="/solar" className="">
              <h3 className="productMenu_btn solar_menu_btn">Solar</h3>
            </Link>
          </div>
        </div>
        <div className="productMenu_loggedIn_container">
         <div className="productMenu_loggedIn">You are logged in!</div>
        </div>
      </div>
    );
  }
}

export default ProductMenu;