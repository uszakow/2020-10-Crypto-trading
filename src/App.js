import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import SocialButtons from './components/SocialButtons/SocialButtons';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="app-wrap">
        <Menu />
        <SocialButtons />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team">
            Team
        </Route>
          <Route path="/contact">
            Contact
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
