export default class MarkerManager {
  constructor(map, handleClick, single) {
    this.map = map;
    this.handleClick = handleClick;
    this.single = single;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsHash = {};
    listings.forEach((listing) => {
      listingsHash[listing.id] = listing;
    });


    listings.forEach((listing) => {
      if (this.markers[listing.id] === undefined) {
        this.createMarkerFromBench(listing);
      }
    });

    Object.keys(this.markers)
      .filter(listingId => !listingsHash[listingId])
      .map(marker => this.removeMarker(marker));
  }

  createMarkerFromBench(listing) {
    if (this.single === true) {
      this.markers[listing.id] = new google.maps.Marker({
        position: { lat: listing.latitude, lng: listing.longitude },
        icon: {
          path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
          fillColor: '#008489',
          scale: 5,
          fillOpacity: 0.3,
          labelOrigin: new google.maps.Point(-1, -25),
          strokeColor: '#008489',
          strokeWeight: 1,
        },
        listingId: listing.id,
      });
      this.markers[listing.id].setMap(this.map);
    } else {
      this.markers[listing.id] = new google.maps.Marker({
        position: { lat: listing.latitude, lng: listing.longitude },
        label: {
          text: `$${listing.price}`,
          fontWeight: 'bold',
          fontSize: '14px',
        },
        icon: {
          path: 'M22-48h-44v43h16l6 5 6-5h16z',
          fillColor: 'white',
          scale: 0.85,
          fillOpacity: 1,
          labelOrigin: new google.maps.Point(-1, -25),
          strokeColor: 'gray',
        },
        listingId: listing.id,
      });

      this.markers[listing.id].addListener('click', () => this.handleClick(listing));

      this.markers[listing.id].setMap(this.map);
    }
  }

  removeMarker(markerId) {
    this.markers[markerId].setMap(null);
    delete this.markers[markerId];
  }
}
