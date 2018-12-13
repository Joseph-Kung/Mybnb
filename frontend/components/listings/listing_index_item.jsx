import React from 'react';

class ListingIndexItem extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidmount() {
    const { fetchListing, listing } = this.props;
    fetchListing(listing.id);
  }

  render() {
    const { fetchListing, listing } = this.props;
    let kitchen, parking, tv, wifi, air_con, pool, heater;

    // Find amenities for listing
    if (listing.kitchen) {
      kitchen = <div className='amenity'><i class="fas fa-utensils"></i> Kitchen</div>
    }
    if (listing.parking) {
      parking = <div className='amenity'><i class="fas fa-car"></i> Parking</div>
    }
    if (listing.tv) {
      tv = <div className='amenity'><i class="fas fa-tv"></i> TV</div>
    }
    if (listing.wifi) {
      wifi = <div className='amenity'><i class="fas fa-wifi"></i> Wifi</div>
    }
    if (listing.air_con) {
      air_con = <div className='amenity'><i class="fas fa-icicles"></i> Air conditioning</div>
    }
    if (listing.pool) {
      pool = <div className='amenity'><i class="fas fa-swimming-pool"></i> Pool</div>
    }
    if (listing.heater) {
      heater = <div className='amenity'><i class="fas fa-fire"></i> Heater</div>
    }

    if (listing) {
      return (
        <div className='show-page-pictures'>
  
        </div>
        <div className='show-page-body'>
          <div className='show-page-content'>
            <span>{listing.privateRoom}</span>
            <h1>{listing.title}</h1>
            <div className='show-house-info'>
              <span>
                <i class="fas fa-users"></i>
                <span>{listing.num_guests} guests</span>
              </span>
              <span>
                <i class="fas fa-home"></i>
                <span>{listing.num_bedrooms} bedrooms</span>
              </span>
              <span>
                <i class="fas fa-bed"></i>
                <span>{listing.num_beds} beds</span>
              </span>
              <span>
                <i class="fas fa-shower"></i>
                <span>{listing.num_bathrooms} baths</span>
              </span>
            </div>
            <div className='show-page-description'>
              <span>{listing.description}</span>
            </div>
            <section className='amenity-container'>
              <div className='amenity-header'>Amenities</div>
              {kitchen}
              {parking}
              {tv}
              {wifi}
              {air_con}
              {pool}
              {heater}
            </section>
          </div>
          <div className='show-page-booking'>
  
          </div>
        </div>
      )
    }

    return null;
  }
}
