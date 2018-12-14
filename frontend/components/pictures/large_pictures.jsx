import React from 'react';

const LargePictures = ({ listing }) => {
  let picture
  if (listing.photoUrls) {
    picture = listing.photoUrls.slice(0, 1).map(photo => <div id='picture-container' className='large-picture-container' key={photo.slice(1)}><img key={photo} className='large-pic' src={photo} /></div>)
    return picture
  } else {
    picture = <div className='default-big-pic'></div>
    return picture;
  }
}

export default LargePictures;