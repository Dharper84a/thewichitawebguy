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
  background: #424952;
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
        padding: 0 0 1rem 0;
        font-size: 2rem;
        font-weight: 600;
      }
      &.sub-heading {
        font-size: 1.5rem;
      }
    }
  }
`