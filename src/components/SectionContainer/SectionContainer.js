import React from 'react';

import {Container} from './styles';
const SectionContainer = (props) => {

  return(
    <Container>
      {props.children}
    </Container>
  )
}

export default SectionContainer;