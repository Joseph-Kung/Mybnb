import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import listingsReducer from './listings/listings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
});

export default entitiesReducer;
