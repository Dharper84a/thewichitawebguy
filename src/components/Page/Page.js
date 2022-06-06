import React, {useEffect, useState} from 'react';

import Starfield from '../Starfield/Starfield';
import FlipText from '../FlipText/FlipText';

import {PageContainer, Content, CTA, Menu} from './styles';

const Page = (props) => {
  const onTransitionHandler = (e) => {
    e.preventDefault();
  
  }

  return(
    <PageContainer>
      <Starfield />
      <Content>
      <img src="../images/twwg-logo.png" width="400" height="90" />
        <FlipText />
        <CTA>
          Every business deserves a great website that doesn't cost thousands.
        </CTA>

        <Menu>
          {/* <span>SELECT ONE</span> */}
          <ul>
            <li>
              <a href="#">Who is The Wichita Web Guy?</a>
            </li>
            <li>
              <a href="#">What I'm Doing</a>
            </li>
            <li>
              <a href="#">The Cost</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Menu>
      </Content>
      {/* <button onClick={onTransitionHandler}>Transition</button> */}
    </PageContainer>
  )
}

export default Page;