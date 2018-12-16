import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listings/listing_actions';
import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
