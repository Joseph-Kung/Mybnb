import React from 'react';
import ListingIndexItem from './listing_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const listings = this.props.listings.map(listing => <ListingIndexItem key={listing.id} listing={listing} fetchListing={this.props.fetchListing} />)
    return(
      <>
        <header>
          <NavBarContainer />
        </header>
        <div className='spacer'></div>
        <div><h3 className='where-to-stay'>Homes in San Francisco</h3></div>
        <div className='listings-index-container'>
            {listings}
        </div>
      </>
      );
  }
}

export default ListingsIndex;
