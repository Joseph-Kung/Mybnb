import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  const contents = () => {
      if (props.currentUser === undefined) {
      return (
        <div className='nav-bar-container'>
          <div>
            <Link to='/' className='logo'><div className='logo'></div></Link>
          </div>
          <div>
            {props.loginButton}
            {props.signupButton}
          </div>
        </div>
      )}else {
      return (
      <div className='nav-bar-container'>
      <div>
        <Link to='/' className='logo'><div className='logo'></div></Link>
      </div>
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