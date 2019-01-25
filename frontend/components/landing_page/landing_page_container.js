import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listings/listing_actions';
import LandingPage from './landing_page';

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings).filter(listing => listing.city === 'Seattle'),
  filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
