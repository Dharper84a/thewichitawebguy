import styled from "styled-components";

export const CommonToggle = styled.button`
    position: relative;
    display: flex;
    padding: 0.15rem 0.25rem;
    background: ${({theme}) => theme.text.link};
    box-shadow: inset 0.5rem 0.5rem 0.5rem rgba(0,0,0,0.1),inset -0.5rem -0.5rem 0.5rem rgba(0,0,0,0.1);
    span {
        width: 50%;
        padding: 0 1rem;
        font-size: ${({theme}) => theme.fontClamp(16, 20)};
    }
    div {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(${props => props.isOn ? '100%' : '0%'});
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        background: ${({theme}) => theme.background.white};
        border: 2px solid #BB377D;
        border-radius: 0.25rem;
        transition: all 0.15s ease-in;
        svg {
            color: ${({theme}) => theme.text.link};
            font-size: ${({theme}) => theme.fontClamp(20, 28)};
        }
    }
    
    @media (min-width: 768px) {
        &:hover {
            div {
                background: ${({theme}) => theme.background.light};
                transform: translateX(${props => props.isOn ? '100%' : '0%'}) scale(1.1);
            }
        }
    }
`