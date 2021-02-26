import React, { Component, useState, useEffect } from "react";
import "./DynamicMenu.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const DynamicMenu = ({
  zipcodeData: {
    id,
    city,
    state_abbr,
    state_name,
    state_data_id,
    area_codes,
    county,
    longitude,
    latitude,
  },
}) => {
  const [sticky, setSticky] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let lastScroll;

    const onScroll = () => {
      const scroll = window.scrollY;
      const scrollingUp = scroll < lastScroll;
      lastScroll = scroll;

      // console.log({ show });
      // console.log({ scroll, scrollingUp, show: scrollingUp && scroll > 139 });

      const element1 = document.querySelector(".sticky_productMenu").clientHeight;
      let element2 = 0;

      if(id){
        element2 = document.querySelector(".locationDetails_container").clientHeight;
      }

      const headerHeight = element1 + element2; 

      setShow((sticky || scrollingUp) && scroll > headerHeight);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [sticky,id]);

  // console.log("updated sticky", show);

  return id ? (
    <div
      className={`app_displayFlex dynamicMenu_container app_sticky_nav ${
        !show ? "hidden-menu" : ""
      }`}
    >
      <div className="app_displayFlex dynamicMenu_locationDetails_section">
        <div className="dynamicMenu_containers">
          <div className="dynamicMenu_zipcode LocationDetails_element">
            90210
          </div>
          <div className="dynamicMenu_city LocationDetails_element">
            Beverly Hills, CA
          </div>
          <div className="dynamicMenu_county LocationDetails_element">
            Los Angeles county
          </div>
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
              <input
                className="dynamicMenu_input app_main_submit_input"
                placeholder="enter zip/area code"
              ></input>
              <img
                className="app_search_icon dynamicMenu_search_icon"
                src="../../../../images/Nav/search_icon.png"
                alt="search icon"
              />
            </div>
            <Link
              to="/"
              className="app_textdecorationNone app_inline-block dynamicMenu_home_link"
            >
              <div className="dynamicMenu_home">
                SIDEKICK <span className="headerLeft_brandname_beta">BETA</span>
              </div>
            </Link>
            <img
              className="headerRight_hamburger"
              src="../../../../images/Nav/hamburger.png"
              alt="menu"
            />
          </div>
        </div>
        <div className="app_displayFlex dynamicMenu_productMenu_section">
          <div className="app_displayFlex dynamicMenu_productMenu_subcontainer">
            <Link
              to="/vehicles"
              className="dynamicMenu_product_select app_textdecorationNone"
            >
              <div className="dynamicMenu_select_btn vehicle_select_btn">
                VEHICLE
              </div>
            </Link>
            <Link
              to="/solar"
              className="dynamicMenu_product_select app_textdecorationNone"
            >
              <div className="dynamicMenu_select_btn solar_select_btn">
                SOLAR
              </div>
            </Link>
          </div>
          <div
            className={`dynamicMenu_pin_container ${
              sticky ? "active-pin" : ""
            }`}
            onClick={() => setSticky(!sticky)}
          >
            <img
              className="dynamicMenu_pin_icon"
              src="../../../../images/Nav/paper_pin.png"
              alt="pin icon"
            />
          </div>
        </div>
      </div>
    </div>
  ): null;
};

function mapStateToProps(state) {
  return {
    error: state.navReducer.error,
    zipcodeData: state.navReducer.zipcode_data,
  };
}

export default connect(mapStateToProps)(DynamicMenu);
