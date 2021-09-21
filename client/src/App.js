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


function App() { 

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
  const [zipcode, setZipcode] = useState('83211');

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
      "YUBA"
    ];
    return norCal.includes(county);
  }

  function changeRegion(state, county, vo, obj) {
    if(obj && obj["state_name"] === state){ 

      if(state !== 'California') {
        setOurRegion(vo.region);  
      } else if(state === 'California'){
        county = county.split(",")[0]; 
        if(inNorCalifornia(county)){
          setOurRegion(vo.region[1].region); // 'Bay Area'  
        } else {
          setOurRegion(vo.region[0].region); // 'Greater LA/SD' 
        }
      };

    }
    
  }

  useEffect(() => {
    // write code to pull notifications from DB (check for updates)
    // if there are updates use setNotifications
    console.log('check for notifications')
  }, []);

  useEffect(() => {
    if(currentUser){
      setWarnings({
        apply_all_warning_on: currentUser["apply_all_warning_on"],
        reset_warning_on: currentUser["reset_warning_on"],
        notifications_on: currentUser["notifications_on"],
      })
    }
  }, [currentUser]);


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
        />
        <DynamicMenu />
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
              />
            )}
          />
          <Route 
            exact 
            path="/solar" 
            component={() => (
              <Solar />
            )}
          />
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
}

function mapStateToProps(state) {
  return {
    error: state.navReducer.error,
    zipcode_data: state.navReducer.zipcode_data,
  };
}

export default connect(mapStateToProps, { getMyZipcodeData })(App);
