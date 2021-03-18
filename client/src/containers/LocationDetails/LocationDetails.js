import React from "react";
import { connect } from "react-redux";
import "./LocationDetails.css";

const LocationDetails = ({
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
  const areaCodes = area_codes && area_codes.split(" / ");
  const counties = county && county.split(",");

  return id ? (
    <div className="locationDetails_container app_displayFlex">
      <div className="locationDetails_subcontainers locationDetails_subcontainer_1">
        <div className="LocationDetails_zipcode LocationDetails_element">
          {id}
        </div>
        <div className="LocationDetails_city LocationDetails_element">
          {city}, {state_abbr}
        </div>
        <div className="LocationDetails_county LocationDetails_element">
          <select className="locationDetails_content app_removeBlue">
            {counties.map((county) => (
              <option value={county}>{county}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_2">
        {areaCodes.length > 1 ? (
          <div>
            <div className="locationDetails_content_areacode">
              (
              <select className="locationDetails_content locationDetails_content_areacode app_removeBlue">
                {areaCodes.map((areaCode) => (
                  <option value={areaCode}>{areaCode}</option>
                ))}
              </select>
              )
            </div>
            <div className="locationDetails_areacode_subtext">area code</div>
          </div>
        ) : (
          <>
            <div className="locationDetails_areacode">{areaCodes[0]}</div>
            <div className="locationDetails_areacode_subtext">area code</div>
          </>
        )}
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_3">
        <div className="locationDetails_time_digital">12:39 PM</div>
        <div className="locationDetails_timezone">Pacific Time</div>
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_4">
        <div className="locationDetails_day">Monday</div>
        <div className="locationDetails_date">Oct. 26, 2020</div>
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_4">
        <div className="locationDetails_region_name">BAY AREA</div>
        <div className="locationDetails_region_tag">Region</div>
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_5">
        <a
          className="app_textdecorationNone locationDetails_icons locationDetails_projectSun_container"
          href="https://www.google.com/get/sunroof/building/42.399692/-71.128802/#?f=buy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Project Sun</div>
          <img
            className="locationDetails_projectSun"
            src="../../../../images/Nav/project_sunroof_icon.png"
            alt="project sun icon"
          />
        </a>
        <a
          className="app_textdecorationNone locationDetails_icons"
          href="https://www.wunderground.com/weather/us/ca/fremont/94555"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Weather</div>
          <img
            className="locationDetails_weather"
            src="../../../../images/Nav/weather_icon.svg"
            alt="weather icon"
          />
        </a>
      </div>
    </div>
  ) : null;
};

function mapStateToProps(state) {
  return {
    error: state.navReducer.error,
    zipcodeData: state.navReducer.zipcode_data,
  };
}

export default connect(mapStateToProps)(LocationDetails);
