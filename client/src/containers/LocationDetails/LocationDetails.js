import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./LocationDetails.css";
import moment from "moment-timezone";

const LocationDetails = ({ zipcodeData }) => {
  console.log('zipcodeData: ',zipcodeData)
  const counties = zipcodeData.county && zipcodeData.county.split(","); 
  const [currentTime, setCurrentTime] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const areaCodes = zipcodeData.area_codes && zipcodeData.area_codes.split(" / ");

  const checkTimezone = () => {
    let timeZ = zipcodeData.time_zone; 
    if(timeZ.indexOf("Pacific") > -1){
      return 'Pacific';
    } else if(timeZ.indexOf("Eastern") > -1){
      return 'Eastern';
    } else if(timeZ.indexOf("Mountain") > -1){
      return 'Mountain';
    } else if(timeZ.indexOf("Alaska") > -1){
      return 'Alaska';
    } else if(timeZ.indexOf("Hawaii") > -1){
      return 'Hawaii';
    } else if(timeZ.indexOf("Central") > -1){
      return 'Central';
    } else {
      return 'n/a';
    }
  };

  const getTime = {
    Pacific: "America/Los_Angeles",
    Eastern: "America/New_York",
    Mountain: "America/Pheonix",
    Alaska: "America/Juneau",
    Hawaii: "Pacific/Honolulu",
    Central: "America/Kentucky/Louisville",
  };

  useEffect(() => {
    if(zipcodeData.city){ 
      let timeZ =  checkTimezone();
      if(timeZ === 'n/a'){
        setCurrentTime("N/A");
        setTimeZone("");
      } else {
        setCurrentTime(moment().tz( getTime[timeZ] ).format("LT"));
        setTimeZone(timeZ);
        console.log('moment.tz.zonesForCountry(US): ',moment.tz.zonesForCountry('US'))
      }
    }
  }, [zipcodeData.city]);



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
        <div className="locationDetails_time_digital">{currentTime}</div>
        <div className="locationDetails_timezone">{timeZone}</div>
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
