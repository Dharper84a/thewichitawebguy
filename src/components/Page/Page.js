import React, {useEffect, useState} from 'react';


import {PageContainer, Content, FlipText,StarsSmall, StarsMedium, StarsLarge} from './styles';

const Page = (props) => {
  const onTransitionHandler = (e) => {
    e.preventDefault();
  
  }

  useEffect(() => {
    let words = document.querySelectorAll('.word');
    words.forEach(word => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      })
    })

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;

    words[currentWordIndex].style.opacity = '1';

    const rotateText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });

      nextWord.style.opacity = '1';

      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });

      currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    }

    rotateText();
    setInterval(rotateText, 4000);
  }, [])

  return(
    <PageContainer>
      <StarsSmall></StarsSmall>
      <StarsMedium></StarsMedium>
      <StarsLarge></StarsLarge>
      <Content>
      <img src="../images/twwg-logo.png" />
        <FlipText>
          <p>Websites Should Be&nbsp;</p>
          <p>
            <span class="word alizarin">Affordable</span>
            <span class="word peter-river">Performant</span>
            <span class="word emerald">Accessible</span>
            <span class="word sun-flower">Honest</span>
          </p>
        </FlipText>
      </Content>
      {/* <button onClick={onTransitionHandler}>Transition</button> */}
    </PageContainer>
  )
}

export default Page;