import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
// /Dark_Rainy_Night.ogg
import ImageLogo from '../../static/images/FPO-HeaderLogo.jpg';

// Templates
import { SiteHeader, PageContent } from './Layout/Layout';

// Styles
import '../styles/global.css';
import { Wrapper } from './WebsiteStyles';
// import { ThemeProvider } from 'styled-components';

const Website = (props) => {

  return (
    // <ThemeProvider>
      <Wrapper>
        {/* <SiteHeader /> */}
        <PageContent>
          {props.children}
        </PageContent>

      </Wrapper>
    // </ThemeProvider>
  )
}

export default Website;