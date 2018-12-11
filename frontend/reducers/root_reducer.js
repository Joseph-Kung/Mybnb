import { combineReducers } from 'redux';
import sessionsReducer from './sessions_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionsReducer,
});

export default rootReducer;
