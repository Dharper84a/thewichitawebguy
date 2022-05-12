import React from 'react';

import TemplatePageHome from '../templates/PageHome/TemplatePageHome';
const PageHome = (props) => {
  

  return (
    <>
    <title>The Wichita Web Guy</title>
    <TemplatePageHome />
    </>
  )
}

export default PageHome;

/*

<div className={styles.container}>
      <Head>
        <title>The Wichita Web Guy</title>
        <meta name="description" content="The Wichita Web Guy aka Donald Harper. A Wichita native that supports the local Wichita and surrounding areas by providing website services and consultation to Wichita area businesses with a focus on small businesses and affordability." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={styles.dailyWords}>
              <span>{dailyWords.heading}</span>
              <span>{dailyWords.subHeading}</span>
              {dailyWords.heading === '...' &&
                <figure>
                  <audio controls>
                    <source src={rainyNightAudio} type="audio/ogg" />
                    Looks like your browser doesn&apos;t support the audio element.
                  </audio>
                  <figcaption>
                    <cite>Dark Rainy Night - By: kindland</cite>
                  </figcaption>
                </figure>
                
                
              }
            </div>
            <h3>Who Am I?</h3>
            <strong>I&apos;m a...</strong>
            <ul>
                <li>
                  Professional Full Stack Developer with a focus on web technologies.
                </li>
                <li>
                  A husband of {marriedFor} years.<br /><small>I totally made a function that automatically calculates how long I&apos;ve been married. Not getting in trouble for that! &#128526;</small>
                </li>
                <li>
                  A father of three minus one children.<br /><small>We lost our ten year old son {sinceLostChild} years ago. So, kind of a tough one to answer. &#128546;</small>
                </li>
                <li>
                  A life long friend
                </li>
                <li>
                  A not so great gamer, but I enjoy them...
                </li>
                <li>
                  Passionate about helping others by sharing what I&apos;m good at.
                </li>
              </ul>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.divider}></div>
            <h1>The Wichita Web Guy</h1>
            <h2>aka Donald Harper</h2>
          </div>

        </div>
      </main>

      </div>
      */