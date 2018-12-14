import React from 'react';
import ListingIndexItem from './listing_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const sf = this.props.sf.map(listing => <ListingIndexItem key={listing.id} listing={listing} fetchListing={this.props.fetchListing} />)
    const la = this.props.la.map(listing => <ListingIndexItem key={listing.id} listing={listing} fetchListing={this.props.fetchListing} />)
    const ny = this.props.ny.map(listing => <ListingIndexItem key={listing.id} listing={listing} fetchListing={this.props.fetchListing} />)
    const tokyo = this.props.tokyo.map(listing => <ListingIndexItem key={listing.id} listing={listing} fetchListing={this.props.fetchListing} />)
    const paris = this.props.paris.map(listing => <ListingIndexItem key={listing.id} listing={listing} fetchListing={this.props.fetchListing} />)
    return(
      <>
        <header>
          <NavBarContainer />
        </header>
        <div className='spacer'></div>
        <div><h3 className='where-to-stay'>Homes in San Francisco</h3></div>
        <div className='listings-index-container'>
            {sf}
        </div>
        <div><h3 className='where-to-stay'>Homes in Los Angeles</h3></div>
        <div className='listings-index-container'>
            {la}
        </div>
      </>
      );
  }
}

export default ListingsIndex;
