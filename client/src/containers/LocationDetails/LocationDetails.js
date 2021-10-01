import React from "react";
import "./LocationDetails.css";

const LocationDetails = ({ 
  zipcodeData,
  ourRegion,
  counties, 
  timeZone,
  today,
  areaCodes, 
  currentTime,
  weatherLink,
  sunroofLink,
}) => {

  return zipcodeData.id ? (
    <div className="locationDetails_container app_displayFlex">
      <div className="locationDetails_subcontainers locationDetails_subcontainer_1">
        <div className="LocationDetails_zipcode LocationDetails_element">
          {zipcodeData.id}
        </div>
        <div className="LocationDetails_city LocationDetails_element">
          {zipcodeData.city}, {zipcodeData.state_abbr}
        </div>
        <div className="LocationDetails_county LocationDetails_element">
          <select className="locationDetails_content app_removeBlue">
            {counties.map((county) => (
              <option key={county} value={county}>{county}</option>
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
                  <option key={areaCode} value={areaCode}>{areaCode}</option>
                ))}
              </select>
              )
            </div>
            <div className="locationDetails_areacode_subtext">area code</div>
          </div>
        ) : (
          <div>
            <div className="locationDetails_content_areacode">
              (
              <span className="locationDetails_areacode">{areaCodes[0]}</span>
              )
            </div>
            <div className="locationDetails_areacode_subtext">area code</div> 
          </div>
        )}
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_3">
        <div className="locationDetails_time_digital">{currentTime}</div>
        <div className="locationDetails_timezone">{timeZone}</div>
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_4">
        <div className="locationDetails_day">{today[0]}</div>
        <div className="locationDetails_date">{today[1]}</div>
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_4">
        <div className="locationDetails_region_name">{ourRegion}</div>
        <div className="locationDetails_region_tag">Region</div>
      </div>

      <div className="app_locationDetails_border"></div>

      <div className="locationDetails_subcontainers locationDetails_subcontainer_5">
        <a
          className="app_textdecorationNone locationDetails_icons locationDetails_projectSun_container"
          href={sunroofLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Project Sun</div>
          <img
            className="locationDetails_projectSun"
            src="../../../../images/Nav/project_sunroof_icon.png"
            alt="project sun"
          />
        </a>
        <a
          className="app_textdecorationNone locationDetails_icons"
          href={weatherLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Weather</div>
          <img
            className="locationDetails_weather"
            src="../../../../images/Nav/weather_icon.svg"
            alt="weather"
          />
        </a>
      </div>
    </div>
  ) : null;
};

export default LocationDetails;
