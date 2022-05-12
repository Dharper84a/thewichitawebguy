import styled from 'styled-components';

export const Overlay = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  padding: 5vh 2.5vw 0 2.5vw;
  background: rgb(64,13,89);
  background: linear-gradient(225deg, rgba(64,13,89,1) 0%, rgba(19,14,71,1) 100%);
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    span {
      width: 100%;
      color: #fff;
      &.heading {
        padding: 0 0 0.5rem 0;
        font-size: 2rem;
        font-weight: 600;
      }
      &.sub-heading {
        font-size: 1.5rem;
      }
    }
    .progress-bar {
      margin-top: 1rem;
      height: 1rem;
      border-radius: 2rem;
      background: rgb(17,17,212);
      background: linear-gradient(90deg, rgba(17,17,212,1) 0%, rgba(214,14,235,1) 100%);
    }
    figure {
      width: 100%;
      margin-top: 2rem;
      cite {
        color: #fff;
        font-size: 0.65rem;
        font-style: normal;
        font-weight: normal;
      }
    }
    audio {
      width: 100%;
      min-width: 250px;
      max-width: 300px;
    }
    button {
      display: block;
      background: transparent;
      border: none;
      cursor: pointer;
      svg {
        font-size: 3rem;
        color: #fff;
        transition: transform 1s;
        &:hover {
          transform: rotate(90deg) scale(1.75);
        }
      }
    }
  }
`