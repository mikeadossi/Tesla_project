import React from 'react'; 
import './App.css';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './containers/Navv/Nav/Nav';
import Vehicles from './containers/Vehicles/Vehicles.js/Vehicles';
import Solar from './containers/Solar/Solar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch> 
          <Route exact path="/" component={ Vehicles }/>
          <Route exact path="/" component={ Solar }/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
