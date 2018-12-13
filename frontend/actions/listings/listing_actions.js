import * as listingApiUtil from '../../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_LISTINGS_ERRORS = 'CLEAR_LISTINGS_ERRORS';

const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing,
});

const removeListing = listing => ({
  type: REMOVE_LISTING,
  listing,
});

const receiveErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_LISTINGS_ERRORS,
});

export const fetchListings = () => dispatch => (
  listingApiUtil.fetchListings()
    .then(listings => dispatch(receiveListings(listings)))
);

export const fetchListing = listingId => dispatch => (
  listingApiUtil.fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing),
      errors => dispatch(receiveErrors(errors))))
);

export const createListing = listing => dispatch => (
  listingApiUtil.createListing(listing)
    .then(newListing => dispatch(receiveListing(newListing),
      errors => dispatch(receiveErrors(errors))))
);

export const deleteListing = listingId => dispatch => (
  listingApiUtil.deleteListing(listingId)
    .then(listing => dispatch(removeListing(listing),
      errors => dispatch(receiveErrors(errors))))
);
