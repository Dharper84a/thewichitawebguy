import React from 'react';

import SectionContainer from '../../SectionContainer/SectionContainer';
const TheProcessPageSection = () => {

  return(
    <SectionContainer>
      <h2>How This Web Process Works</h2>
      <p>
        Your busy I'm busy we're all busy. Spend a few minutes playing with the calculator. If you like what you see use the form below to start a conversation. Although my process isn't traditional and by no means formal there are some key points we will need to talk about.
      </p>
      <p className="hint">
        HINT - You can use the "Use Estimate" button on the form. This will send me your calculator information!
      </p>
      <p>Once the ball is moving you can expect the process to follow this path:</p>
      <h3>Consultation or Existing Website</h3>
      <ol>
        <li>If you have a specific concern maybe a meeting. If you just want a review of your curent website and my recommendations probably no meeting needed.</li>
        <li>I'll run tests against your website, and do a by hand review of your website. Page by page and compile a list of recommendations along with how your website stands against some metrics. All consultations include a cost estimate for me to complete the recommendations - you can consider this a formal estimate.</li>
        <li>You decide if you want assistance with the recommendations. A payment contract will be created and signed if you do.</li>
        <li>A request for all required logins. No work will be started until all required logins are provided.</li>
        <li>Work on the recommendations are started and once completed an after action report generated.</li>
      </ol>
      <h3>New Website</h3>
      <ol>
        <li>A meeting to dive into what I do and what you like and dislike. Think colors, things on other websites that you like or hate, a domain name, anything you can think of. A face to face meeting is perferred - other formats are <em>okay</em>, but we will not get as much out of it. Expect this to take about an hour.</li>
        <li>Formal estimate and payment contract signed.</li>
        <li>Creation of digital identies, accounts, and setup of development environment.</li>
        <li>If you wanted design proofs these would be created and sent to you for approval. If not then my base design will implemented integrating things covered from step #1.</li>
        <li>Adjustments on design if you wanted design proofs and you had adjustments.</li>
        <li>Build of the website starts.</li>
        <li>Once build is completed you'll be provided a link for review and provide feedback.</li>
        <li>Adjustments based on your feedback.</li>
        <li>Transition development environment to production.</li>
        <li>Verify all metrics are linked correctly, website is optimized, and SEO is perfect.</li>
      </ol>
    </SectionContainer>
  );
}

export default TheProcessPageSection;