import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Home from './components/HomeComponent/Home';
import Checkout from './components/CheckoutComponent/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch> 
          
          <Route path="/checkout">
              <Checkout />
          </Route> 

          <Route path="/">
            <Home />
          </Route>  
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
