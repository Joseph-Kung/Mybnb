import { START_LOADING, RECEIVE_LISTING, RECEIVE_LISTINGS } from '../actions/listings/listing_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING:
    case RECEIVE_LISTINGS:
      return false;
    case START_LOADING:
      return true;
    default:
      return state;
  }
};

export default loadingReducer;
