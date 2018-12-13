import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listings/listing_actions';
import ListingsIndex from './listings_index';

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
