import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SearchMap from '../map/search_map';

class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchListings();
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
            <SearchMap listings={this.props.listings}/>
        </div>
      </>
    )
  }
}

export default SearchResultIndex;
