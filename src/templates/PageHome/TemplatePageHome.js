import React, { useEffect, useState } from "react";

import Website from "../Website";
import GrettingsOverlay from "../../components/GrettingsOverlay/GrettingsOverlay";

const TemplatePageHome = (props) => {
  const [grettingsOverlayVisible, setGrettingsOverlayVisible] = useState(true);
  const [grettingsOverlayClass, setGrettingsOverlayClass] = useState(
    "grettings-overlay-open-animation"
  );
  const onCloseHandler = () => {
    setGrettingsOverlayClass("grettings-overlay-close-animation");
    setTimeout(() => {
      setGrettingsOverlayVisible(false);
    }, 1000);
  };
  return (
    <Website>
      {grettingsOverlayVisible && (
        <GrettingsOverlay
          onClose={onCloseHandler}
          openDuration={5000}
          className={grettingsOverlayClass}
        />
      )}
    </Website>
  );
};

export default TemplatePageHome;
