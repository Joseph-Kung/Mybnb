import { connect } from 'react-redux';
import SearchResultIndex from './search_result_index';
import { fetchListings } from '../../actions/listings/listing_actions';
import { updateFilter } from '../../actions/filters/filter_actions';

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultIndex);
