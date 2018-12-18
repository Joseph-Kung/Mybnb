import React from 'react';
import { Link } from 'react-router-dom';


class ProfileIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.deleteBooking(this.props.booking.id)
  }




  render() {
    let { booking } = this.props
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let start = new Date(booking.startDate);
    let end = new Date(booking.endDate);
    let dateInfo = <span className='booking-info-show'>{`${months[start.getMonth()]} ${start.getUTCDate()} - ${end.getUTCDate()}, ${end.getUTCFullYear()} `} · {booking.numGuests} guests</span>
    return (
      <div className='profile-index-item'>
        <div className='profile-image-container'>
          <img src={booking.listingPicture} className='booking-picture' />
          <div className='owner-profile-picture'>
            <img src={booking.ownerPicture} className='owner-picture' />
          </div>
        </div>
        <div></div>
        <div>
          <span className='bookings-show-city'>{booking.listingCity}</span>
        </div>
        <div>
          {dateInfo}
        </div>
        <div>
          <Link to={`/listings/${booking.listingId}`}><span className='booking-listing-title'>{booking.listingTitle}</span></Link>
        </div>
        <div className='line-space-container'>
          <div className='booking-line-space' />
        </div>
        <div className='button-container'>
          <button className='delete-booking' onClick={this.handleSubmit}>Delete Booking</button>
        </div>
      </div>
    )
  }
}


export default ProfileIndexItem;
