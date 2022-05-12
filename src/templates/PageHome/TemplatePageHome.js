import React, {useEffect, useState} from 'react';

import Website from '../Website';
import GrettingsOverlay from '../../components/GrettingsOverlay/GrettingsOverlay';

const TemplatePageHome = (props) => {
  const [grettingsOverlayVisible, setGrettingsOverlayVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setGrettingsOverlayVisible(false);
    }, 5000);
  })
  return(
    <Website>
      {grettingsOverlayVisible &&
      <GrettingsOverlay />
      }
    </Website>
  )

}

export default TemplatePageHome;