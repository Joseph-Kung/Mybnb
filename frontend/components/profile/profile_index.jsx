import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ProfileIndexItem from './profile_index_item';
import PulseLoader from '../dot_loader';

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loadBookings = this.loadBookings.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser.id)
  }

  loadBookings () {
    if (this.props.loading === true) {
      return (
        <>
          <div className='spinner-container-search'>
            <div className='spinner-body-search'>
              <PulseLoader loading={this.props.loading} />
            </div>
          </div>
        </>
      )
    }

    let bookings = this.props.bookings.map(booking => <ProfileIndexItem key={booking.id} deleteBooking={this.props.deleteBooking} booking={booking} />)
    if (bookings.length === 0) {
      return <h1>Nothing here</h1>
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
        <div className='profile-container'>
          {this.loadBookings()}
        </div>
      </>
      )
  }
}

export default ProfileIndex;
