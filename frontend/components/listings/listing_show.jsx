import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import NavBarContainer from '../nav_bar/nav_bar_container';
import 'react-dates/lib/css/_datepicker.css';
import LargePictures from '../pictures/large_pictures';
import SmallPictures from '../pictures/small_pictures';
import BookingFormContainer from '../booking/booking_form_container';
// import PulseLoader from '../dot_loader';
import { runInThisContext } from 'vm';
import { PulseLoader } from 'react-spinners';

class ListingShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {startDate: null, endDate: null, numGuests: 1}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isDateBooked = this.isDateBooked.bind(this);
  }

  handleChange(e) {
    this.setState({ numGuests: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUserId) {
      this.props.createBooking({listing_id: this.props.listing.id,
                          renter_id: this.props.currentUserId,
                          num_guests: this.state.numGuests,
                          start_date: this.state.startDate.format('DD/MM/YYYY'),
        end_date: this.state.endDate.format('DD/MM/YYYY')
      }).then(() => this.props.history.push(`/profile/${this.props.currentUserId}`))
    } else {
      this.props.openModal()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.listingId != prevProps.match.params.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
    this.props.fetchListingBookings(this.props.match.params.listingId);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }


  renderButton () {
    if (this.props.bookingLoading === true) {
      return (
        <div className='booking-spinner-container'>
          <div className='booking-spinner-body'>
            <PulseLoader 
            size={5} 
            color={'#008489'}
            loading={this.props.bookingLoading} />
          </div>
        </div>
      )
    } else {
      return <button className='book-form-submit'>Request to Book</button>
    }
  }


  isDateBooked (date) {
    let reqDate = new Date(date);
    let startDate;
    let endDate;


    for (let i = 0; i < this.props.bookings.length; i++) {
      startDate = new Date(this.props.bookings[i].startDate)
      endDate = new Date(this.props.bookings[i].endDate)
      if (reqDate >= startDate && reqDate <= endDate) {
        return true
      }
    }
    return false
  }

  isOutside (date) {
    let newDate = new Date(date);
    let today = new Date();

    if (newDate < today) {
      return true
    }
    return false
  }
  
  render() {
    if (this.props.loading === true) {
      return (
        <>
        <header>
          <NavBarContainer />
        </header>
        <div className='spinner-container'>
          <div className='spinner-body'>
              <PulseLoader
                size={15}
                color={'#008489'}
                loading={this.props.loading} />
          </div>
        </div>
        </>
      )
    }
    const errors = this.props.errors.map(error => <li className='session-error' key={error}>{error}</li>)
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

              <form className='booking-fields' onSubmit={this.handleSubmit}>
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
                      // isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                      numberOfMonths={1}
                      minimumNights={1}
                      block={true}
                      required={true}
                      isDayBlocked={day => this.isDateBooked(day)}
                    />
                </div>
                <span>Guests</span>
                <div className='guest-input-field'></div>
                <div className='guest-button-container'>
                    <input className='guest-input' type="number" min='1' max={listing.numGuests} onChange={this.handleChange} value={this.state.numGuests}/>
                </div>
              <div className='form-submit-section'>
                  <ul className='errors-container'>
                    {errors}
                  </ul>
                {this.renderButton()}
                <span>You won't be charged yet</span>
              </div>
              </form>
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
                    isDayBlocked={day => this.isDateBooked(day)}
                    enableOutsideDays={false}
                    isOutsideRange={date => this.isOutside(date)}
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