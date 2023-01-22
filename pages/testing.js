import * as React from "react";
import styled, { keyframes } from "styled-components";
import BackgroundEffect from "../components/BackgroundEffect";

const STAR_COUNT = 25;
const MIN_ANIMATION_SPEED = 1000;
const MAX_ANIMATION_SPEED = 7500;

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


const BodyBox = styled.div`
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    height: 100vh;
    overflow: hidden;
    display: flex;
    font-family: "Anton", sans-serif;
    justify-content: center;
    align-items: center;
`;

const SkyBox = styled.div`
    position: relative;
    transform: rotateZ(45deg);
    width: 200vw;
    height: 200vh;
`;

const ShootingStar = styled.div`
    position: absolute;
    top: ${props => props.top}%;
    left: 0;
    width: ${props => props.tailLength}px;
    min-width: 100px;
    height: 15px; // height of the tail
    // Direction of tail
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

const TestingPage = (props) => {
    const [starComponents, setStarComponents] = React.useState();
    const tailColors = [
        '95, 145, 255',
        '153,50,204',
        '199,21,133'
    ]

    const getRandomRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const shootingStarProps = () => {
        const animationSpeed = getRandomRange(MIN_ANIMATION_SPEED, MAX_ANIMATION_SPEED);
        const tailLength = ((MAX_ANIMATION_SPEED / animationSpeed) * 100).toFixed(0);
        return {
            delay: getRandomRange(MIN_ANIMATION_SPEED, MAX_ANIMATION_SPEED),
            animationSpeed: animationSpeed,
            top: getRandomRange(1, 100),
            tailLength: tailLength,
            tailColor: tailColors[getRandomRange(0, tailColors.length - 1)],
        };
    };

    React.useEffect(() => {
        setStarComponents(new Array(STAR_COUNT).fill(<></>));
    }, [])

    return (
        <BackgroundEffect />
        // <BodyBox>
        //     <SkyBox>
        //         {starComponents &&
        //             starComponents.map((empty, key) => {
        //                 return <ShootingStar {...shootingStarProps()} key={key} />;
        //             })
        //         }
        //     </SkyBox>
        // </BodyBox>
    );
};

export default TestingPage;
