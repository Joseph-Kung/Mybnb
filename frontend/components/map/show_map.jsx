import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ShowMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.listing.latitude, lng: this.props.listing.longitude },
      zoom: 14
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, null, true)
    this.MarkerManager.updateMarkers([this.props.listing])
  }

  render() {
    return(
      <div id='show-map-container' ref={map => this.mapNode = map} />
    )
  }
}

export default ShowMap;