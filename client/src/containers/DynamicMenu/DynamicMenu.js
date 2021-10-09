import React, { useState, useEffect } from "react";
import "./DynamicMenu.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux"; 
import { TOGGLE_MOBILE_MENU } from "../../config/actions/types";

const DynamicMenu = ({
  ourRegion,
  counties,
  timeZone,
  today,
  areaCodes,
  zipcodeData,
  currentTime,
  zipcode,
  setzipcode,
  toggleMobileMenu, 
  weatherLink,
  sunroofLink,
  submitZipOrAreacode,
  activeCounty,
  activeAreacode,
  openNotification,
  toggleNotification,
}) => {
  const dispatch = useDispatch();
  const [sticky, setSticky] = useState(false);
  const [show, setShow] = useState(false);


  useEffect(() => {
    let lastScroll;
    
    const onScroll = () => {
      const scroll = window.scrollY;
      const scrollingUp = scroll < lastScroll;
      lastScroll = scroll;

      const element1 = document.querySelector(".sticky_productMenu")
        .clientHeight;
      let element2 = 0;

      if (zipcodeData.id) {
        element2 = document.querySelector(".locationDetails_container")
          .clientHeight;
      }

      const headerHeight = element1 + element2;

      if(toggleNotification === "open" && scroll > headerHeight){ 
        openNotification();
      }

      setShow((sticky || scrollingUp) && scroll > headerHeight);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [sticky, zipcodeData.id, toggleNotification]);


  return zipcodeData.id ? (
    <div
      className={`app_displayFlex dynamicMenu_container app_sticky_nav ${
        !show ? "hidden-menu" : ""
      }`}
    >
      <div className="app_displayFlex dynamicMenu_locationDetails_section">
        <div className="dynamicMenu_containers">
          <div className="dynamicMenu_zipcode LocationDetails_element">
            {zipcodeData.id}
          </div>
          <div className="dynamicMenu_city LocationDetails_element">
            {zipcodeData.city}, {zipcodeData.state_abbr}
          </div>
          <div className="dynamicMenu_county LocationDetails_element">
            {activeCounty}
          </div>
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="dynamicMenu_containers dynamicMenu_container_2">
          <div className="dynamicMenu_areacode">({activeAreacode})</div>
          <div className="dynamicMenu_areacode_subcontainer">
            <div className="dynamicMenu_areacode_subtext">area</div>
            <div className="dynamicMenu_areacode_subtext">code</div>
          </div>
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="dynamicMenu_containers">
          <div className="dynamicMenu_time_digital">{currentTime}</div>
          <div className="dynamicMenu_timezone">{timeZone}</div>
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="dynamicMenu_containers">
          <div className="locationDetails_day">{today[0]}</div>
          <div className="locationDetails_date">{today[1]}</div>
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="dynamicMenu_containers">
          <div className="dynamicMenu_region_name">{ourRegion}</div>
          <div className="dynamicMenu_region_tag">Region</div>
        </div>

        <div className="app_locationDetails_border"></div>

        <div className="dynamicMenu_extra_links">
          <a
            className="dynamicMenu_projectSun app_textdecorationNone"
            href={sunroofLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Proj. Sun
          </a>
          <a
            className="dynamicMenu_weather app_textdecorationNone"
            href={weatherLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather
          </a>
        </div>
      </div>
      <div className="dynamicMenu_subcontainer">
        <div className="dynamicMenu_nav_section">
          <div className="app_removeBlue">
            <div className=" dynamicMenu_input_container app_inline-block">
              <input
                className="dynamicMenu_input app_main_submit_input"
                placeholder="enter zip/area code"
                onChange={(e) => setzipcode(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    submitZipOrAreacode(zipcode)
                  }
                }}
              />
              <img
                onClick={() => {
                  submitZipOrAreacode(zipcode)
                }}
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
              onClick={() => toggleMobileMenu(dispatch)}
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
  ) : null;
};

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileMenu: (dispatch) => {
      dispatch({ type: TOGGLE_MOBILE_MENU });
    },
  };
}

export default connect(mapDispatchToProps)(DynamicMenu);

