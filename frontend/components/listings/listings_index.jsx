import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const listings = this.props.listings.map(listing => <ListingIndexItem listing={listing} fetchListing={this.props.fetchListing} />)
    return(

      );
  }
}

export default ListingsIndex;
