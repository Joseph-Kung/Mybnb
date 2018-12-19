import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SearchMap from '../map/search_map';
import ListingIndexItem from '../listings/listing_index_item';
import PulseLoader from '../dot_loader';

class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const listings = this.props.listings.map(listing => <ListingIndexItem key={listing.id} listing={listing}/>)
    const loadResults = () => {
      if (this.props.loading === true) {
        return (
          <>
            <div className='spinner-container-search'>
              <div className='spinner-body-search'>
                <PulseLoader loading={this.props.loading} />
              </div>
            </div>
          </>
        )
      }

      return listings
    }
    return(
      <>
        <header>
          <NavBarContainer />
        </header>
        <div className='search-result-container'>
          <div className='results-container'>
            {loadResults()}
          </div>
          <div className='large-map-container'>
            <SearchMap updateFilter={this.props.updateFilter} listings={this.props.listings}/>
          </div>
        </div>
      </>
    )
  }
}

export default SearchResultIndex;
