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
    this.state = {startDate: null, endDate: null}
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  handleHover(e) { 
    $('.picture-container').hover(() => { $('picture-container').not(e).each( pic => pic.css('filter', 'brightness(50%)')) },
      () => { $('picture-container').not(e).each(pic => pic.css('filter', 'none')) })
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
                <div className='date-picker-container'>
                    <DateRangePicker
                      startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                      endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                      onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                      focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                      onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                      startDatePlaceholderText={'Check in'}
                      endDatePlaceholderText={'Check out'}
                      numberOfMonths={1}
                      minimumNights={1}
                      // isDayBlocked={true}
                    />
                </div>
                <span>Guests</span>
                <div className='guest-input-field'></div>
                <div className='guest-button-container'>
                  <button className='guest-button'></button>
                </div>
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
                  <div className='user-profile-picture-container'>
                    <img className='user-picture' src={listing.userPhoto} />
                  </div>
                  <div className='user-profile-name'>{listing.userName}</div>
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
                  <DayPickerRangeController
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={2}
                    hideKeyboardShortcutsPanel={true}
                    minimumNights={1}
                    // isDayBlocked={}
                  />
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