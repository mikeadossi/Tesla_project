import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./LocationDetails.css";
import moment from "moment-timezone";

const LocationDetails = ({ zipcodeData }) => {
  const counties = zipcodeData.county && zipcodeData.county.split(","); 
  const [currentTime, setCurrentTime] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [today, setToday] = useState([]);

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
      }
    }
  }, [zipcodeData.city]);

  function calculateTime(ourDate, ourTime) {
    let tz =  checkTimezone();
    tz = getTime[tz];

    let myDate = { date: ourDate+" "+ourTime, timezone_type: 3, timezone: tz}
    let dt = moment(myDate.date, "YYYY-MM-DD")
    let day = dt.format('dddd') // Monday
    let dateFull = dt.format('ll'); // Sep 17, 2021
    setToday([day, dateFull]);
  }

  function convertOffsetToDate(offset){
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    return nd.toLocaleString(); // 9/17/2021, 1:45:10 AM 
  };

  function getDateStr(dateStr){ 
    let justDate = dateStr.split(',')[0];
    let justDateArr = justDate.split('/');

    // we need a 2 digit month, so for September - 09 > 9
    let checkNum = Number(justDateArr[0]);
    if(checkNum <= 10){
      justDateArr[0] = '0'+justDateArr[0];
    }
    
    let newArr = [justDateArr[2], justDateArr[0], justDateArr[1]];
    justDate = newArr.join('-'); // 2021-09-17

    return justDate;
  }

  function getTimeStr(dateStr){
    let timeStr = dateStr.split(', ')[1];
    timeStr = timeStr.split(' AM')[0];
    timeStr = timeStr.split(' PM')[0];
    let timeArr = timeStr.split(':');
    let num = Number(timeArr[0]) + 12
    timeArr[0] = num;
    timeStr = timeArr.join(":"); 
    return timeStr; // 13:45:10
  }

  function calc(offset) {
    let str = convertOffsetToDate(offset); // 9/17/2021, 1:45:10 AM
    let date = getDateStr(str);
    let time = getTimeStr(str);
    calculateTime(date, time);
  }

  useEffect(() => {
    if(zipcodeData.city){
      // console.log('zzz: ',zipcodeData.time_zone)
      let roughOffset = zipcodeData.time_zone; // "Pacific (GMT -08:00)" 
      let offset = roughOffset.split('(GMT ');
      offset = offset[1].split(')');
      offset = offset[0]; // -08.00
      offset = offset.split('-0').join('-');
      offset = offset.split(':00')[0];
      // console.log('offset: ',offset) // -8 (one hour ahead)
    
      // console.log('calculate offset: ',calc(offset) );
      calc(offset);
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
        <div className="locationDetails_day">{today[0]}</div>
        <div className="locationDetails_date">{today[1]}</div>
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
