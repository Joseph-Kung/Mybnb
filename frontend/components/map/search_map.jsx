import React from 'react';


class SearchMap extends React.Component {

  componentDidMount () {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 12
    };
    
    this.map = new google.maps.Map(this.mapNode, mapOptions);
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