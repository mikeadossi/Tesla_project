import React, { Component } from 'react';
import './DynamicMenu.css'; 
import { Link }  from 'react-router-dom';

class DynamicMenu extends Component {
  render() {
    return (
      <div className="app_displayFlex dynamicMenu_container"> 
        <div className="dynamicMenu_locationDetails_section">
          <div className="dynamicMenu_containers">
            <div className="dynamicMenu_zipcode LocationDetails_element">90210</div>
            <div className="dynamicMenu_city LocationDetails_element">Beverly Hills, CA</div>
            <div className="dynamicMenu_county LocationDetails_element">Los Angeles county</div>
          </div> 
          <div className="dynamicMenu_containers dynamicMenu_container_2">
            <div className="dynamicMenu_areacode">(213)</div>
            <div className="dynamicMenu_areacode_subcontainer">
              <div className="dynamicMenu_areacode_subtext">area</div>
              <div className="dynamicMenu_areacode_subtext">code</div>
            </div> 
          </div>
          <div className="dynamicMenu_containers">
            <div className="dynamicMenu_time_digital">12:39 PM</div>
            <div className="dynamicMenu_timezone">Pacific Time</div>
          </div>
          <div className="dynamicMenu_containers">
            <div className="locationDetails_day">Monday</div>
            <div className="locationDetails_date">Oct. 26, 2020</div>
          </div>
          <div className="dynamicMenu_containers">
            <div className="dynamicMenu_region_name">BAY AREA</div>
            <div className="dynamicMenu_region_tag">Region</div>
          </div> 
          <div className="dynamicMenu_extra_links">
            <div className="dynamicMenu_projectSun">proj. sun</div>
            <div className="dynamicMenu_weather">weather</div>
          </div>
        </div>
        <div className="dynamicMenu_subcontainer">
          <div className="dynamicMenu_nav_section">
            <div className="app_removeBlue">
              <div className="app_inline-block">
                <input className="dynamicMenu_input app_main_submit_input" placeholder="enter zip/area code"></input>
                <button className="dynamicMenu_submit_btn app_submit_btn app_noSelect app_removeBlue">Submit</button>
              </div>
              <Link to="/" className="app_textdecorationNone app_inline-block dynamicMenu_home_link">
                <div className="dynamicMenu_home">SIDEKICK</div>
              </Link>
            </div> 
          </div>
          <div className="app_displayFlex dynamicMenu_productMenu_section">
            <Link to="/vehicles" className="dynamicMenu_product_select app_textdecorationNone">
              <div className="dynamicMenu_select_btn vehicle_select_btn">Vehicle</div>
            </Link>
            <Link to="/solar" className="dynamicMenu_product_select app_textdecorationNone">
              <div className="dynamicMenu_select_btn solar_select_btn">Solar</div>
            </Link>
          </div>
        </div> 
      </div>
    );
  }
}

export default DynamicMenu;