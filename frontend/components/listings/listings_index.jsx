import React from 'react';
import ListingIndexItem from './listing_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PulseLoader from '../dot_loader';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings(this.props.filters);
  }

  render() {
    if (this.props.loading === true) {
      return (
        <>
          <header>
            <NavBarContainer />
          </header>
          <div className='spinner-container'>
            <div className='spinner-body'>
              <PulseLoader loading={this.props.loading} />
            </div>
          </div>
        </>
      )
    }

    const sf = this.props.sf.map(listing => <ListingIndexItem key={listing.id} styling={'listing-item-container-index'}listing={listing} />)
    const la = this.props.la.map(listing => <ListingIndexItem key={listing.id} styling={'listing-item-container-index'}listing={listing} />)
    const ny = this.props.ny.map(listing => <ListingIndexItem key={listing.id} styling={'listing-item-container-index'}listing={listing} />)
    const seattle = this.props.seattle.map(listing => <ListingIndexItem key={listing.id} styling={'listing-item-container-index'}listing={listing} />)
    return(
      <>
        <header>
          <NavBarContainer />
        </header>
        <div>
          <div className='spacer'></div>
          <div><h3 className='where-to-stay'>Homes in San Francisco</h3></div>
          <div className='listings-index-container'>
              {sf}
          </div>
          <div><h3 className='where-to-stay'>Homes in Los Angeles</h3></div>
          <div className='listings-index-container'>
              {la}
          </div>
          <div><h3 className='where-to-stay'>Homes in New York</h3></div>
          <div className='listings-index-container'>
              {ny}
          </div>
          <div><h3 className='where-to-stay'>Homes in Seattle</h3></div>
          <div className='listings-index-container'>
              {seattle}
          </div>
        </div>
      </>
      );
  }
}

export default ListingsIndex;
