import { RECEIVE_LISTING_ERRORS, CLEAR_LISTINGS_ERRORS } from '../../actions/listings/listing_actions';

const listingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    case CLEAR_LISTINGS_ERRORS:
      return [];
    default:
      return state;
  }
};

export default listingErrorsReducer;
