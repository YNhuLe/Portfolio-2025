import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

import AboutMe from "./components/AboutMe/AboutMe";
import Navigation from "./components/Navigation/Navigation";
import Project from "./components/Project/Project";
import Garden from "./components/Garden/Garden";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      {/* <Router>
       
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router> */}
      <NavBar />
      <AboutMe />
      <Project />
      <Garden />
      <Contact />
    </>
  );
}

export default App;
