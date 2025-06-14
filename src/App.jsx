import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

import AboutMe from "./components/AboutMe/AboutMe";
import Navigation from "./components/Navigation/Navigation";
import Project from "./components/Project/Project";
import Garden from "./components/Garden/Garden";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Home/Home";
import GalaxyParticles from "./components/GalaxyParticles/GalaxyParticles";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      {/* <GalaxyParticles /> */}
      <section className="app__container">
        <GalaxyParticles />
        <NavBar />
        <AboutMe />
        <Project />
        {/* <TechStackSection /> */}
        <TechStack />

        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
