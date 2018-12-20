import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listings/listing_actions';
import ListingsIndex from './listings_index';

const mapStateToProps = (state) => {
  const sf = Object.values(state.entities.listings).filter(listing => listing.city === 'San Francisco').slice(0, 5);
  const ny = Object.values(state.entities.listings).filter(listing => listing.city === 'New York').slice(0, 5);
  const seattle = Object.values(state.entities.listings).filter(listing => listing.city === 'Seattle').slice(0, 5);
  const la = Object.values(state.entities.listings).filter(listing => listing.city === 'Los Angeles').slice(0, 5);
  return {
    listings: Object.values(state.entities.listings),
    loading: state.ui.loading,
    sf,
    ny,
    seattle,
    la,
    filters: state.ui.filters,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
