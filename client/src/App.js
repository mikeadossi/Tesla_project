import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Nav from "./containers/Nav/Nav";
import LandingPageNav from "./containers/LandingPageNav/LandingPageNav";
import LogIn from "./containers/LogIn/LogIn";
import SignUp from "./containers/SignUp/SignUp";
import LocationDetails from "./containers/LocationDetails/LocationDetails";
import ProductMenu from "./containers/ProductMenu/ProductMenu";
import Footer from "./containers/Footer/Footer";
import Home from "./containers/Home/Home";
import Vehicles from "./containers/Vehicles/Vehicles";
import Solar from "./containers/Solar/Solar";
import DynamicMenu from "./containers/DynamicMenu/DynamicMenu";
import Notifications from "./containers/Notifications/Notifications";
import Settings from "./containers/Settings/Settings";
import Lost from "./containers/Lost/Lost";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import { connect } from "react-redux";
import { getMyZipcodeData } from "./config/actions/navActions";
import moment from "moment-timezone";
import axios from "axios";

const App = ({ zipcodeData }) => {
  const [menuVisibility, setMenuVisibility] = useState({
    mobileMenu: false,
    applyAllWarning: false,
    resetWarning: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [notifications, setNotifications] = useState(2);
  const [warnings, setWarnings] = useState({});
  const [ourRegion, setOurRegion] = useState("--");
  const [zipcode, setZipcode] = useState("83211");
  const [currentTime, setCurrentTime] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [today, setToday] = useState([]);
  const counties = zipcodeData.county && zipcodeData.county.split(",");
  const areaCodes =
    zipcodeData.area_codes && zipcodeData.area_codes.split(" / ");
  const [sunroofLink, setSunroofLink] = useState("");
  const [weatherLink, setWeatherLink] = useState("");

  const closeMobileMenu = () => {
    setMenuVisibility({
      mobileMenu: false,
      applyAllWarning: false,
      resetWarning: false,
    });
  };

  function inNorCalifornia(county) {
    const norCal = [
      "ALAMEDA",
      "ALPINE",
      "AMADOR",
      "BUTTE",
      "CALAVERAS",
      "COLUSA",
      "CONTRA COSTA",
      "DEL NORTE",
      "EL DORADO",
      "FRESNO",
      "GLENN",
      "HUMBOLDT",
      "INYO",
      "KINGS",
      "LAKE",
      "LASSEN",
      "MADERA",
      "MARIN",
      "MARIPOSA",
      "MENDOCINO",
      "MERCED",
      "MODOC",
      "MONO",
      "MONTEREY",
      "NAPA",
      "NEVADA",
      "PLACER",
      "PLUMAS",
      "SACRAMENTO",
      "SAN BENITO",
      "SAN FRANCISCO",
      "SAN JOAQUIN",
      "SAN MATEO",
      "SANTA CLARA",
      "SANTA CRUZ",
      "SHASTA",
      "SIERRA",
      "SISKIYOU",
      "SOLANO",
      "SONOMA",
      "STANISLAUS",
      "SUTTER",
      "TEHAMA",
      "TRINITY",
      "TULARE",
      "TUOLUMNE",
      "YOLO",
      "YUBA",
    ];
    return norCal.includes(county);
  }

  function changeRegion(state, county, vo, obj) {
    if (obj && obj["state_name"] === state) {
      if (state !== "California") {
        setOurRegion(vo.region);
      } else if (state === "California") {
        county = county.split(",")[0];
        if (inNorCalifornia(county)) {
          setOurRegion(vo.region[1].region); // 'Bay Area'
        } else {
          setOurRegion(vo.region[0].region); // 'Greater LA/SD'
        }
      }
    }
  }

  const checkTimezone = () => {
    let timeZ = zipcodeData.time_zone;
    if (timeZ.indexOf("Pacific") > -1) {
      return "Pacific";
    } else if (timeZ.indexOf("Eastern") > -1) {
      return "Eastern";
    } else if (timeZ.indexOf("Mountain") > -1) {
      return "Mountain";
    } else if (timeZ.indexOf("Alaska") > -1) {
      return "Alaska";
    } else if (timeZ.indexOf("Hawaii") > -1) {
      return "Hawaii";
    } else if (timeZ.indexOf("Central") > -1) {
      return "Central";
    } else {
      return "n/a";
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

  const calculateTime = (ourDate, ourTime) => {
    let tz = checkTimezone();
    tz = getTime[tz];

    let myDate = {
      date: ourDate + " " + ourTime,
      timezone_type: 3,
      timezone: tz,
    };
    let dt = moment(myDate.date, "YYYY-MM-DD");
    let day = dt.format("dddd"); // Monday
    let dateFull = dt.format("ll"); // Sep 17, 2021
    setToday([day, dateFull]);
  };

  const convertOffsetToDate = (offset) => {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + 3600000 * offset);

    return nd.toLocaleString(); // 9/17/2021, 1:45:10 AM
  };

  const getDateStr = (dateStr) => {
    let justDate = dateStr.split(",")[0];
    let justDateArr = justDate.split("/");

    // we need a 2 digit month, so for September - 09 > 9
    let checkNum = Number(justDateArr[0]);
    if (checkNum <= 10) {
      justDateArr[0] = "0" + justDateArr[0];
    }

    let newArr = [justDateArr[2], justDateArr[0], justDateArr[1]];
    justDate = newArr.join("-"); // 2021-09-17

    return justDate;
  };

  const getTimeStr = (dateStr) => {
    let timeStr = dateStr.split(", ")[1];
    timeStr = timeStr.split(" AM")[0];
    timeStr = timeStr.split(" PM")[0];
    let timeArr = timeStr.split(":");
    let num = Number(timeArr[0]) + 12;
    timeArr[0] = num;
    timeStr = timeArr.join(":");
    return timeStr; // 13:45:10
  };

  const calc = (offset) => {
    let str = convertOffsetToDate(offset); // 9/17/2021, 1:45:10 AM
    let date = getDateStr(str);
    let time = getTimeStr(str);
    calculateTime(date, time);
  };

  const handleWarning = async (val) => {
    if (!currentUser) {
      // val is returned as an array, ex: ["reset","true"] or ["applyAll","true"]
      if (val[1] === "true") {
        // set cookie for val[0] to val[1]
        console.log(val[0]+' is set to true!')
      }
      return;
    }

    let newWarnings = { ...warnings };
    let newCurrentUser = { ...currentUser };

    if (newWarnings[val] === "true") {
      newWarnings[val] = "false";
      newCurrentUser[val] = "false";
    } else if (newWarnings[val] === "false") {
      newWarnings[val] = "true";
      newCurrentUser[val] = "true";
    }
    setWarnings(newWarnings);
    setCurrentUser(newCurrentUser);

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const parcel = {
      id: newCurrentUser.id,
      ourKey: val,
      ourValue: newCurrentUser[val],
    };

    await axios.post(
      `http://localhost:3002/updateUserData`,
      parcel,
      axiosConfig
    );
  };

  useEffect(() => {
    // write code to pull notifications from DB (check for updates)
    // if there are updates use setNotifications
    console.log("check for notifications");
  }, []);

  useEffect(() => {
    if (currentUser) {
      setWarnings({
        apply_all_warning_on: currentUser["apply_all_warning_on"],
        reset_warning_on: currentUser["reset_warning_on"],
        notifications_on: currentUser["notifications_on"],
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (zipcodeData.city) {
      let timeZ = checkTimezone();
      if (timeZ === "n/a") {
        setCurrentTime("N/A");
        setTimeZone("");
      } else {
        setCurrentTime(moment().tz(getTime[timeZ]).format("LT"));
        setTimeZone(timeZ);
      }
    }
  }, [zipcodeData.city]);

  useEffect(() => {
    if(zipcodeData.city){
      let city = zipcodeData.city;
      city = city.replace(" ","_");
      setSunroofLink("https://www.google.com/get/sunroof/building/"+zipcodeData.latitude+"/"+zipcodeData.longitude+"/#?f=buy");
      setWeatherLink("https://www.wunderground.com/weather/us/"+zipcodeData.state_abbr+"/"+city+"/"+zipcodeData.id);
    }
  }, [zipcodeData.city]);

  useEffect(() => {
    if (zipcodeData.city) {
      let roughOffset = zipcodeData.time_zone; // "Pacific (GMT -08:00)"
      let offset = roughOffset.split("(GMT ");
      offset = offset[1].split(")");
      offset = offset[0]; // -08.00
      offset = offset.split("-0").join("-");
      offset = offset.split(":00")[0];
      calc(offset);
    }
  }, [zipcodeData.city]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          menuVisibility={menuVisibility}
          closeMobileMenu={closeMobileMenu}
          setErrorMessage={setErrorMessage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          notifications={notifications}
          warnings={warnings}
          changeRegion={changeRegion}
          zipcode={zipcode}
          setZipcode={setZipcode}
        />
        <LandingPageNav />
        <LocationDetails
          ourRegion={ourRegion}
          changeRegion={changeRegion}
          counties={counties}
          timeZone={timeZone}
          today={today}
          areaCodes={areaCodes}
          zipcodeData={zipcodeData}
          currentTime={currentTime}
          sunroofLink={sunroofLink}
          weatherLink={weatherLink}
        />
        <DynamicMenu
          ourRegion={ourRegion}
          counties={counties}
          timeZone={timeZone}
          today={today}
          areaCodes={areaCodes}
          zipcodeData={zipcodeData}
          currentTime={currentTime}
          zipcode={zipcode}
          setZipcode={setZipcode}
          sunroofLink={sunroofLink}
          weatherLink={weatherLink}
        />
        <ProductMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/notifications"
            component={() => (
              <Notifications
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            )}
          />
          <Route
            exact
            path="/settings"
            component={() => (
              <Settings
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setNotifications={setNotifications}
                warnings={warnings}
                setWarnings={setWarnings}
                handleWarning={handleWarning}
              />
            )}
          />
          <Route exact path="/lost" component={Lost} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route
            exact
            path="/vehicles"
            component={() => (
              <Vehicles
                changeRegion={changeRegion}
                zipcode={zipcode}
                currentUser={currentUser}
                handleWarning={handleWarning} 
              />
            )}
          />
          <Route exact path="/solar" component={() => <Solar />} />
          <Route
            exact
            path="/userLogin"
            component={() => (
              <LogIn
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                loading={loading}
                setLoading={setLoading}
                setCurrentUser={setCurrentUser}
              />
            )}
          />
          <Route
            exact
            path="/userSignup"
            component={() => (
              <SignUp
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                loading={loading}
                setLoading={setLoading}
              />
            )}
          />
        </Switch>
        <Footer currentUser={currentUser} />
      </BrowserRouter>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.navReducer.error,
    zipcodeData: state.navReducer.zipcode_data,
  };
}

export default connect(mapStateToProps, { getMyZipcodeData })(App);
