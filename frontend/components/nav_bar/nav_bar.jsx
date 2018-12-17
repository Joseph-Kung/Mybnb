import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.renderLoggedOut = this.renderLoggedOut.bind(this);
    this.renderLoggedIn = this.renderLoggedIn.bind(this);
  }

  renderLoggedOut () {
    return (
    <div className='nav-bar-container'>
      <div className='left-nav-bar'>
        <div>
          <Link to='/listings' className='logo'><div className='logo'></div></Link>
        </div>
        <div className='search-bar'>
          <i className="fas fa-search"></i>
          <input type="text" className='search-bar-input' placeholder={"Try \"San Francisco\""} />
        </div>
      </div>
      <div className='links-container'>
        <a className='link-button' href="https://www.linkedin.com/in/joseph-kung/"><div className='linkedin'></div></a>
        <a className='link-button' href="https://github.com/Joseph-Kung"><div className='github'></div></a>
        {this.props.loginButton}
        {this.props.signupButton}
      </div>
    </div>
    )
  }

  renderLoggedIn () {
    return (
    <div className='nav-bar-container'>
      <div className='left-nav-bar'>
        <div>
          <Link to='/listings' className='logo'><div className='logo'></div></Link>
        </div>
        <div className='search-bar'>
          <i className="fas fa-search"></i>
          <input type="text" className='search-bar-input' placeholder={"Try \"San Francisco\""} />
        </div>
      </div>
      <div className='links-container'>
        <a className='link-button' href="https://www.linkedin.com/in/joseph-kung/"><div className='linkedin'></div></a>
        <a className='link-button' href="https://github.com/Joseph-Kung"><div className='github'></div></a>
        <div className='nav-bar-profile'>
          <button className='profile-pic-container' onClick={this.showDropdown}>
            <img src={this.props.currentUser.userPhoto} className='profile-pic' />
            <div className='dropdown'>
              <ul>
                <li className='dropdown-item'><button className='dropdown-button' onClick={this.props.logout}>Log out</button></li>
              </ul>
            </div>
          </button>
        </div>
        {/* <button className='nav-bar-button' onClick={this.props.logout}>Log out</button> */}
      </div>
    </div>
    )
  }

  render () {
    let contents;
    if (this.props.currentUser === undefined) {
      contents = this.renderLoggedOut()
    } else {
      contents = this.renderLoggedIn()
    }

    return (
    <div className='nav-bar' >
      {contents}
    </div>
    )
  }
};

export default NavBar;