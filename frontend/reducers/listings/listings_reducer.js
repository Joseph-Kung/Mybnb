import { RECEIVE_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING } from '../../actions/listings/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return Object.assign({}, state, { [action.listing.id]: action.listing });
    case REMOVE_LISTING:
      const newListings = Object.assign({}, state);
      delete newListings[action.listing.id];
      return newListings;
    default:
      return state;
  }
};

export default listingsReducer;
