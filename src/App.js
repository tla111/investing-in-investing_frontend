import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/navigation/Navigation';
import RealEstate from './components/real-estate/real-estate-screen/RealEstate';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/realestate'>
          <RealEstate />
        </Route>
        <Route exact path='/stock'></Route>
      </Switch>
    </Router>
  );
}

export default App;
