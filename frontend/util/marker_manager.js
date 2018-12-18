export default class MarkerManager {
  constructor(map) {
    this.map = map;
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
    this.markers[listing.id] = new google.maps.Marker({
      position: { lat: listing.latitude, lng: listing.longitude },
      title: listing.title,
      listingId: listing.id,
    });

    this.markers[listing.id].setMap(this.map);
  }

  removeMarker(markerId) {
    this.markers[markerId].setMap(null);
    delete this.markers[markerId];
  }
}
