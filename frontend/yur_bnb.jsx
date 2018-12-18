import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import 'react-dates/initialize';


//TEST
import { fetchUserBookings, fetchListingBookings, createBooking, updateBooking, deleteBooking } from './actions/bookings/booking_actions';
import { fetchListings } from './util/listing_api_util';
import { create } from 'domain';
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
  window.fetchUserBookings = fetchUserBookings;
  window.fetchListingBookings = fetchListingBookings;
  window.createBooking = createBooking;
  window.updateBooking = updateBooking;
  window.deleteBooking = deleteBooking;
  window.fetchListings = fetchListings;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TEST

  ReactDOM.render(<Root store={store} />, root)
})