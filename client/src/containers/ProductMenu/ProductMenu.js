import React, { Component } from 'react';
import './ProductMenu.css';
import { Link }  from 'react-router-dom';

class ProductMenu extends Component {
  render() {
    return (
      <div className="productMenu_container">
        <div className="productMenu_btn_container">
        <Link to="/vehicles" className="">
          <div className="productMenu_btn vehicle_menu_btn">Vehicle</div>
        </Link>
        <Link to="/solar" className="">
          <div className="productMenu_btn solar_menu_btn">Solar</div>
        </Link>
        </div>
      </div>
    );
  }
}

export default ProductMenu;