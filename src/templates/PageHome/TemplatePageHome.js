import React, {useState } from "react";

import Website from "../Website";
import Page from "../../components/Page/Page";
import HeroFancy from "../../components/PageSections/Heros/Fancy";
import GrettingsOverlay from "../../components/GrettingsOverlay/GrettingsOverlay";

import SiteIntroPageSection from "../../components/PageSections/SiteIntro/SiteIntro";
import ReasonPageSection from "../../components/PageSections/Reason/Reason";
import CalculatorPageSection from "../../components/PageSections/CostCalculator/CostCalculator";
import TheProcessPageSection from "../../components/PageSections/TheProcess/TheProcess";
import SiteFooterPageSection from "../../components/PageSections/SiteFooter/SiteFooter";
import ContactPageSection from "../../components/PageSections/Contact/Contact";

const TemplatePageHome = (props) => {
  const [grettingsOverlayVisible, setGrettingsOverlayVisible] = useState(false);
  const [grettingsOverlayClass, setGrettingsOverlayClass] = useState(
    "grettings-overlay-open-animation"
  );
  const overlayOpenDuration = 5000;

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
          openDuration={overlayOpenDuration}
          className={grettingsOverlayClass}
        />
      )}
      <Page theme="starfield">


      </Page>
      {/* <HeroFancy />

      <SiteIntroPageSection />
      <ReasonPageSection />
      <CalculatorPageSection />
      <TheProcessPageSection />
      <ContactPageSection />

      <SiteFooterPageSection /> */}

      
    </Website>
  );
};

export default TemplatePageHome;
