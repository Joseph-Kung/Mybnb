import { connect } from 'redux';
import { fetchListings, fetchListing } from '../../actions/listings/listing_actions';
import ListingsIndex from './listings_index';

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchListing: id => dispatch(fetchListing(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
