import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/home-page/Home';
import Navigation from './components/navigation/Navigation';
import KitchenScreen from './components/real-estate/real-estate-screens/KitchenScreen';
import LivingRoomScreen from './components/real-estate/real-estate-screens/LivingRoomScreen';
import BedRoomScreen from './components/real-estate/real-estate-screens/BedRoomScreen';

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
          <LivingRoomScreen />
        </Route>
        <Route exact path='/bedroom'>
          <Navigation />
          <BedRoomScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
