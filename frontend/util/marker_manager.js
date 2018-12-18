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

    Object.keys(this.markers)
      .filter(listingId => !listingsHash[listingId])
      .forEach(marker => this.removeMarker(marker));

    listings.forEach((listing) => {
      if (this.markers[listing.id] === undefined) {
        this.createMarkerFromBench(listing);
      }
    });
  }

  createMarkerFromBench(listing) {
    this.markers[listing.id] = new google.maps.Marker({
      position: { lat: listing.latitude, lng: listing.longitude },
      title: listing.title,
      listingId: listing.id,
    });

    this.markers[listing.id].setMap(this.map);
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}
