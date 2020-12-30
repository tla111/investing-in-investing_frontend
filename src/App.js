import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/home-page/Home';
import Navigation from './components/navigation/Navigation';
import KitchenScreen from './components/real-estate/real-estate-screens/KitchenScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/kitchen'>
          <Navigation />
          <KitchenScreen />
        </Route>
        <Route exact path='/livingroom'>
          <Navigation />
          <KitchenScreen />
        </Route>
        <Route exact path='/bedroom'>
          <Navigation />
          <KitchenScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
