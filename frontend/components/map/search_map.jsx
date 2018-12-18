import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class SearchMap extends React.Component {
          render() {
        const mapStyles = {
          height: '100%',
        width: '100%',
      };
  
      return(
      <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{
            lat: 37.7758,
            lng: -122.435
          }}
        />
        )
      }
    }
    
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAdIeqcmFJWnpluSfdUP-pGvZNcCWWOvKE'
})(SearchMap);