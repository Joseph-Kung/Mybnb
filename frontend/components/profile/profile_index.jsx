import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ProfileIndexItem from './profile_index_item';

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser.id)
  }

  render () {
    let bookings = this.props.bookings.map(booking => <ProfileIndexItem key={booking.id} deleteBooking={this.props.deleteBooking} booking={booking} />)
    return(
      <>
        <header>
          <NavBarContainer />
        </header>
          <h2 className='profile-header'>Booked Trips</h2>
        <div className='profile-container'>
          {bookings}
        </div>
      </>
      )
  }
}

export default ProfileIndex;
