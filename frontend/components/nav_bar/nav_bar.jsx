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
          <div className='links-container'>
            <a className='link-button' href="https://www.linkedin.com/in/joseph-kung/"><div className='linkedin'></div></a>
            <a className='link-button' href="https://github.com/Joseph-Kung"><div className='github'></div></a>
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