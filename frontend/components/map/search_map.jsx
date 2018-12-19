import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class SearchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    debugger;
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.idleListener();
    this.MarkerManager = new MarkerManager(this.map);
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

export default withRouter(SearchMap);