import styled from "styled-components";

export const CardComponent = styled.div`
    overflow: hidden;
    position: relative;
    width: 85%;
    max-width: 768px;
    min-height: 400px;
    margin: 4rem auto;
    padding: 0 ${({theme}) => theme.paddings.screenEdge};
    border: 1px solid rgba(27,39,53);
    border-radius: 0.5rem;
    background: transparent;
    &::after {
        content: ' ';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        /* max-width: 768px; */
        height: 100%;
        background: rgba(27,39,53,0.95);
        backdrop-filter: blur(0.5rem) brightness(200%);
        border-radius: 0.5rem;
    }
    @media ${({theme}) => theme.mediaQuery.up1024} {
        max-width: 1600px;
    }
`

export const CardContent = styled.div`
    position: relative;
    z-index: 15;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    figure {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        align-self: center;
        width: 175px;
        height: 175px;
        margin: 0;
        border-radius: 1rem 1rem 0.125rem 0.125rem;
        
    }

    h2, p {
        margin: 0 0 1rem;
        text-align: center;
    }

    menu {
        button {
            width: 100%;
            max-width: 300px;
        }
    }
    @media ${({theme}) => theme.mediaQuery.up768} {
        padding: 2rem;
        menu {
            button {
                width: 200px;
            }
        }
    }
    @media ${({theme}) => theme.mediaQuery.up1024} {
        h2, p {
            text-align: left;
        }
        figure {
            align-self: flex-start;
        }
    }
`
export const ServiceOptions = styled.div`
    display: grid;
    grid-template-areas: 
        "T"
        "M"
        "S";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    @media ${({theme}) => theme.mediaQuery.up1024} {
        grid-template-areas: 
        "T S"
        "M S";
        grid-template-columns: 200px 1fr;
        grid-template-rows: min-content 1fr;
        gap: 1rem 3rem;
    }
    h3 {
        grid-area: T;
        margin-bottom: 0.5rem;
    }
    menu {
        grid-area: M;
    }
    aside {
        grid-area: S;
    }
`
export const ServiceCard = styled.div`
    margin: 2rem 0;
    padding-left: 1rem;
    border-left: 4px solid white;
    h4 {
        margin: 0 0 0.5rem;
    }
    p {
        text-align: left;
    }
`