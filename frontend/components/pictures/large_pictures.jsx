import React from 'react';

const LargePictures = ({ listing }) => {
  let picture
  if (listing.photoUrls) {
    picture = listing.photoUrls.slice(0, 1).map(photo => <img key={photo} className='large-pic' src={photo} />)
    return picture
  } else {
    picture = <div className='default-big-pic'></div>
    return picture;
  }
}

export default LargePictures;