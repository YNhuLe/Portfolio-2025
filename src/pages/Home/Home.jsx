import "./Home.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollToSection from "../../utils/scrollToSection.js";

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      scrollToSection(location.pathname.substring(1));
    }
  }, [location]);
  return (
    <div>
      <section id="about">About Me</section>
      <section id="projects">Projects</section>
      <section id="garden">Garden</section>
      <section id="contact">Contact</section>
    </div>
  );
}

export default Home;
