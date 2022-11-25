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
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    body {
        font-family: ${({theme}) => theme.font.primary};
        /* background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364); */
    }

    * {
        box-sizing: border-box;
    }

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
        font-size: ${({theme}) => theme.fontClamp(32, 48)};
    }

    h3 {
        font-size: ${({theme}) => theme.fontClamp(28, 38)};
    }

    h4 {
        font-size: ${({theme}) => theme.fontClamp(24, 30)};
    }

    h5 {
        font-size: ${({theme}) => theme.fontClamp(20, 24)};
    }

    h6 {
        font-size: ${({theme}) => theme.fontClamp(16, 18)};
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