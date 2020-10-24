import React from 'react'; 
import './App.css';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './containers/Nav/Nav';
import Footer from './containers/Footer/Footer';
import Home from './containers/Home/Home'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home }/> 
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
