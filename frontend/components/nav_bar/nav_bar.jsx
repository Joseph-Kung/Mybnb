import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
  const contents = () => {
      if (props.currentUser === undefined) {
      return (
        <div>
        {props.signupButton}
        {props.loginButton}
        </div>
      )}else {
      return <button className='nav-bar-button' onClick={props.logout}>Log out</button>
      }
    }

  return (
  <div className='nav-bar' >
    {contents()}
  </div>
  )
};

export default NavBar;