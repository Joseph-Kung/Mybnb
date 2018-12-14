import React from 'react';

const SmallPictures = ({ listing }) => {
  let smallPictures
  if (listing.photoUrls && listing.photoUrls.length > 1) {
    smallPictures = listing.photoUrls.slice(1).map(photo => <div id='picture-container' key={photo.slice(1)}className='small-pictures-container'><img key={photo} className='small-pic' src={photo} /></div>)
    return smallPictures;
  } else {
    smallPictures = <><div className='default-small-pic' />
      <div className='default-small-pic' />
      <div className='default-small-pic' />
      <div className='default-small-pic' /></>
    return smallPictures;
  }
}

export default SmallPictures;