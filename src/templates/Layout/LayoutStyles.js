import styled from 'styled-components';

export const SiteHeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 1rem 6rem;
  background: #1d1d1d;
  // box-shadow: 0 4px 14px rgba(111,14,140,0.55), 0 14px 14px rgba(205, 45, 119,0.25);
  nav {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        margin: 0 0.5rem;
        a {
          display: inline-block;
          padding: 0.125rem 0.25rem;
          &::after{
            display: block;
            content: '';
            background: rgb(17,17,212);
            background: linear-gradient(90deg, rgba(17,17,212,1) 0%, rgba(214,14,235,1) 100%);
            width: 0%;
            height: 2px;
            transition: width 0.15s ease-in-out;
          }
          &:hover {
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }
`

export const PageContentContainer = styled.main`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  /* padding: 0 6rem; */
`