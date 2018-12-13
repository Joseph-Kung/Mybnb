import React from 'React';
import LandingNavBarContainer from './landing_nav_bar_container';

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <LandingNavBarContainer />
      <p className='landing-page-text'>Book your dream adventure here.</p>
      <div className='landing-search-bar'>
        <i className="fas fa-search"></i>
        <input type="text" className='landing-search-bar-input' placeholder={"Try \"San Francisco\""} />
      </div>
    </div>
  )
};

export default LandingPage;
