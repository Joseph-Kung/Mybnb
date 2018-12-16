import React from 'react';
import { css } from 'react-emotion';
import { PulseLoader } from 'react-spinners';

const DotLoading = props => {
  return (
    <div className='spinner-body'>
      <PulseLoader
        sizeUnit={"px"}
        size={5}
        color={'#008489'}
        loading={props.loading}
      />
    </div> 
  )
}

export default DotLoading;