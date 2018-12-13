import React from 'react';
import { Link } from 'react-router-dom';


const LandingNavBar = (props) => {
  const contents = () => {
      if (props.currentUser === undefined) {
      return (
        <div className='landing-nav-bar-container'>
          <div className='landing-left-nav-bar'>
            <div>
              <Link to='/' className='logo'><div className='logo'></div></Link>
            </div>
          </div>
          <div className='landing-links-container'>
            <a className='landing-link-button' href="https://www.linkedin.com/in/joseph-kung/"><div className='linkedin'></div></a>
            <a className='landing-link-button' href="https://github.com/Joseph-Kung"><div className='github'></div></a>
            {props.loginButton}
            {props.signupButton}
          </div>
        </div>
      )}else {
      return (
      <div className='landing-nav-bar-container'>
        <div className='landing-left-nav-bar'>
          <div>
            <Link to='/' className='logo'><div className='logo'></div></Link>
          </div>
        </div>
        <div className='landing-links-container'>
          <a className='landing-link-button' href="https://www.linkedin.com/in/joseph-kung/"><div className='linkedin'></div></a>
          <a className='landing-link-button' href="https://github.com/Joseph-Kung"><div className='github'></div></a>
          <button className='landing-nav-bar-button' onClick={props.logout}>Log out</button>
        </div>
      </div>
      )
      }
    }

  return (
  <div className='landing-nav-bar' >
    {contents()}
  </div>
  )
};

export default LandingNavBar;