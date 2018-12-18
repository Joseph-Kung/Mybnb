export const fetchListings = filters => (
  $.ajax({
    method: 'GET',
    url: 'api/listings',
    data: filters,
  }));

export const fetchListing = id => (
  $.ajax({
    method: 'GET',
    url: `api/listings/${id}`,
  })
);

export const createListing = listing => (
  $.ajax({
    method: 'POST',
    url: 'api/listings',
    data: { listing },
  })
);

export const deleteListing = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/listings/${id}`,
  })
);
