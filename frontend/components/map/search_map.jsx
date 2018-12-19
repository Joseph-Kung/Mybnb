import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    this.resetMap = this.resetMap.bind(this);
  }

  componentDidMount () {
    this.resetMap();
  }

  handleMarkerClick(listing) {
    this.props.history.push(`listings/${listing.id}`)
  }

  resetMap() {
    let coordinates;
    if (this.props.location.search) {
      coordinates = queryString.parse(this.props.location.search);
    } else {
      coordinates = { lat: '37.7758', lng: '-122.435' }
    }

    const mapOptions = {
      center: { lat: parseFloat(coordinates.lat), lng: parseFloat(coordinates.lng) },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.idleListener();
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.listings)
  }

  idleListener() {
    this.map.addListener('idle', () => {
      let  { north, south, east, west } = this.map.getBounds().toJSON();
      let bounds = { 
        ne: {lat: north, lng: east},
        sw: {lat: south, lng: west}
      }
      this.props.updateFilter('bounds', bounds)
    })
  }

  componentDidUpdate (prevProps) {
    this.MarkerManager.updateMarkers(this.props.listings)
    if (this.props.location.search != prevProps.location.search) {
      this.resetMap();
    }
  }

  render () {
    return (
      <>
         <div id='map-container' ref={map => this.mapNode = map } />
      </>
    )
  }
}

export default withRouter(SearchMap);