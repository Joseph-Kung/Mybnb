import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessions/session_actions';
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal/modal_actions'; 

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginButton: <button className='nav-bar-button' onClick={() => dispatch(openModal('Sign up'))}>Sign up</button>,
  signupButton: <button className='nav-bar-button' onClick={() => dispatch(openModal('Log in'))}>Log in</button>
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
