import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Menu />

      <Switch>
        <Route exact path="/" render={Home} />
        <Route path="/team">
          Team
        </Route>
        <Route path="/contact">
          Contact
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
