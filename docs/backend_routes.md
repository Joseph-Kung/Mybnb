# HTML 
* `GET / StaticPagesController#root`

# API Endpoints

### `users`
* `POST /api/users` -Sign up

### `session`
* `POST /api/session` -Log in
* `DELETE /api/session` -Log out

### `listings`
* `POST /api/listings` -Create new listing
* `GET /api/listings` -Listings index
* `GET /api/listings/:id` -Listing show page
* `DELETE /api/listings/:id` -Delete a Listing

### `bookings`
* `GET /api/bookings` -All bookings filtered by user
* `GET /api/listings/:id/bookings` -Get bookings for specific listing
* `POST /api/bookings` -Book a listing
* `PATCH /api/bookings/:id` -Edit a booking
* `DELETE /api/bookings/:id` -Delete a booking

### `reviews`
* `POST /api/reviews` -Write review
* `GET /api/listings/:id/reviews` -Reviews for a specific listing
* `DELETE /api/reviews/:id` -Delete a review

