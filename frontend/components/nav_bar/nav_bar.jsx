import React from 'react';

const NavBar = (props) => {
  const contents = () => {
    debugger
      if (props.currentUser === undefined) {
      return (
        <div>
          <button className='nav-bar-button' onClick={props.login}>Login</button>
          <button className='nav-bar-button' onClick={props.signup}>Sign up</button>
        </div>
      )}else {
      return <button className='nav-bar-button' onClick={props.logout}>Logout</button>
      }
    }

  return (
  <div className='nav-bar' >
    {contents()}
  </div>
  )
};

export default NavBar;