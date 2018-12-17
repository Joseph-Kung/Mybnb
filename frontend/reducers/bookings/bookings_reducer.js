import { RECEIVE_BOOKING, RECEIVE_BOOKINGS, DELETE_BOOKING } from '../../actions/bookings/booking_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return Object.assign({}, state, { [action.booking.id]: action.booking });
    case DELETE_BOOKING:
      const newBookings = Object.assign({}, state);
      delete newBookings[action.bookingId];
      return newBookings;
    default:
      return state;
  }
};

export default bookingsReducer;
