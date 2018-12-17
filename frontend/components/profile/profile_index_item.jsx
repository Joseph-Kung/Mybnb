import React from 'react';


const ProfileIndexItem = ({ booking }) => {
  let start = new Date(booking.startDate);
  let end = new Date(booking.endDate);
  debugger
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
        <span className='bookings-show-city'>{booking.city}</span>
      </div>
    </div>
  )
};

export default ProfileIndexItem;
