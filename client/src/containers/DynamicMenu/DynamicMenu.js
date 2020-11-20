import React, { Component } from 'react';
import './DynamicMenu.css'; 
import { Link }  from 'react-router-dom'; 

class DynamicMenu extends Component {
  render() {
    return (
      <div className="app_displayFlex dynamicMenu_container"> 
        <div className="app_displayFlex dynamicMenu_locationDetails_section">
          <div className="dynamicMenu_containers">
            <div className="dynamicMenu_zipcode LocationDetails_element">90210</div>
            <div className="dynamicMenu_city LocationDetails_element">Beverly Hills, CA</div>
            <div className="dynamicMenu_county LocationDetails_element">Los Angeles county</div>
          </div> 

          <div className="app_locationDetails_border"></div>

          <div className="dynamicMenu_containers dynamicMenu_container_2">
            <div className="dynamicMenu_areacode">(213)</div>
            <div className="dynamicMenu_areacode_subcontainer">
              <div className="dynamicMenu_areacode_subtext">area</div>
              <div className="dynamicMenu_areacode_subtext">code</div>
            </div> 
          </div>

          <div className="app_locationDetails_border"></div>

          <div className="dynamicMenu_containers">
            <div className="dynamicMenu_time_digital">12:39 PM</div>
            <div className="dynamicMenu_timezone">Pacific Time</div>
          </div>

          <div className="app_locationDetails_border"></div>

          <div className="dynamicMenu_containers">
            <div className="locationDetails_day">Monday</div>
            <div className="locationDetails_date">Oct. 26, 2020</div>
          </div>

          <div className="app_locationDetails_border"></div>

          <div className="dynamicMenu_containers">
            <div className="dynamicMenu_region_name">BAY AREA</div>
            <div className="dynamicMenu_region_tag">Region</div>
          </div> 

          <div className="app_locationDetails_border"></div>

          <div className="dynamicMenu_extra_links">
            <a className="dynamicMenu_projectSun">Proj. Sun</a>
            <a className="dynamicMenu_weather">Weather</a>
          </div>
        </div>
        <div className="dynamicMenu_subcontainer">
          <div className="dynamicMenu_nav_section">
            <div className="app_removeBlue">
              <div className=" dynamicMenu_input_container app_inline-block">
                <input className="dynamicMenu_input app_main_submit_input" placeholder="enter zip/area code"></input> 
                <img className="app_search_icon dynamicMenu_search_icon" src="../../../../images/Nav/search_icon.png" alt="search icon" />
              </div>
              <Link to="/" className="app_textdecorationNone app_inline-block dynamicMenu_home_link">
                <div className="dynamicMenu_home">SIDEKICK <span className="headerLeft_brandname_beta">BETA</span></div>
              </Link>
              <img className="headerLeft_hamburger" src="../../../../images/Nav/hamburger.png" alt="menu" />
            </div> 
          </div>
          <div className="app_displayFlex dynamicMenu_productMenu_section">
            <div className="app_displayFlex dynamicMenu_productMenu_subcontainer">
              <Link to="/vehicles" className="dynamicMenu_product_select app_textdecorationNone">
                <div className="dynamicMenu_select_btn vehicle_select_btn">Vehicle</div>
              </Link>
              <Link to="/solar" className="dynamicMenu_product_select app_textdecorationNone">
                <div className="dynamicMenu_select_btn solar_select_btn">Solar</div>
              </Link>
            </div>
            <div className="dynamicMenu_pin_container">
              <img className="dynamicMenu_pin_icon" src="../../../../images/Nav/paper_pin.png" alt="pin icon" />
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default DynamicMenu;