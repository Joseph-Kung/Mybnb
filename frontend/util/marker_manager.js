export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    listings.forEach((listing) => {
      if (this.markers[listing.id] === undefined) {
        this.createMarkerFromBench(listing);
      }
    });
  }

  createMarkerFromBench(listing) {
    // const position = new google.maps.Latlng(listing.latitude, listing.longitude);
    this.markers[listing.id] = new google.maps.Marker({
      position: { lat: listing.latitude, lng: listing.longitude },
      title: listing.title,
    });

    this.markers[listing.id].setMap(this.map);
  }
}
