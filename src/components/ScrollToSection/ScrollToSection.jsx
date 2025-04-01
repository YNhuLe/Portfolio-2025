import { section } from "motion/react-client";
import "./ScrollToSection.scss";
import { useEffect } from "react";
import { scroller } from "react-scroll";
function ScrollToSection({ sectionId }) {
  useEffect(() => {
    if (sectionId) {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      }),
        window.history.pushState({}, "", `/${sectionId}`);
    }
  }, [sectionId]);
  return null;
}

export default ScrollToSection;
