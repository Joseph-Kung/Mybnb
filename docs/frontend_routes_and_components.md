# Component Organization
* `Root`
   * `App`
      *`NavBar`
      *`MainComponent`
      *`Footer`

# Main Component Breakdown
* `Session`
   * `SessionForm`

* `Listings`
   * `ListingIndex`
      * `ListingIndexItem`
   * `ListingShow`
      * `ListingPictures`
         * `ListingPicturesItems`
      * `BookingForm`
      * `AmenityIndex`
         * `AmenityIndexItem`
   * `ReviewForm`
   * `ReviewIndex`
      * `ReviewIndexItem`

* `Users`
   * `UserShow`
      * `BookingIndex`
         * `BookingIndexItem`
      * `BookingForm`
   


# Routes
* `/` - Homepage
* `/login` - Login form
* `/signup` - Signup form
* `/profile` - User show page with bookings
* `/listings` - Listings index page
* `/listings/:listingId` - Listing show page
* `/search` - Search bar result list 