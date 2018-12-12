import * as sessionAPIUtil from '../../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const signup = user => dispatch => (
  sessionAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors)))
);

export const login = user => dispatch => (
  sessionAPIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors)))
);

export const logout = () => dispatch => (
  sessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
      errors => dispatch(receiveErrors(errors)))
);

export const guestLogin = () => dispatch => (
  sessionAPIUtil.guestLogin()
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors)))
);
