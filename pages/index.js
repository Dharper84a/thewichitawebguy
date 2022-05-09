import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import styles from '../styles/modules/pages/index.module.scss';

import SiteHeader from '../components/SiteHeader/SiteHeader'

import rainyNightAudio from '../public/Dark_Rainy_Night.ogg';


export default function Home() {
  const [marriedFor, setMarriedFor] = useState(0);
  const [sinceLostChild, setSinceLostChild] = useState(0);
  const [dailyWords, setDailyWords] = useState({heading: '', subHeading: '', icon: null});

  const yearsSinceHandler = (refYear) => {
    let year = new Date().getFullYear();
    return year - refYear;
  }

  const timeOfDayHandler = () => {
    let hour = new Date().getHours();
    if(hour >= 5 && hour < 12) {
      // 5A -> 11:59A
      return {
        heading: 'Good Morning!',
        subHeading: 'Wishing you a best day.',
      }
    }

    if(hour >= 12 && hour < 17) {
      // 12P -> 4:59P
      return {
        heading: 'Good Afternoon!',
        subHeading: 'Keep on going your doing great today.',
      }
    }

    if(hour >= 17 && hour < 21) {
      // 5P -> 8:59P
      return {
        heading: 'Mighty Fine Evening',
        subHeading: 'What are we having for dinner?',
      }
    }

    if(hour >= 21 && hour < 24) {
      // 9P -> 11:59P
      return {
        heading: 'Good Night!',
        subHeading: 'Hope you have a wonderful and restful nights sleep.',
      }
    }

    return {
      heading: "...",
      subHeading: 'Why are you still up? Can\'t sleep? Try this soothing sound to help.',
      icon: '&#128551;',
    }

  }

  
  useEffect(() => {
    setMarriedFor(yearsSinceHandler(2014));
    setSinceLostChild(yearsSinceHandler(2018));
    setDailyWords(timeOfDayHandler());
  }, []);

  return (
    <>
    {/* <SiteHeader /> */}
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

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
    </>
  )
}

/*
<h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        */