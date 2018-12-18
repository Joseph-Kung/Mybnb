import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SearchMap from '../map/search_map';

class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <header>
          <NavBarContainer />
        </header>
        <div className='search-result-container'>
          <div className='results-container'>
          </div>

            <SearchMap />
        </div>
      </>
    )
  }
}

export default SearchResultIndex;
