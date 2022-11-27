import styled, {keyframes} from "styled-components";

const fxRotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
export const FlipContentSection = styled.div`
    width: 100%;
    height: 100%;
    perspective: ${props => props.prespective}px;
    &.is-flipped {
        .card {
            transform: translateX(-100%) rotateY(-180deg);
        }
    }
    .card {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform-origin: center right;
        transition: transform 0.6s;
    
    }
    
    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        &--front {
            /* background: red; */
        }
        &--back {
            transform: rotateY(180deg);
        }

        footer {
            margin: 2rem 0;
        }
    }
    .loading {
        margin: 1rem 0;
        text-align: center;
        svg {
            color: ${({theme}) => theme.text.primary};
            font-size: 32px;
            animation: ${fxRotate} 1.25s linear infinite;
        }
    }
    .error {
        margin: 1rem 0;
        padding: 1rem;
        color: ${({theme}) => theme.text.primary};
        background: #c31432;
        border-radius: 0.25rem;
    }
`