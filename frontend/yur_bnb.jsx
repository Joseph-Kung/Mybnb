import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


//TEST
import { fetchListings, fetchListing, createListing, deleteListing } from './actions/listings/listing_actions';
//TEST

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
        session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root')

  //TEST
  window.fetchListings = fetchListings;
  window.fetchListing = fetchListing;
  window.createListing = createListing;
  window.deleteListing = deleteListing;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TEST

  ReactDOM.render(<Root store={store} />, root)
})