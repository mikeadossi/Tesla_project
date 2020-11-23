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

function App() {
  const [statedata, setStatedate] = useState([]);
  const [zipcodeData, setZipcodeData] = useState();
  useEffect(() => {
    fetch("http://localhost:3002/statedata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setStatedate(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const getZipcodeData = (zipcode) => {
    fetch(`http://localhost:3002/zipcode?zipcode=${zipcode}`)
      .then((res) => res.json())
      .then((data) => setZipcodeData(data));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav getZipcodeData={getZipcodeData} />
        {zipcodeData && <LocationDetails zipcodeData={zipcodeData} />}
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
  );
}

export default App;
