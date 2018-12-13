import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
    <Route exact path='/' component={LandingPage} />
    {/* <NavBarContainer /> */}
    </header>
  </div>
)

export default App;