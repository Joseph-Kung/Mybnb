import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SearchMap extends React.Component {

  componentDidMount () {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 12
    };
    
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings)
  }

  componentDidUpdate () {
    this.MarkerManager.updateMarkers(this.props.listings)
  }

  render () {
    return (
      <>
         <div id='map-container' ref={map => this.mapNode = map } />
      </>
    )
  }
}

export default SearchMap;