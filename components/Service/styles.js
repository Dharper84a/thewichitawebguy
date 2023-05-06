import styled from "styled-components";

export const ServiceBox = styled.section`
    margin: 4rem 0;
    h2 {
        margin-bottom: 1rem;
    }
    footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "p t" "b b";
        gap: 1rem;
        max-width: 400px;
        div {
            grid-area: p;
            display: grid;
            grid-template-columns: 1fr;
            span {
                &:first-of-type {
                    font-size: ${({theme}) => theme.fontClamp(14, 16)};
                    font-weight: 700;
                }
            }
            &:last-of-type {
                grid-area: t;
                justify-self: flex-end;
            }
        }
        button {
            grid-area: b;
        }
    }
`