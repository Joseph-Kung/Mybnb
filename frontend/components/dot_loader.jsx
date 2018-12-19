import React from 'react';
import { css } from 'react-emotion';
import { PulseLoader } from 'react-spinners';

const DotLoading = props => {
  return (
    <>
      <PulseLoader
        sizeUnit={"px"}
        size={15}
        color={'#008489'}
        loading={props.loading}
      />
    </>
  )
}

export default DotLoading;