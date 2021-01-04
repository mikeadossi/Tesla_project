import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Nav from "./containers/Nav/Nav";
import LogIn from "./containers/LogIn/LogIn";
import SignUp from "./containers/SignUp/SignUp";
import LocationDetails from "./containers/LocationDetails/LocationDetails";
import ProductMenu from "./containers/ProductMenu/ProductMenu";
import Footer from "./containers/Footer/Footer";
import Home from "./containers/Home/Home";
import Vehicles from "./containers/Vehicles/Vehicles";
import Solar from "./containers/Solar/Solar";
import DynamicMenu from "./containers/DynamicMenu/DynamicMenu";

import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const [statedata, setStatedata] = useState([]); // will need to be handled with redux

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter> 
          <Nav />
          <LocationDetails />
          <DynamicMenu />
          <ProductMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/logIn" component={LogIn} />
            <Route
              exact
              path="/vehicles"
              component={() => <Vehicles statedata={statedata} />}
            />
            <Route exact path="/solar" component={Solar} />
            <Route exact path="/userLogin" component={LogIn} />
            <Route exact path="/userSignup" component={SignUp} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
