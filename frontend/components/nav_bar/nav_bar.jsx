import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  const contents = () => {
      if (props.currentUser === undefined) {
      return (
        <div className='nav-bar-container'>
          <Link to='/' className='logo'><img src={'/app/assets/images/airbnb-logo.png'} /></Link>
          <div>
            {props.loginButton}
            {props.signupButton}
          </div>
        </div>
      )}else {
      return (
      <div className='nav-bar-container'>
        <Link to='/' className='logo'>Y</Link>
        <button className='nav-bar-button' onClick={props.logout}>Log out</button>
      </div>
      )
      }
    }

  return (
  <div className='nav-bar' >
    {contents()}
  </div>
  )
};

export default NavBar;