import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import NavBarContainer from '../nav_bar/nav_bar_container';
// import 'react-dates/lib/css/_datepicker.css';

class ListingShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  render() {
    const { listing } = this.props;
    let kitchen, parking, tv, wifi, air_con, pool, heater;
    if (listing) {
    // Find amenities for listing
      if (listing.kitchen === true) {
        kitchen = <div className='amenity'><i className="fas fa-utensils"></i> Kitchen</div>
      }
      if (listing.parking === true) {
        parking = <div className='amenity'><i className="fas fa-car"></i> Parking</div>
      }
      if (listing.tv === true) {
        tv = <div className='amenity'><i className="fas fa-tv"></i> TV</div>
      }
      if (listing.wifi === true) {
        wifi = <div className='amenity'><i className="fas fa-wifi"></i> Wifi</div>
      }
      if (listing.air_con === true) {
        air_con = <div className='amenity'><i className="fas fa-icicles"></i> Air conditioning</div>
      }
      if (listing.pool === true) {
        pool = <div className='amenity'><i className="fas fa-swimming-pool"></i> Pool</div>
      }
      if (listing.heater === true) {
        heater = <div className='amenity'><i className="fas fa-fire"></i> Heater</div>
      }


      // Pics
      let largePictures;
      let smallPictures;
      if (listing.photoUrls) {
        largePictures = listing.photoUrls.slice(0,1).map( photo => <img key={photo} className='large-pic' src={photo}/>)
      } else {
        largePictures = <div className='listing-picture'></div>
      }

      if (listing.photoUrls && listing.photoUrls.length === 4) {
        smallPictures = listing.photoUrls.slice(1).map(photo => <img key={photo} className='small-pic' src={photo} />)
      } else {
        smallPictures = <><div className='small-pic'/>
                        <div className='small-pic' />
                        <div  className='small-pic'/></>
      }
    

      return (
        <>
        <header>
          <NavBarContainer />
        </header>
        <div className='show-page-container'>
        <div className='pictures-container'>
          <div className='picture-large'>
            {largePictures}
          </div>
          <div className='pictures-small' >
            {smallPictures}
          </div>
        </div>
  
          <div className='show-page-body'>
            <div className='show-page-content'>
              <span>{listing.privateRoom}</span>
              <h1>{listing.title}</h1>
              <div className='show-house-info'>
                <span>
                  <i className="fas fa-users"></i>
                  <span>{listing.num_guests} guests</span>
                </span>
                <span>
                  <i className="fas fa-home"></i>
                  <span>{listing.num_bedrooms} bedrooms</span>
                </span>
                <span>
                  <i className="fas fa-bed"></i>
                  <span>{listing.num_beds} beds</span>
                </span>
                <span>
                  <i className="fas fa-shower"></i>
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
              <div className='date-range-picker'>
              </div>
            </div>
            <div className='show-page-booking'>
    
            </div>
          </div>
        </div>
        </>
      )
    }

    return null;
  }
}

export default ListingShow