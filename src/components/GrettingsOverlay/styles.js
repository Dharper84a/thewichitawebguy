import styled from 'styled-components';

export const Overlay = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  padding: 10vw 0 0 0;
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
      height: 1rem;
      border-radius: 2rem;
      background: rgb(17,17,212);
      background: linear-gradient(90deg, rgba(17,17,212,1) 0%, rgba(214,14,235,1) 100%);
    }
  }
`