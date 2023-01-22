import styled, {keyframes} from "styled-components";

const fxMove = keyframes`
    0% {
        transform: translateX(-150vw);
        opacity: 0;
    }
    50% {
        opacity: 0.75;
    }
    100% {
        transform: translateX(150vw);
        opacity: 0.25;
    }
`

export const BackgroundEffectBox = styled.div`
    position: relative;
    transform: rotateZ(45deg) translate(-30%, 15%);
    width: 200vw;
    height: 200vh;
`

export const EffectItem = styled.div`
    position: absolute;
    top: ${props => props.top}%;
    left: 0;
    width: ${props => props.tailLength}px;
    min-width: 100px;
    height: 15px;
    background: linear-gradient(
        -45deg,
        rgba(${props => props.tailColor}, 0.5),
        rgba(0, 0, 255, 0)
    );
    border-radius: 1rem;
    opacity: 0;
    filter: drop-shadow(0 0 0.5rem rgba(${props => props.tailColor}, 1));
    animation: ${fxMove} ${props => props.animationSpeed}ms ${props => props.delay}ms linear infinite;
`;