import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch, useHistory } from "react-router-dom";
import Nav from "./containers/Nav/Nav";
import MobileNav from "./containers/MobileNav/MobileNav";
import LogIn from "./containers/LogIn/LogIn";
import SignUp from "./containers/SignUp/SignUp";
import LocationDetails from "./containers/LocationDetails/LocationDetails";
import ProductMenu from "./containers/ProductMenu/ProductMenu";
import Footer from "./containers/Footer/Footer";
import Home from "./containers/Home/Home";
import Vehicles from "./containers/Vehicles/Vehicles";
import Solar from "./containers/Solar/Solar";
import DynamicMenu from "./containers/DynamicMenu/DynamicMenu"; 
import Settings from "./containers/Settings/Settings";
import Lost from "./containers/Lost/Lost";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import { connect } from "react-redux";
import {
  getZipDataWithAreaCode,
  getNotifications,
  getMyZipcodeData,
  emptyZipcodeData,
} from "./config/actions/navActions";
import { getAllVehicles } from "./config/actions/vehicleActions";
import { getAllStateData } from "./config/actions/usStateActions";
import moment from "moment-timezone";
import axios from "axios";
import Cookies from "universal-cookie";
import HeaderCookiePermission from "./components/Header/HeaderCookiePermission/HeaderCookiePermission.js";
import {
  getTeslaData,
  populateMenu, 
} from "./containers/VehiclePanel/VehiclePanelMethods/moduleExports";
import { 
  UPDATE_VEHICLE_RENDER_DATA,
  LOAD_TESLA_DATA_BOOL,
  MENU_OPTIONS,
  VIEW_RENDERED_OPTIONS,
  VEHICLE_ORDER,
} from "./config/actions/types";

