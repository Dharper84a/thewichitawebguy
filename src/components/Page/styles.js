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
  let value = `${getRnd()}px ${getRnd()}px #FFF`;

  for(var i = 1; i <= n; i++) {
    value = `${value}, ${getRnd()}px ${getRnd()}px #FFF`;
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
  max-width: 1366px;
  margin: 1rem auto 6rem;
`
export const FlipText = styled.div`
  font-weight: 600;
  font-size: 3.5rem;
  color: #fff;
  text-align: center;
  transform: translateX(-80px);
  p {
    display: inline-flex;
    margin: 0;
    vertical-align: top;
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

