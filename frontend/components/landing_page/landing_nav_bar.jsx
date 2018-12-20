import React from 'react';
import { Redirect, Link } from 'react-router-dom';


class LandingNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoggedOut = this.renderLoggedOut.bind(this);
    this.renderLoggedIn = this.renderLoggedIn.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.renderUserShowPage = this.renderUserShowPage.bind(this);
    this.renderProfilePic = this.renderProfilePic.bind(this);
    this.state = { showDropdown: false }
  }

  closeDropdown() {
    this.setState({ showDropdown: false })
    document.removeEventListener('click', this.closeDropdown);
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState({ showDropdown: true })
    document.addEventListener('click', this.closeDropdown)
  }

  renderLoggedOut() {
    return (
      <div className='landing-nav-bar-container'>
        <div className='landing-left-nav-bar'>
          <div>
            <Link to='/listings' className='logo'><div className='logo'></div></Link>
          </div>
        </div>
        <div className='landing-links-container'>
          <a className='landing-link-button' href="https://www.linkedin.com/in/joseph-kung/"><div className='landing-linkedin'></div></a>
          <a className='landing-link-button' href="https://github.com/Joseph-Kung"><div className='landing-github'></div></a>
          {this.props.loginButton}
          {this.props.signupButton}
        </div>
      </div>
    )
  }

  renderProfilePic() {
    if (this.props.currentUser.userPhoto) {
      return <img src={this.props.currentUser.userPhoto} className='profile-pic' />
    } else {
      return <div className='profile-pic-default' />
    }
  }

  renderUserShowPage ()  {
    <Redirect to={`/profile`} />
  }

  renderLoggedIn(){
    return(<div className='landing-nav-bar-container'>
      <div className='landing-left-nav-bar'>
        <div>
          <Link to='/listings' className='logo-white'><div className='logo-white'></div></Link>
        </div>
      </div>
      <div className='landing-links-container'>
        <a className='landing-link-button' href="https://www.linkedin.com/in/joseph-kung/"><div className='landing-linkedin'></div></a>
        <a className='landing-link-button' href="https://github.com/Joseph-Kung"><div className='landing-github'></div></a>
        <div className='landing-nav-bar-profile' onClick={this.showDropdown}>
          <div className='landing-profile-pic-container' onClick={this.showDropdown}>
            {this.renderProfilePic()}

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
    </div>)
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

export default LandingNavBar;

