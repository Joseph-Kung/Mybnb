import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listings/listing_actions';
import { fetchListingBookings, createBooking, clearErrors } from '../../actions/bookings/booking_actions';
import ListingShow from './listing_show';
import { openModal } from '../../actions/modal/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  loading: state.ui.loading,
  bookings: Object.values(state.entities.bookings),
  currentUserId: state.session.currentUserId,
  errors: state.errors.bookings,
  bookingLoading: state.ui.bookingLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  createBooking: booking => dispatch(createBooking(booking)),
  fetchListingBookings: id => dispatch(fetchListingBookings(id)),
  openModal: () => dispatch(openModal('Log in')),
  clearErrors: () => dispatch(clearErrors()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
