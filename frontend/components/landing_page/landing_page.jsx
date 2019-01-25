import React from 'react';
import LandingNavBarContainer from './landing_nav_bar_container';
import SearchBar from '../nav_bar/search_bar';
import ListingIndexItem from '../listings/listing_index_item';

class LandingPage extends React.Component {

  componentDidMount() {
    this.props.fetchListings(this.props.filters);
  }
  
  render() {
    console.log(this.props);
    const listings = this.props.listings.map(listing => <ListingIndexItem key={listing.id} styling={'listing-item-container-index'} listing={listing} /> )
    return (
      <>
      <div className="landing-page-container">
        <LandingNavBarContainer />
        <p className='landing-page-text'>Book your dream adventure here.</p>
        <SearchBar loading={this.props.loading} location={this.props.location}/>
      </div>
      <div>
        <div><h3 className='where-to-stay'>Featured Listings</h3></div>
        <div className='listings-index-container'>
          {listings }
        </div>
      </div>
      </>
    )
  }
};

export default LandingPage;
