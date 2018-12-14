import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listings/listing_actions';
import ListingsIndex from './listings_index';

const mapStateToProps = (state) => {
  const sf = Object.values(state.entities.listings).filter(listing => listing.city === 'San Francisco');
  const ny = Object.values(state.entities.listings).filter(listing => listing.city === 'New York');
  const tokyo = Object.values(state.entities.listings).filter(listing => listing.city === 'Tokyo');
  const la = Object.values(state.entities.listings).filter(listing => listing.city === 'Los Angeles');
  const paris = Object.values(state.entities.listings).filter(listing => listing.city === 'Paris');
  return {
    listings: Object.values(state.entities.listings),
    sf,
    ny,
    tokyo,
    la,
    paris,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
