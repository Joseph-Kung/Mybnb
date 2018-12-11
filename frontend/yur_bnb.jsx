import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


//TEST
import { signup, login, logout } from './util/session_api_util';
//TEST

document.addEventListener('DOMContentLoaded', () => {

  //TEST
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TEST
  const store = configureStore();
  const root = document.getElementById('root')
  ReactDOM.render(<h1>My Airnbnb clone</h1>, root)
})