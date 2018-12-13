import * as listingApiUtil from '../../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';

const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing,
});

const removeListing = listingId => ({
  type: REMOVE_LISTING,
  listingId,
});

export const fetchListings = () => dispatch => (
  listingApiUtil.fetchListings()
    .then(listings => dispatch(receiveListings(listings)))
);

export const fetchListing = listingId => dispatch => (
  listingApiUtil.fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing)))
);

export const createListing = listing => dispatch => (
  listingApiUtil.createListing(listing)
    .then(newListing => dispatch(receiveListing(newListing)))
);

export const deleteListing = listingId => dispatch => (
  listingApiUtil.deleteListing(listingId)
    .then(listing => dispatch(removeListing(listing)))
);
