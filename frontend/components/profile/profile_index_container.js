import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { fetchUserBookings, deleteBooking } from '../../actions/bookings/booking_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[ownProps.match.params.userId],
  bookings: Object.values(state.entities.bookings),
  loading: state.ui.bookingLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchUserBookings: userId => dispatch(fetchUserBookings(userId)),
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex);
