export const fetchUserBookings = userId => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings',
    data: {
      id: userId,
    },
  })
);

export const fetchListingBookings = listingId => (
  $.ajax({
    method: 'GET',
    url: `api/listings/${listingId}/bookings`,
    data: {
      listing_id: listingId,
    },
  })
);

export const createBooking = booking => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: { booking },
  })
);

export const updateBooking = booking => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: { booking },
  })
);

export const deleteBooking = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`,
  })
);