const App = ({
  zipcodeData,
  usStatesData,
  getMyZipcodeData,
  getZipDataWithAreaCode,
  emptyZipcodeData,
  getNotifications,
  notificationData,
  // setUsStateVehicleOrder,
  setTeslaModels,
  setMenuOptions,
  setLoadTeslaData,
  loadTeslaData,
  metaVehicleObj,
  // usStateVehicleOrder,
  setVehicleData,
}) => {
  const history = useHistory();
  const cookies = new Cookies();

  const [menuVisibility, setMenuVisibility] = useState({
    mobileMenu: false,
    applyAllWarning: false,
    resetWarning: false,
  });
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newNotificationsNum, setNewNotificationsNum] = useState(2);
  const [warnings, setWarnings] = useState({});
  const [ourRegion, setOurRegion] = useState("--");
  const [zipcode, setzipcode] = useState("83211");
  const [currentTime, setCurrentTime] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [today, setToday] = useState([]);
  const counties = zipcodeData.county && zipcodeData.county.split(","); 
  const areaCodes =
    zipcodeData.area_codes && zipcodeData.area_codes.split(" / "); 
  const [sunroofLink, setSunroofLink] = useState("");
  const [weatherLink, setWeatherLink] = useState("");
  const [alertUser, setAlertUser] = useState([]);
  // All alerts: user_entry, loggedIn_container, register_signup, register_login, 
  // register_settings, forgot_password, solarMenu, solarConfig
  const [showCookieAsk, setShowCookieAsk] = useState("");
  const [toggleNotification, setToggleNotification] = useState("closed");
  const [viewedNotifications, setViewedNotifications] = useState({});
  const [activeAreacode, setActiveAreacode] = useState("");
  const [activeCounty, setActiveCounty] = useState("");
  const [areaCodeInteraction, setAreaCodeInteraction] = useState("false");
  const [countyInteraction, setCountyInteraction] = useState("false");
  const [metaVehicles, setMetaVehicles] = useState({});
  const [usStateVehicleOrder, setUsStateVehicleOrder] = useState([]);


  const acceptZipOrAreacode = (val) => {
    if (val.length === 3 && Number(val)) {
      // 2 lines of code below ensures our DynamicMenu nav bar handles zip and areacode appropriately
      setAreaCodeInteraction('false');
      setCountyInteraction('false');

      getZipDataWithAreaCode(val);
    } else if (val.length < 6 && val.length > 3 && Number(val)) {
      // 1001 and 90210 are both valid zip codes, so we must allow for 4/5 digit zip codes

      setAreaCodeInteraction('false');
      setCountyInteraction('false');

      getMyZipcodeData(val);
    } else {
      setAlertUser([
        { "background-color": "indianred" },
        `${val} is an invalid zipcode/areacode`,
        "loggedIn_container",
      ]);
      setTimeout(function () {
        setAlertUser([]);
      }, 4000);
    }
  };

  const cookieStart = () => {
    if (cookies.get("doNotSetCookie")) {
      return;
    } else if (
      !cookies.get("hideResetWarning") &&
      !cookies.get("hideApplyAllWarning")
    ) {
      setShowCookieAsk("true");
    }
  };

  const closeMobileMenu = () => {
    setMenuVisibility({
      mobileMenu: false,
      applyAllWarning: false,
      resetWarning: false,
    });
  };

  const inNorCalifornia = (county) => {
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
  };

  const changeRegion = (state, county, vo, obj) => {
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
  };

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

  const updateDB = async (x, user) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const parcel = {
      id: user.id,
      ourKey: x,
      ourValue: user[x],
    };

    await axios.post(
      `http://localhost:3002/updateUserData`,
      parcel,
      axiosConfig
    );
  };

  const handleWarning = async (val) => {
    // this function tells redux whether to show one of 2 warning modals or not.
    // val is an array, ex: ["reset","true"] or ["applyAll","true"]

    if (!currentUser) {
      const hideResetWarning = cookies.get("hideResetWarning");
      const hideApplyAllWarning = cookies.get("hideApplyAllWarning");
      const cookieOne =
        hideResetWarning === "true" || hideResetWarning === "false";
      const cookieTwo =
        hideApplyAllWarning === "true" || hideApplyAllWarning === "false";

      if (hideResetWarning && cookieOne && cookieTwo) {
        if (val[0] === "reset") {
          cookies.set("hideResetWarning", val[1], { path: "/" });
        }
        if (val[0] === "applyAll") {
          cookies.set("hideApplyAllWarning", val[1], { path: "/" });
        }
      }
    } else if (currentUser) { 
      setVehicleData([]);

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

      updateDB(val, newCurrentUser);
    }
  };

  const submitZipOrAreacode = (zipcode) => {
    setzipcode("");

    if (Number(zipcode)) {
      acceptZipOrAreacode(zipcode);
    } else {
      setAlertUser([
        { "background-color": "indianred" },
        `${zipcode} is not a number`,
        "loggedIn_container",
      ]);
      setTimeout(function () {
        setAlertUser([]);
      }, 4000);
    }
  };

  const handleLogOut = () => {
    try {
      setCurrentUser(null);
      setAlertUser([
        { "background-color": "skyblue" },
        "You are successfully logged out",
        "loggedIn_container",
      ]);
      emptyZipcodeData();
      setTimeout(function () {
        setAlertUser([]);
      }, 3000);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };


async function getNeededStateData(abbr){ 
  await axios.get(
    `http://localhost:3002/statedata?abbr=${abbr}`
  ).then((usStatesData) => {
    const ussd = usStatesData.data[0];
    const vo = JSON.parse(ussd["vehicle_order"]);
    const po = JSON.parse(ussd["payment_object"]);

    setUsStateVehicleOrder([
      ussd["state_abbr"],
      zipcodeData["id"],
      vo,
      po,
    ]);

    changeRegion(
      zipcodeData.state_name,
      zipcodeData.county,
      vo,
      ussd
    );
  }) 
};

async function getEveryModel(){
  await axios.get(
    `http://localhost:3002/allModels`
  ).then((mv) => {
    setMetaVehicles(mv.data);
  }) 
};

  useEffect(() => {
    cookieStart(); 
  },[]);

  useEffect(() => {
    // if user isn't logged in ensure redux adheres to cookie settings
    if (!currentUser || currentUser === {}) {
      const hideResetWarning = cookies.get("hideResetWarning");
      const hideApplyAllWarning = cookies.get("hideApplyAllWarning");
      const cookieOne =
        hideResetWarning === "true" || hideResetWarning === "false";
      const cookieTwo =
        hideApplyAllWarning === "true" || hideApplyAllWarning === "false";

      if (hideResetWarning && cookieOne && cookieTwo) {
        const makeshiftWarningObj = {
          apply_all_warning_on: cookies.get("hideApplyAllWarning"),
          notifications_on: null, // restricted to logged in users
          reset_warning_on: cookies.get("hideResetWarning"),
        };

        // setWarnings(makeshiftWarningObj);
      }
    }
  }, []);

const getDateString = (ourDate) => {
  // ourDate may look like Tue Oct 05 2021 13:37:51 GMT-0700 (Pacific Daylight Time)
  // ourDate may also look like 2021-10-06T20:21:04.847Z
  let usefulDate;
  
  if(typeof(ourDate) !== "string"){
    ourDate = ourDate.toString();
  };

  if(ourDate.split('').includes('Z')){ 
    usefulDate = ourDate;
  } else { 
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let arr = [];
    ourDate = ourDate.split(' ');
    arr.push(ourDate[3]);
    const monthNum = monthsArr.indexOf(ourDate[1]) + 1;
    arr.push(monthNum);
    arr.push(ourDate[2]);
    usefulDate = arr.join('-'); // ex: 2021-10-06
    usefulDate = usefulDate+'T'+ourDate[4]+'.000Z'; // ex: 2021-10-06T20:21:04.000Z
  }
  return usefulDate;
}

const getSixDigitDate = (givenDate) => {
  // givenDate input = 2021-10-06T20:21:04.847Z
  // output = 10/06/21
  let result = []
  givenDate = givenDate.split('-');
  result.push(givenDate[1]);
  let day = givenDate[2].split('T')[0];
  result.push(day);
  let fourDigitYear = givenDate[0];
  let twoDigitYear = fourDigitYear.substr(fourDigitYear.length - 2)
  result.push(twoDigitYear);
  result = result.join('/');
  return result;
}

const getDaysSinceLastVisit = (lastVisit) => {
  let today = new Date();
  today = getDateString(today);
  today = getSixDigitDate(today);
  lastVisit = getSixDigitDate(lastVisit);

  today = new Date(today);
  lastVisit = new Date(lastVisit);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = today.getTime() - lastVisit.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}


const parseLocationData = (nd, user) => {
  if (nd && user !== null) { 
    const lastVisited = user.notifications_last_viewed_on; 
    const dateJoined = getDateString(user.date_joined); 
    let userVisit;
    if(lastVisited === null || lastVisited === "null"){
      userVisit = dateJoined; 
    } else {
      userVisit = getDateString(lastVisited); 
    }; 
    let notSeenNotifications = [];
    let alreadySeenNotifications = []; 
    nd.map((v) => { 
      const ndDate = v["notification_date"]; 
      if(ndDate > dateJoined){
        if (ndDate > userVisit) {
          v["daysSince"] = getDaysSinceLastVisit(userVisit);
          notSeenNotifications.push(v);
        } else if (ndDate <= userVisit) {
          v["daysSince"] = getDaysSinceLastVisit(userVisit);
          alreadySeenNotifications.push(v);
        }
      };
    });

    let num = notSeenNotifications.length;
    if(currentUser["viewed_welcome_notification"] === "false"){
      // every new user views 2 notifications upon visit
      num += 2;
    };

    setNewNotificationsNum(num);
    setViewedNotifications({notSeenNotifications, alreadySeenNotifications});
  }
};


  useEffect(() => {
    if (currentUser) {
      getNotifications();
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && notificationData) {
      parseLocationData(notificationData, currentUser);
    }
  }, [currentUser, notificationData]);

  useEffect(() => {
    if (currentUser) {
      setWarnings({
        apply_all_warning_on: currentUser["apply_all_warning_on"],
        reset_warning_on: currentUser["reset_warning_on"],
        notifications_on: currentUser["notifications_on"],
      });
    }
  }, [currentUser, setWarnings]);

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
    if (zipcodeData.city) {
      let city = zipcodeData.city;
      city = city.replace(" ", "_");
      setSunroofLink(
        "https://www.google.com/get/sunroof/building/" +
          zipcodeData.latitude +
          "/" +
          zipcodeData.longitude +
          "/#?f=buy"
      );
      setWeatherLink(
        "https://www.wunderground.com/weather/us/" +
          zipcodeData.state_abbr +
          "/" +
          city +
          "/" +
          zipcodeData.id
      );
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

  useEffect(() => {
    if(zipcodeData.state_abbr){
      getNeededStateData(zipcodeData.state_abbr)
      getEveryModel();
    }
  }, [zipcodeData.state_abbr])

  

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          menuVisibility={menuVisibility}
          closeMobileMenu={closeMobileMenu}
          currentUser={currentUser}
          newNotificationsNum={newNotificationsNum}
          warnings={warnings}
          changeRegion={changeRegion}
          zipcode={zipcode}
          setzipcode={setzipcode}
          submitZipOrAreacode={submitZipOrAreacode}
          alertUser={alertUser}
          setAlertUser={setAlertUser}
          handleLogOut={handleLogOut}
          toggleNotification={toggleNotification}
          setToggleNotification={setToggleNotification}
          setCurrentUser={setCurrentUser}
          updateDB={updateDB}
          viewedNotifications={viewedNotifications}
        /> 
        <MobileNav
          menuVisibility={menuVisibility}
          closeMobileMenu={closeMobileMenu}
          currentUser={currentUser}
          alertUser={alertUser}
          setAlertUser={setAlertUser}
          handleLogOut={handleLogOut}
        />
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
          setActiveAreacode={setActiveAreacode}
          setActiveCounty={setActiveCounty} 
          areaCodeInteraction={areaCodeInteraction}
          countyInteraction={countyInteraction}
          setAreaCodeInteraction={setAreaCodeInteraction}
          setCountyInteraction={setCountyInteraction}
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
          setzipcode={setzipcode}
          sunroofLink={sunroofLink}
          weatherLink={weatherLink}
          submitZipOrAreacode={submitZipOrAreacode}
          activeAreacode={activeAreacode}
          activeCounty={activeCounty}
        />
        <ProductMenu alertUser={alertUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/settings"
            component={() => (
              <Settings
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                warnings={warnings}
                handleWarning={handleWarning}
                alertUser={alertUser}
                setAlertUser={setAlertUser}
                loading={loading}
                setLoading={setLoading}
              />
            )}
          />
          <Route exact path="/lost" component={Lost} />
          <Route
            exact
            path="/forgotPassword"
            component={() => (
              <ForgotPassword
                alertUser={alertUser}
                setAlertUser={setAlertUser}
                loading={loading}
                setLoading={setLoading}
              />
            )}
          />
          <Route
            exact
            path="/vehicles"
            component={() => (
              <Vehicles 
                zipcode={zipcode}
                currentUser={currentUser}
                handleWarning={handleWarning}
                alertUser={alertUser}
                setAlertUser={setAlertUser}
                usStatesData={usStatesData} 
                metaVehicleObj={metaVehicles}
                usStateVehicleOrder={usStateVehicleOrder} 
              />
            )}
          />
          <Route 
            exact 
            path="/solar" 
            component={() => (
              <Solar 
                alertUser={alertUser} 
                setAlertUser={setAlertUser} 
                currentUser={currentUser} 
              />
            )} 
          />
          <Route
            exact
            path="/userLogin"
            component={() => (
              <LogIn
                loading={loading}
                setLoading={setLoading}
                setCurrentUser={setCurrentUser}
                alertUser={alertUser}
                setAlertUser={setAlertUser}
              />
            )}
          />
          <Route
            exact
            path="/userSignup"
            component={() => (
              <SignUp
                loading={loading}
                setLoading={setLoading}
                alertUser={alertUser}
                setAlertUser={setAlertUser}
              />
            )}
          />
          <Route exact path="*" component={Lost} />
        </Switch>
        <HeaderCookiePermission
          showCookieAsk={showCookieAsk}
          setShowCookieAsk={setShowCookieAsk}
        />
        <Footer currentUser={currentUser} />
      </BrowserRouter>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.navReducer.error,
    zipcodeData: state.navReducer.zipcode_data,
    notificationData: state.navReducer.notifications,
    loadTeslaData: state.vehiclesReducer.loadTeslaDataBool,
    metaVehicleObj: state.vehiclesReducer.everyVehicle,
    usStatesData: state.usStateReducer.usStatesData, 
  };
}

export default connect(mapStateToProps, {
  getMyZipcodeData,
  getZipDataWithAreaCode,
  emptyZipcodeData,
  getNotifications,
  getAllStateData, 
  setTeslaModels: (teslaModels) => (dispatch) =>
  dispatch({
    type: UPDATE_VEHICLE_RENDER_DATA,
    payload: teslaModels,
  }),
  setMenuOptions: (menuOptions) => (dispatch) =>
  dispatch({
    type: MENU_OPTIONS,
    payload: menuOptions,
  }),
  setLoadTeslaData: (loadTeslaData) => (dispatch) =>
  dispatch({
    type: LOAD_TESLA_DATA_BOOL,
    payload: loadTeslaData,
  }),
  setVehicleData: (vehicleData) => (dispatch) =>
  dispatch({
    type: VIEW_RENDERED_OPTIONS,
    payload: vehicleData,
  }),
  
})(App);
