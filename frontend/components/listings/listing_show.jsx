import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import NavBarContainer from '../nav_bar/nav_bar_container';
import 'react-dates/lib/css/_datepicker.css';
import LargePictures from '../pictures/large_pictures';
import SmallPictures from '../pictures/small_pictures';

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
      let smallPictures;

      if (listing.photoUrls && listing.photoUrls.length > 1) {
        smallPictures = listing.photoUrls.slice(1).map(photo => <div key={photo.slice(1)} className='small-pictures-container'><img key={photo} className='small-pic' src={photo} /></div>)
      } else {
        smallPictures = <><div className='default-small-pic'/>
                        <div className='default-small-pic' />
                        <div className='default-small-pic' />
                        <div  className='default-small-pic'/></>
      }
      
      let houseType;
      if (listing.privateRoom === true) {
        houseType = 'Private Room'
      } else {
        houseType = 'Entire House'
      }
    
      const rating = <><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i></>

      return (
        <>
        <header>
          <NavBarContainer />
        </header>
        <div className='show-page-container'>
          <div className='pictures-container'>
            <div className='picture-large'>
              <LargePictures listing={this.props.listing} />
            </div>
            <div className='pictures-small' >
              <SmallPictures listing={this.props.listing} />
            </div>
          </div>
  
          <div className='show-page-body'>
            <div className='sticky-page-booking'>
              <div className='booking-header'>
                <span className='booking-price'>${listing.price} <span>per night</span></span>
                <span className='booking-rating'>{rating}</span>
              </div>

              <div className='line-space-container-booking'>
                <div className='line-space' />
              </div>

              <div className='booking-fields'>
                <span>Dates</span>
                <div className='space-box'></div>
                <div className='date-picker-container'></div>
                <span>Guests</span>
                <div className='space-box'></div>
                <div className='guest-input-field'></div>
              </div>
              <div className='form-submit-section'>
                <button className='book-form-submit'>Request to Book</button>
                <span>You won't be charged yet</span>
              </div>
            </div>

            <div className='show-page-content'>
              <div className='show-page-header'>
                <div className='show-page-header-content'>
                  <span className='house-type'>{houseType}</span>
                  <h1>{listing.title}</h1>
                  <span className='city-type'>{listing.city}</span>
                </div>
                <div className='show-page-user-profile'>
                  
                </div>
              </div>
              
              <div className='show-house-info'>
                <span className='house-info-detail'>
                  <i className="fas fa-users"></i>
                  <span>{listing.numGuests} guests</span>
                </span>
                <span className='house-info-detail'>
                  <i className="fas fa-home"></i>
                  <span>{listing.numRooms} bedrooms</span>
                </span>
                <span className='house-info-detail'>
                  <i className="fas fa-bed"></i>
                  <span>{listing.numBeds} beds</span>
                </span>
                <span className='house-info-detail'>
                  <i className="fas fa-shower"></i>
                  <span>{listing.numBathrooms} baths</span>
                </span>
              </div>

                <div className='line-space-container'>
                  <div className='line-space' />
                </div>

              <div className='show-page-description'>
                <p>{listing.description}</p>
              </div>

              <div className='line-space-container'>
                <div className='line-space' />
              </div>
              
              <div className='show-page-info-header'>Amenities</div>
              <section className='amenity-container'>
                {kitchen}
                {parking}
                {tv}
                {wifi}
                {air_con}
                {pool}
                {heater}
              </section>

                <div className='line-space-container'>
                  <div className='line-space' />
                </div>
                
              <div className='show-page-info-header'>Availability</div>
              <div className='date-range-picker'>
              </div>
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