import * as bookingAPIUtils from '../../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';
export const START_LOADING = 'START_LOADING';

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
});

const removeBooking = bookingId => ({
  type: DELETE_BOOKING,
  bookingId,
});

const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const clearErrors = () => ({
  type: CLEAR_BOOKING_ERRORS,
});


export const fetchUserBookings = userId => (dispatch) => {
  dispatch(startLoading());
  return (
    bookingAPIUtils.fetchUserBookings(userId).then(bookings => dispatch(receiveBookings(bookings)))
  );
};

export const fetchListingBookings = listingId => (dispatch) => {
  dispatch(startLoading());
  return (
    bookingAPIUtils.fetchListingBookings(listingId).then(bookings => dispatch(receiveBookings(bookings)))
  );
};

export const createBooking = booking => (dispatch) => {
  dispatch(startLoading());
  return (
    bookingAPIUtils.createBooking(booking).then(newBooking => dispatch(receiveBooking(newBooking)),
      errors => dispatch(receiveErrors(errors)))
  );
};

export const updateBooking = booking => (dispatch) => {
  dispatch(startLoading());
  return (
    bookingAPIUtils.updateBooking(booking).then(newBooking => dispatch(receiveBooking(newBooking)),
      errors => dispatch(receiveErrors(errors)))
  );
};

export const deleteBooking = bookingId => (dispatch) => {
  dispatch(startLoading());
  return (
    bookingAPIUtils.deleteBooking(bookingId).then(newBooking => dispatch(removeBooking(newBooking.id)))
  );
};
