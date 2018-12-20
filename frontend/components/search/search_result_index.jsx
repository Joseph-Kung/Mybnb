import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SearchMap from '../map/search_map';
import ListingIndexItem from '../listings/listing_index_item';
import PulseLoader from '../dot_loader';

class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loadListings = this.loadListings.bind(this);
  }

  loadListings () {
    const listings = this.props.listings.map(listing => <ListingIndexItem styling={'listing-item-container'} key={listing.id} listing={listing}/>)
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

    if (this.props.listings.length === 0 && this.props.bounds.length > 1) {
      return(
        <>
        <div className='empty-result-container'>
          <div className='empty-result-header'>No results</div>
          <div className='empty-result-details'>To get more results, try adjusting your search by moving the map</div>
        </div>
        </>
      )
    } else {
      return listings
    }
  }


  render() {
    return(
      <>
        <header>
          <NavBarContainer />
        </header>
        <div className='search-result-container'>
          <div className='results-container'>
            {this.loadListings()}
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
