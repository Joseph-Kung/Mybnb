import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({listing, fetchListing}) => {
  const findType = () => {
    if (listing.privateRoom === true) return 'Private Room';
    return 'Whole House';
  }

  const rating = <><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i></>

  return (
    <>
    <Link to={`/listings/${listing.id}`}>
      <li>
        <div className='listing-item-container'>
          <div className='listing-picture'></div>
          <div className='listing-item-details'>
            <span className='listing-type'>{findType()} 	• {listing.city}</span>
            <div className='listing-title'>{listing.title}</div>
            <span className='listing-nightly-info'>${listing.price} per night • Free cancellation</span>
            <div className='rating'>{rating}</div>
          </div>
        </div>
      </li>
    </Link>
    </>
  )
};

export default ListingIndexItem;