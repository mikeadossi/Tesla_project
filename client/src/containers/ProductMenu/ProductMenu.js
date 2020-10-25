import React, { Component } from 'react';
import './ProductMenu.css'; 

class ProductMenu extends Component {
  render() {
    return (
      <div className="productMenu_container">
        <div className="prductMenu_btn_container">
            <div className="productMenu_btn vehicle_menu_btn">Vehicle</div>
            <div className="productMenu_btn solar_menu_btn">Solar</div>
        </div>
      </div>
    );
  }
}

export default ProductMenu;