import React from 'react';
import LandingNavBarContainer from './landing_nav_bar_container';
import SearchBar from '../nav_bar/search_bar';

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <LandingNavBarContainer />
      <p className='landing-page-text'>Book your dream adventure here.</p>
      <SearchBar location={props.location}/>
    </div>
  )
};

export default LandingPage;
