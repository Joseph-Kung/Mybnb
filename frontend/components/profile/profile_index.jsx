import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ProfileIndexItem from './profile_index_item';
import PulseLoader from '../dot_loader';

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0
    this.loadBookings = this.loadBookings.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser.id)
  }

  loadBookings () {
    this.count += 1
    if (this.props.loading === true) {
      return (
        <>
          <div className='spinner-container-show'>
            <div className='spinner-body'>
              <PulseLoader loading={this.props.loading} />
            </div>
          </div>
        </>
      )
    }

    let bookings = this.props.bookings.map(booking => <ProfileIndexItem key={booking.id} deleteBooking={this.props.deleteBooking} booking={booking} />)
    if (bookings.length === 0 && this.count > 1) {
      return (
        <div className='empty-booking-container'>
          <div className='empty-booking-header'>Choose Your Next Adventure</div>
          <div className='empty-booking-text'>Book a listing and start your dream vacation today</div>
        </div>
      )
    } else {
      return bookings;
    }
  }

  render () {
    return(
      <>
        <header>
          <NavBarContainer />
        </header>
        <h2 className='profile-header'>Booked Trips</h2>
        <div className='line-space-container'>
          <div className='profile-line-space' />
        </div>
        <div className='profile-container'>
          {this.loadBookings()}
        </div>
      </>
      )
  }
}

export default ProfileIndex;
