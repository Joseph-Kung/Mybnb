import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import listingsReducer from './listings/listings_reducer';
import bookingsReducer from './bookings/bookings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  bookings: bookingsReducer,
});

export default entitiesReducer;
