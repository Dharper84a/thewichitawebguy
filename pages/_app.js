/** STYLES AND THEME */
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import {ThemeProvider } from 'styled-components'
import { darkTheme } from '../styles/theme'
import { GlobalStyles } from '../styles/globalsStyles'
/** END - STYLES AND THEMES */

function MyApp({ Component, pageProps }) {
  return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
  );
}

export default MyApp
/*
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
*/