import React from 'react';

import { SiteHeaderContainer, PageContentContainer } from './LayoutStyles';
export const SiteHeader = () => {

  return(
    <SiteHeaderContainer>
        <img src="../images/FPO-Logo-350-50.jpg" />
        <nav>
          <ul>
            <li>
              <a href="#">What I Do</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
    </SiteHeaderContainer>
  )

}

export const PageContent = (props) => {
  return(
    <PageContentContainer>
      {props.children}
    </PageContentContainer>
  );
}