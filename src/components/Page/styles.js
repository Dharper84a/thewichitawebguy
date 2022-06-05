import styled from 'styled-components'

const getSpeed = (multiplier, base) => {
  return multiplier * base;
}
const getRnd = (min = 0, max = 2000) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const multipleBoxShadow = (n) => {
  let value = `${getRnd()}px ${getRnd()}px rgba(255,255,255,0.25)`;

  for(var i = 1; i <= n; i++) {
    let transparency = getRnd(0,50) / 100;
    value = `${value}, ${getRnd()}px ${getRnd()}px rgba(255,255,255,${transparency})`;
  }

  return value;
}

const smallShadows = multipleBoxShadow(700);
const mediumShadows = multipleBoxShadow(200);
const largeShadows = multipleBoxShadow(100);

export const PageContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
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
  margin: 1rem 0;
  ul {
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    margin: 2rem 0;
  }
`

export const CTA = styled.p`
  max-width: 20rem;
  margin: 0 auto;
  padding: 1rem 0;
  color: #fff;
  font-size: 1rem;
  line-height: 1.25;
  @media screen and (min-width: 768px) {
    margin: 2rem 0;
    font-size: 1.125rem;
    text-align: center;
  }
`
export const FlipText = styled.div`
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
export const StarsSmall = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${smallShadows};
  animation: fxStar 75s linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${smallShadows};
  }
`

export const StarsMedium = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${mediumShadows};
  animation: fxStar 100s linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${mediumShadows};
  }
`

export const StarsLarge = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${largeShadows};
  animation: fxStar 150s linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${largeShadows};
  }
`

PageContainer.defaultProps = {
  theme: {
    name: 'default',
    background: '#1B2735',
  }
}

const theme = {
  name: 'starfield',
  background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
};

