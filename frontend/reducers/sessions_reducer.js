import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/sessions/session_actions';

const nullUser = {
  currentUserId: null,
};

const sessionsReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id };
    case LOGOUT_CURRENT_USER:
      return nullUser;
    default:
      return state;
  }
};

export default sessionsReducer;
