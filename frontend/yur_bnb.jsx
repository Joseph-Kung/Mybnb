import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


//TEST
import { signup, login, logout } from './actions/sessions/session_actions';
//TEST

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root')

  //TEST
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = store
  //TEST

  ReactDOM.render(<Root store={store} />, root)
})