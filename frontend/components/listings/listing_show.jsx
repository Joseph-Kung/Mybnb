import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

class ListingShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidmount() {
    debugger;
    const { fetchListing, ownProps} = this.props;
    fetchListing(ownProps.match.params.listingId);
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

  
      return (
        <>
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
            <div className='date-range-picker'>
              {/* <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              /> */}
            </div>
          </div>
          <div className='show-page-booking'>
  
          </div>
        </div>
        </>
      )
    }

    return null;
  }
}

export default ListingShow