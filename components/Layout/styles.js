import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: grid;
    min-height: 100vh;
    grid-template-areas: 
        "header"
        "main"
        "footer";
    grid-template-rows: 64px 1fr 128px;
    background: ${({theme}) => theme.background.base};
    background-attachment: fixed;
    main {
        grid-area: main;
    }
`