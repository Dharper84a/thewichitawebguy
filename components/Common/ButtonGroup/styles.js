import styled, {css} from "styled-components";

const selectedStyles = css`
    color: ${({theme}) => theme.text.link};
    background: white; //#89216B;
    /* border: none; */
`
export const CommonButtonGroup = styled.div`
    position: relative;
    display: flex;
    padding: 0.15rem 0.25rem;
`

export const Button = styled.button`
    font-size: ${({theme}) => theme.fontClamp(16, 20)};
    background: ${({theme}) => theme.text.link};
    border: none;
    border-radius: 0;
    /* border: 2px solid ${({theme}) => theme.background.white}; */
    transition: all 0.16s ease-in;
    ${props => props.isSelected === true && selectedStyles};
    
    &:first-of-type {
        border-radius: 0.25rem 0 0 0.25rem;
        border-right: 2px solid ${({theme}) => theme.background.white};
    }
    &:last-of-type {
        border-radius: 0 0.25rem 0.25rem 0;
        border-left: 2px solid ${({theme}) => theme.background.white};
    }
    @media (min-width: 768px) {
        
        transition: all 0.16s ease-in;
        &:hover {
            color: ${({theme}) => theme.text.light};
            background: #89216B;
        }
            
    }
`