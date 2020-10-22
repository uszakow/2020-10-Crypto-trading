import React from 'react';
import './App.scss';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import SocialButtons from './components/SocialButtons/SocialButtons';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';

import PageInConstruction from './components/PageInConstruction/PageInConstruction';
import Page404 from './components/Page404/Page404';

function App() {
  return (
    <Router>
      <div className="app-wrap">
        <Menu />
        <SocialButtons />

        <div className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/team">
              <PageInConstruction />
            </Route>
            <Route path="/contact">
              <PageInConstruction />
            </Route>

            <Route path="/whitepaper">
              <PageInConstruction />
            </Route>
            <Route path="/copiwriters">
              <PageInConstruction />
            </Route>
            <Route path="/faq">
              <PageInConstruction />
            </Route>
            <Route path="/terms_of_use">
              <PageInConstruction />
            </Route>
            <Route path="/privacy_policy">
              <PageInConstruction />
            </Route>

            <Route component={Page404} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
