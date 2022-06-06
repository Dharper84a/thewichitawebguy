import React from 'react';

import { StarfieldContainer } from './styles';
const Starfield = () => {

  return (
    <StarfieldContainer>
      <div className="small-stars"></div><div className="medium-stars"></div><div className="large-stars"></div>
    </StarfieldContainer>
  )
}

export default Starfield;