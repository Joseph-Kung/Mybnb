import { combineReducers } from 'redux';
import sessionsReducer from './sessions/sessions_errors_reducer';
import listingsErrorReducer from './listings/listings_errors_reducer';

const errorsReducer = combineReducers({
  login: sessionsReducer,
  listings: listingsErrorReducer,
});

export default errorsReducer;
