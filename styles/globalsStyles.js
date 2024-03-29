import { createGlobalStyle, css, keyframes } from "styled-components";

const fxLinkInlineHover = keyframes`
    0% {
        width: 25%;
    }
    40% {
        width: 10%;
        background-color: rgb(187,55,125);
    }
    100% {
        width: 65%;
        background-color: rgb(187,55,125);
    }
`
const fxLinkInlineHoverOut = keyframes`
    0% {
        width: 65%;
        background-color: rgb(187,55,125);
    }
    100% {
        width: 25%;
        background-color: rgb(255,255,255);
    }
`
export const ContentPadding = css`
    padding: 0 6%;
`
export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: ${({theme}) => theme.font.primary}; 
    }

    main {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    /** LISTS */
    menu {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            margin: 0 0 0.5rem;
        }
    }
    /** END - LISTS */

    /** HEADINGS */
    h1, h2, h3, h4, h5, h6 {
        color: ${({theme}) => theme.text.primary};
        font-family: ${({theme}) => theme.font.secondary};
        font-weight: 500;
    }

    h1 {
        font-size: ${({theme}) => theme.fontClamp(36, 60)};
    }

    h2 {
        font-size: ${({theme}) => theme.fontClamp(26, 32)};
    }

    h3 {
        font-size: ${({theme}) => theme.fontClamp(22, 28)};
    }

    h4 {
        font-size: ${({theme}) => theme.fontClamp(18, 24)};
    }

    h5 {
        font-size: ${({theme}) => theme.fontClamp(16, 20)};
    }

    h6 {
        font-size: ${({theme}) => theme.fontClamp(16, 20)};
    }
    /** END - HEADINGS */

    /** CONTENT */
    span, p, li {
        color: ${({theme}) => theme.text.primary};
        font-family: ${({theme}) => theme.font.primary};
        font-size: ${({theme}) => theme.fontClamp(16, 18)};
    }

    p {
        line-height: 1.4;
    }
    /** END - CONTENT    */
    
    /** LINK */
    a {
        position: relative;
        color: ${({theme}) => theme.text.link};
        text-decoration: none;
        &::before {
            content: ' ';
            position: absolute;
            margin-bottom: -0.125rem;
            bottom: 0;
            right: 0;
            width: 25%;
            height: 0.125rem;
            background-color: rgba(255,255,255,1);
            border-radius: 1px;
            animation: ${fxLinkInlineHoverOut} 0.3s ease both;
        }
        &:hover {
            &::before {
                animation: ${fxLinkInlineHover} 0.3s ease both;
            }
        }
    }
    /** END - LINK */

    /** FORM */
    fieldset {
        margin: 0;
        padding: 0;
        border: none;
    }
    legend {
        padding: 0.75rem 0 0.25rem 0;
        font-family: ${({theme}) => theme.font.secondary};
        font-size: ${({theme}) => theme.fontClamp(22, 26)};
        font-weight: 500;
        letter-spacing: 0.25px;
    }
    /** END - FORM */
    button {
        position: relative;
        z-index: 15;
        padding: 0.5rem 1rem;
        color: ${({theme}) => theme.button.primary.text};
        font-size: ${({theme}) => theme.fontClamp(16, 18)};
        background: rgba(199,21,133, 0.75);
        border: none;
        border-radius: 0.125rem;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            transform: translateX(15px);
        }
       
    }
    @media (prefers-color-scheme: light) {
    html {
        color-scheme: dark;
    }
    body {
        color: white;
        background: black;
    }
    }
`