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
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Copiwriters from './components/Copiwriters/Copiwriters';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import News from './components/News/News';

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
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Contact} />

            <Route path="/news" component={News} />
            <Route path="/copiwriters" component={Copiwriters} />
            <Route path="/faq" component={FAQ} />
            <Route path="/terms_of_use" component={TermsOfUse} />
            <Route path="/privacy_policy" component={PrivacyPolicy} />

            <Route component={Page404} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
