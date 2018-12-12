import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
    <h1>YurBnb</h1>
    <NavBarContainer />
    </header>

    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
  </div>
)

export default App;