import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

import AboutMe from "./components/AboutMe/AboutMe";
import Navigation from "./components/Navigation/Navigation";
import Project from "./components/Project/Project";
import Garden from "./components/Garden/Garden";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Home/Home";
import GalaxyParticles from "./components/GalaxyParticles/GalaxyParticles";
import TechStackSection from "./components/TechStackSection/TechStackSection";

function App() {
  return (
    <>
      {/* <GalaxyParticles /> */}
      <section className="app__container">
        <GalaxyParticles />
        <NavBar />
        <AboutMe />
        <Project />
        <TechStackSection />
        {/* <Garden /> */}
        <Contact />
      </section>
    </>
  );
}

export default App;
