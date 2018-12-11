import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const contents = () => {
      if (props.currentUser === undefined) {
      return (
        <div>
          <Link to='/signup'><button className='nav-bar-button'>Sign up</button></Link>
          <Link to='/login'><button className='nav-bar-button'>Log in</button></Link>
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