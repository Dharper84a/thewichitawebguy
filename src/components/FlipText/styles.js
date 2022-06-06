import styled from 'styled-components';

export const FlipTextContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  p {
    float: left;
    display: inline-flex;
    margin: 0;
    vertical-align: top;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    .word {
      position: absolute;
      display: flex;
      opacity: 0;
      .letter {
        transform-origin: center center 25px;
        &.out {
          transform: rotateX(90deg);
          transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
        }
        &.in {
          transition: 0.38s ease;
        }
        &.behind {
          transform: rotateX(-90deg);
        }
      }
    }
    .pink {
      color: #d60eeb;
    }
    .blue {
      color: #1111d4;
    }
    .purple {
      color: #750fe0;
    }
    .light-purple {
      color: #9e0fe5;
    }
    .alizarin {
      color: #e74c3c;
    }

    .wisteria {
      color: #8e44ad;
    }

    .peter-river {
      color: #3498db;
    }

    .emerald {
      color: #2ecc71;
    }

    .sun-flower {
      color: #f1c40f;
    }
  }
  @media screen and (min-width: 768px) {
    margin: 2rem 0;
    text-align: center;
    transform: translateX(-80px);
    p {
      float: none;
      font-size: 2rem;
    }
  }
`