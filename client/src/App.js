import React, { useState } from "react";
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

  const closeMobileMenu = () => { 
    setMenuVisibility({
      mobileMenu: false,
      applyAllWarning: false,
      resetWarning: false,
    });
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          menuVisibility={menuVisibility} 
          closeMobileMenu={closeMobileMenu}
          setErrorMessage={setErrorMessage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <LandingPageNav />
        <LocationDetails />
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
              />
            )}  
          />
          <Route exact path="/lost" component={Lost} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route
            exact
            path="/vehicles"
            component={() => (
              <Vehicles />
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
        <Footer />
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
