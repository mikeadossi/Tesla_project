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

import { Provider } from "react-redux";
import { store } from "./store";

function App() {

  const [menuVisibility, setMenuVisibility] = useState({
    mobileMenu: false,
    applyAllWarning: false,
    resetWarning: false,
  });

  const closeMobileMenu = () => { 
    setMenuVisibility({
      mobileMenu: false,
      applyAllWarning: false,
      resetWarning: false,
    });
  };

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Nav
            menuVisibility={menuVisibility} 
            closeMobileMenu={closeMobileMenu}
          />
          <LandingPageNav />
          <LocationDetails />
          <DynamicMenu />
          <ProductMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/logIn" component={LogIn} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/settings" component={Settings} />
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
            <Route exact path="/userLogin" component={LogIn} />
            <Route exact path="/userSignup" component={SignUp} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

function mapStateToProps(state) {
  return {
    error: state.navReducer.error,
    zipcode_data: state.navReducer.zipcode_data,
  };
}

export default connect(mapStateToProps, { getMyZipcodeData })(App);
