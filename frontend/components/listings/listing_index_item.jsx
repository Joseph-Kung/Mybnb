import React from 'react';
import { Link } from 'react-router-dom';
import ListingIndexItemSlider from './listing-slider';
import Carousel from 'nuka-carousel';

const ListingIndexItem = ({listing, fetchListing}) => {
  const findType = () => {
    if (listing.privateRoom === true) return 'Private Room';
    return 'Whole House';
  }

  const slider = () => {
    if (listing.photoUrls) {
      return (
        <Carousel disableKeyboardControls={true}>
          <img className='listing-picture' src={listing.photoUrls[0]} />
          <img className='listing-picture' src={listing.photoUrls[1]} />
          <img className='listing-picture' src={listing.photoUrls[2]} />
          <img className='listing-picture' src={listing.photoUrls[3]} />
        </Carousel>
      )
    } else {
      return null;
  }
}

  

  const rating = <><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i></>
  return (
    <>
    <div className='listing-item-container'>
      <Link to={`/listings/${listing.id}`}>
            <div className='photo-container'>
            {slider()}
            </div>
            <div className='listing-item-details'>
              <span className='listing-type'>{findType()} 	• {listing.city}</span>
              <div className='listing-title'>{listing.title}</div>
              <span className='listing-nightly-info'>${listing.price} per night • Free cancellation</span>
              <div className='rating'>{rating}</div>
          </div>
      </Link>
    </div>
      
    </>
  )
};

export default ListingIndexItem;