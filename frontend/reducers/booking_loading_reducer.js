import {
  START_BOOKING_LOADING, RECEIVE_BOOKING, DELETE_BOOKING, RECEIVE_BOOKING_ERRORS,
} from '../actions/bookings/booking_actions';

const bookingLoadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DELETE_BOOKING:
    case RECEIVE_BOOKING:
    case RECEIVE_BOOKING_ERRORS:
      return false;
    case START_BOOKING_LOADING:
      return true;
    default:
      return state;
  }
};

export default bookingLoadingReducer;
