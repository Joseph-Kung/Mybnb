export const fetchReviews = listing => (
  $.ajax({
    method: 'GET',
    url: 'api/listings/:listing_id/reviews',
    data: {
      listing_id: listing.id,
    },
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review },
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`,
  })
);
