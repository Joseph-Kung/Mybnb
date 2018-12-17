import React from 'react';
import { Link } from 'react-router-dom';
import ListingIndexItemSlider from './listing-slider';

const ListingIndexItem = ({listing, fetchListing}) => {
  const findType = () => {
    if (listing.privateRoom === true) return 'Private Room';
    return 'Whole House';
  }

  // let photo;
  // if (listing.photoUrl) {
  //   photo = <img className='listing-picture' src={listing.photoUrl} />
  // } else {
  //   photo = null;
  // }

  const rating = <><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i></>
  return (
    <>
    <div className='listing-item-container'>
      <Link to={`/listings/${listing.id}`}>
            <div className='photo-container'>
              <ListingIndexItemSlider listing={listing} />
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