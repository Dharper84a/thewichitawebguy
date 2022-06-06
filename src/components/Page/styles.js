import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 1600px;
  margin: 1rem auto 4rem;
  padding: 0 6%;

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

export const Menu = styled.nav`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 1rem 0;
  span {
    font-size: 2rem;
    color: #fff;
    /* direction: ltr; */
    transform: rotateZ(-90deg);
  }
  ul {
    list-style: none;
    li {
      margin: 0.25rem 0;
      font-size: 1rem;
      
    }
  }
  @media screen and (min-width: 768px) {
    margin: 2rem auto;
    ul {
      li {
        margin: 0.25rem 0;
        
        a {
          display: inline-block;
          width: 100%;
          margin: 0 1rem;
          padding: 0.25rem 1.5rem;
          font-size: 1.125rem;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.4s ease-in;
          &:after, &:before {
            content: "";
            display: block;
            height: 2px;
            width: 0%;
            margin: 0.25rem auto;
            background: rgb(17,17,212);
            background: linear-gradient(90deg, rgba(17,17,212,0.45) 0%, rgba(214,14,235,0.45) 100%);
            transition: 0.4s ease-in;
          }
          &:hover {
            letter-spacing: 4px;
            &:after, &:before {
              width: 100%;
            }
          }
        }
        
        
       
      }
    }
  }
`;

export const CTA = styled.p`
  position: relative;
  left: -7%;
  max-width: 600px;
  margin: 0;
  padding: 1rem 1rem;
  padding-left: 7%;
  color: #fff;
  font-size: 1rem;
  line-height: 1.25;
  background: rgb(17,17,212);
  background: linear-gradient(30deg, rgba(17,17,212,0.45) 0%, rgba(214,14,235,0.45) 100%);
  border-radius: 0 1rem 1rem 0;
  @media screen and (min-width: 768px) {
    left: 0;
    margin: 0 auto;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 1rem;
  }
`;
