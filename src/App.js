import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getKitchenPosts } from './actions/kitchenposts';
import './App.css';

import Navigation from './components/navigation/Navigation';
import RealEstate from './components/real-estate/real-estate-screen/RealEstate';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKitchenPosts);
  }, [dispatch]);
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
