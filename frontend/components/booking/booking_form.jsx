import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: this.props.startDate, endDate: null, numGuests: 1 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ numGuests: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render () {
    return (
      <form className='booking-fields'>
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
          <input className='guest-input' type="number" min='1' max={this.props.listing.numGuests} />
        </div>
        <div className='form-submit-section'>
          <button className='book-form-submit'>Request to Book</button>
          <span>You won't be charged yet</span>
        </div>
      </form>
    )
  }
}

export default BookingForm;
