import React from 'react'; 
import './App.css';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './containers/Nav/Nav';
import LogIn from './containers/LogIn/LogIn';
import SignUp from './containers/SignUp/SignUp';
import LocationDetails from './containers/LocationDetails/LocationDetails';
import ProductMenu from './containers/ProductMenu/ProductMenu';
import Footer from './containers/Footer/Footer';
import Home from './containers/Home/Home'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <LocationDetails />
        <ProductMenu />
        <Switch>
          <Route exact path="/" component={ Home }/> 
          <Route exact path="/userLogin" component={ LogIn }/> 
          <Route exact path="/userSignup" component={ SignUp }/> 
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
