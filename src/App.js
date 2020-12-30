import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/home-page/Home';
import Navigation from './components/navigation/Navigation';
import RealEstate from './components/real-estate/real-estate-screen/RealEstate';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/realestate'>
          <Navigation />
          <RealEstate />
        </Route>
        <Route exact path='/stock'></Route>
        <Route exact path='/cars'></Route>
      </Switch>
    </Router>
  );
}

export default App;
