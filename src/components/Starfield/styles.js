import styled from "styled-components";

const getRnd = (min = 0, max = 2000) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const multipleBoxShadow = (n) => {
  let value = `${getRnd()}px ${getRnd()}px rgba(255,255,255,0.25)`;

  for (var i = 1; i <= n; i++) {
    let transparency = getRnd(0, 50) / 100;
    value = `${value}, ${getRnd()}px ${getRnd()}px rgba(255,255,255,${transparency})`;
  }

  return value;
};

const smallStars = multipleBoxShadow(700);
const mediumStars = multipleBoxShadow(200);
const largeStars = multipleBoxShadow(100);

export const StarfieldContainer = styled.div`
  .small-stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${smallStars};
    animation: fxStar 75s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: ${smallStars};
    }
  }

  .medium-stars {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${mediumStars};
    animation: fxStar 100s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: ${mediumStars};
    }
  }

  .large-stars {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${largeStars};
    animation: fxStar 150s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: ${largeStars};
    }
  }
`;
