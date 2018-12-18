import { fetchListings } from '../listings/listing_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

const changeFilter = (filter, value) => ({
  type: UPDATE_BOUNDS,
  filter,
  value,
});


export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  debugger;
  return fetchListings(getState().ui.filters)(dispatch);
};
