import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { fetchUserBookings } from '../../actions/bookings/booking_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[ownProps.match.params.userId],
  bookings: Object.values(state.entities.bookings),
});

const mapDispatchToProps = dispatch => ({
  fetchUserBookings: userId => dispatch(fetchUserBookings(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex);
