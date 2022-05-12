import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import {Overlay} from './styles';
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
const GrettingsOverlay = (props) => {
  const [marriedFor, setMarriedFor] = useState(0);
  const [sinceLostChild, setSinceLostChild] = useState(0);
  const [dailyWords, setDailyWords] = useState({heading: null, subHeading: null, icon: null});
  const [progress, setProgress] = useState(0);
  const [progressInterval, setProgressInterval] = useState(0);
  const [openDuration, setOpenDuration] = useState(null);

  const componentUnloadHandler = () => {
    props.onClose();
  }

  const progressUpdateHandler = () => {
    setProgressInterval(progressInterval + 1);
    let value = (progressInterval * 25) / parseInt(props.openDuration) * 100;
    setProgress(value);
  }
  
  useEffect(() => {
    setMarriedFor(yearsSinceHandler(2014));
    setSinceLostChild(yearsSinceHandler(2018));
    setDailyWords(timeOfDayHandler());

  }, []);




  useEffect(() => {
    if(dailyWords.heading === null) return;

    if(dailyWords.heading) {
      if(dailyWords.heading !== '...') {
        setOpenDuration(-1);
        // setOpenDuration(props.openDuration);
      } else {
        setOpenDuration(-1);
      }
    }
    
  }, [dailyWords, props])

  useEffect(() => {
    if(openDuration === null) return;

    if(openDuration !== -1) {
      progressUpdateHandler();
      setTimeout(() => {
        componentUnloadHandler();
      }, openDuration);
    }
  }, [openDuration]);

  useEffect(() => {
    setTimeout(() => {
      progressUpdateHandler();
    }, 25);
  }, [progressInterval]);
  return (
    <Overlay className={props.className}>
      <div className="content">
        <span className="heading">{dailyWords.heading}</span>
        <span className="sub-heading">{dailyWords.subHeading}</span>

        {openDuration !== null && openDuration !== -1 &&
        <div className="progress-bar" style={{width: `${progress}%`}}>
          
        </div>
        }
        
        {openDuration === -1 &&
        <>
        
        <figure className="audio">
          <audio controls>
            <source src={`/Dark_Rainy_Night.ogg`} type="audio/ogg" />
            Looks like your browser doesn&apos;t support the audio element.
          </audio>
    
          <figcaption>
            <cite>Dark Rainy Night - By: kindland</cite>
          </figcaption>
        </figure>
        
        <button onClick={componentUnloadHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        </>
        }
        
      </div>
    </Overlay>
  )
}

export default GrettingsOverlay;