import React from 'react';
import { Redirect, Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.renderLoggedOut = this.renderLoggedOut.bind(this);
    this.renderLoggedIn = this.renderLoggedIn.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.state = {showDropdown: false}
  }

  closeDropdown () {
    this.setState({showDropdown: false})
    document.removeEventListener('click', this.closeDropdown);
  }

  showDropdown (e) {
    e.preventDefault();
    this.setState({showDropdown: true})
    document.addEventListener('click', this.closeDropdown)
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

  renderUserShowPage() {
    <Redirect to={`/profile`} />
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
        <div className='nav-bar-profile' onClick={this.showDropdown}>
          <div className='profile-pic-container' onClick={this.showDropdown}>
            <img src={this.props.currentUser.userPhoto} className='profile-pic' />

            {
              this.state.showDropdown === true ? (
              <div className='dropdown'>
                <ul>
                  <Link to={`/profile/${this.props.currentUser.id}`}><li className='dropdown-item'><button className='dropdown-button'>Trips</button></li></Link>
                  <li className='dropdown-item'><button className='dropdown-button-last' onClick={this.props.logout}>Log out</button></li>
                </ul>
              </div>
              ) : null
            }
            
          </div>
        </div>
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