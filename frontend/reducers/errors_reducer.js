import { combineReducers } from 'redux';
import sessionsReducer from './sessions/sessions_errors_reducer';

const errorsReducer = combineReducers({
  login: sessionsReducer,
});

export default errorsReducer;
