# Yurbnb

Yurbnb is a clone of Airbnb, where users can post listings for others to book for their vacations. 

[Live Demo](https://yurbnb.herokuapp.com/#/)

## Technologies
### Backend
* Postgresql
* Ruby on Rails

### Frontend
* React
* Redux

### APIs/Packages
* [Google Maps API](https://developers.google.com/maps/documentation/)
* [Google Places API](https://developers.google.com/places/web-service/intro)
* [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
* [React Dates](https://www.npmjs.com/package/react-dates)

## Features
  * Full user authentication and security.
  * Users can search for homes in any location with the Google Maps API
  * Users are able to see available dates for each listing and book using a calendar
  * Users can cancel their bookings through their profile page.

## Searching for Listings
<br>
<img src="./app/assets/images/demo/search-demo.gif" align="center" />
<br>
<br>

Searching for a listing was the most challenging and most rewarding feature. It involved the Google Places API which took care of the autofill as well as the Google Geocoding API which captured the latitude and longitude data. The NorthEast and SouthWest coordinates of the map were used to filter listings that are within the bounds.

## Listing Show Page
<br>
<img src="./app/assets/images/demo/booking-demo.gif" align="center" />
<br>
<br>

Clicking on a listing will take you to the listing show page, where all relevant information of the listing is shown. React Dates allowed me to create an interactive calendar that displays the availability of the listing and allows the user to book it as well.
<br>
<br>
<br>

### Search Breakdown

The search bar was broken down into its own component. When the component mounts, a listener is added to the Autocomplete object. If the input is able to be formatted into a complete address, it will format it and call ```this.setState({ address: address })```. This conditional check is required, or the result of ```autocomplete.getPlace().formatted_address``` will return *undefined*.
```js
componentDidMount() {
    let input = document.getElementById('search-bar')
    let autocomplete = new google.maps.places.Autocomplete(input);
    let address;
    autocomplete.addListener('place_changed', () => {
      if (!autocomplete.getPlace().formatted_address) {
        // use input if cannot convert to formatted address
        address = autocomplete.getPlace().name;
        this.setState({ address: address })
        this.handleSubmit();
      } else {
        // use formatted address if available
        address = autocomplete.getPlace().formatted_address;
        this.setState({ address: address })
        this.handleSubmit();
      }
    })
  }
```

```handleSubmit``` takes care of transferring the coordinate information from the search bar to the search result map. Using Google Geocoder, the address is converted to a latitude longitude coordinate. This is then passed to the url so the search result map can set its bounds.

```js 
  handleSubmit() {
    let lat;
    let lng;
    let coordinates = new google.maps.Geocoder()
    coordinates.geocode( {'address': this.state.address }, (results, status) => {
      if (status === 'OK') {
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
        this.props.history.push(`/search?lat=${lat}&lng=${lng}`)
      } else {
        lat = 37.773972;
        lng = -122.431297;
        this.props.history.push(`/search?lat=${lat}&lng=${lng}`)
      }
    })
  }
```
