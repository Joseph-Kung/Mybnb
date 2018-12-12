import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../../actions/sessions/session_actions';

const sessionsErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default sessionsErrorReducer;
