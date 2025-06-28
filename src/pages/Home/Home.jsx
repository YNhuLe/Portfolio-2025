import "./Home.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollToSection from "../../utils/scrollToSection.js";
import GalaxyParticles from "../../components/GalaxyParticles/GalaxyParticles.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Project from "../../components/Project/Project.jsx";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import TechStack from "../../components/TechStack/TechStack.jsx";
import TechStackSection from "../../components/TechStackSection/TechStackSection.jsx";
import DetailSection from "../../components/DetailSection/DetailSection.jsx";
import DetailsPage from "../DetailsPage/DetailsPage.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {

  return (
    <>
      <section className="app__container">
        <GalaxyParticles />
        <NavBar />
        <AboutMe />
        <Project />
        <TechStackSection />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default Home;
