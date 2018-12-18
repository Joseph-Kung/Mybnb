import { connect } from 'react-redux';
import SearchResultIndex from './search_result_index';
import { fetchListings } from '../../actions/listings/listing_actions';

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultIndex);
