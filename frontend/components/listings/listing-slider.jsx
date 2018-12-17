import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const ListingIndexItemSlider = ({listing})  => {
  const settings = {
    dots: true,
    speed: 500,
    adaptiveHeight: true,
    
    // slidesToShow: 5,
  };

  return (
    <Slider {...settings} >
      <div>
        <img className='listing-picture' src={listing.photoUrls[0]} />
      </div>
      <div>
        <img className='listing-picture' src={listing.photoUrls[1]} />
      </div>
      <div>
        <img className='listing-picture' src={listing.photoUrls[2]} />
      </div>
      <div>
        <img className='listing-picture' src={listing.photoUrls[3]} />
      </div>
    </Slider>
  );
}

export default ListingIndexItemSlider
