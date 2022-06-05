import React from 'react';

import SectionContainer from '../../SectionContainer/SectionContainer';

const getGreeting = () => {
  let hour = new Date().getHours();
  if(hour >= 5 && hour < 12) {
    return 'Good Morning!';
  }

  if(hour >= 12 && hour < 17) {
    return 'Good Afternoon!';
  }

  if(hour >= 17 && hour < 21) {
    return 'Good Evening!';
  }

  if(hour >= 21 && hour < 24) {
    return 'Good Night!';
  }

  return 'Is is late go to sleep!';

}

const ReasonPageSection = () => {
  const greeting = getGreeting();
  return(
    <SectionContainer>
      <h2>Who?</h2>
      <p><strong>{greeting}</strong><br />
      Professionally I'm a Full Stack Developer with a focus on web technologies. Personally I'm a father, a husband, a not-so-great gamer, and a hater of lawn care (amoung other things). I have a desire to help my Wichita Kansas community by lowering the barrier to great websites for local small businesses, that cannot afford or justify the expense hiring an agency commands.
      </p>
      <p>
      If your a local small business wanting a professional website that actually works for you by driving customers to your door. I might be able to help.
      </p>
      <h2>
        What I Offer
      </h2>
      <p>A no <strong>BS</strong> approach to everything. Professional quality website, web consultation and existing website optimizations. I really want to focus on creating new high quality performant websites for small business - for the simple fact you'll get more bang for your buck and return on your investment.</p>
      <p></p>
      <h2></h2>
      <h2>What I Believe and Want</h2>
      <p>I'm pro-community and small business. I want every small business in my community to have access to a great performant website and a website that works for them to increase their exposure. I do not believe a great website that works for your company should be behind a paywall that forbids many small businesses access.</p>
      <h2>My Reason for Doing This</h2>
      <p>
        Simply put - I do not believe that a great website should be behind a paywall that small businesses cannot afford, or justify the expense. I have a skillset and desire I want use to help small businesses. Because, honestly and selfishly it makes me feel good.
      </p>
      <p>
        I'm pro-community and whole-heartedly want to help local small businesses - specifically ones that cannot justify the cost of an agency service. My goal is to provide as many local small businesses a great and performant website that works for them and worry free. If I cannot provide them a website (I have scope limits) I'll provide consultation and other in support of their online presense.
      </p>
      <h3>But, what about these website builders?</h3>
      <p>
        An online presense has become a requirement for all businesses. Website builders, such as Wix and SquareSpace, help fill that gap. However, most of the websites built using these builders will put you at an immediate disadvantage to other websites. There is so much more that goes into a great website then just want is seen on the screen. These hidden or more technical aspects of a website is actually what makes a great website. A website should work for you all the time, not part time.
      </p>
      <h3>What Makes The Wichita Web Guy Different?</h3>
      <p>
        The Wichita Web Guy - is actually a guy in Wichita and has been for 30 years. I've worked as a freelancer and professionally in a couple of web agencies around town. I've seen the process, I know the cost, and I know what gets produced at these agencies.
      </p>
      <p>
        This <strong>IS NOT MY JOB</strong>! I do not rely on this to make my bills every month. Extra money is nice - we can all agree on that! But, I make enough to support my family and their needs with my career as a Full Stack Developer. I don't charge to pay the bills - I charge for how much my time is worth. This takes away time that I can spend with my family and that time does have a premium associated with it.
      </p>
    </SectionContainer>
  );
}

export default ReasonPageSection;