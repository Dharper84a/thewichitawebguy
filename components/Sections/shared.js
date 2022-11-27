import styled from "styled-components";
import { ContentPadding } from "../../styles/globalsStyles";

export const PaddedSection = styled.section`
    ${ContentPadding}
`

export const Prespective = styled.div`
    width: 200px;
    height: 300px;
    border: 1px solid white;
    perspective: 600px;
    &.is-flipped {
        .card {
            transform: translateX(-100%) rotateY(-180deg);
        }
        
    }
    .card {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transform-style: preserve-3d;
        transform-origin: center right;
        transition: transform 1s;
    
    }
    
    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 260px;
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        backface-visibility: hidden;
        &--front {
            background: red;
        }
        &--back {
            background: blue;
            transform: rotateY(180deg);
        }
    }
`