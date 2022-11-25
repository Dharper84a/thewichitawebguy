import styled from "styled-components";

import { ContentPadding } from "../../../styles/globalsStyles";

export const SiteHeader = styled.header`
    grid-area: header;
    height: 4rem;
    ${ContentPadding};
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
`

export const SiteTitle = styled.span`
    font-family: ${({theme}) => theme.font.secondary};
    font-size: ${({theme}) => theme.fontClamp(26, 32)};
    font-weight: 500;
`