import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<DetailsPage />} />
      </Routes>
    </Router>

    // <>
    //   {/* <GalaxyParticles /> */}
    //   <section className="app__container">
    //     <GalaxyParticles />
    //     <NavBar />
    //     <AboutMe />
    //     <Project />
    //     {/* <TechStackSection /> */}
    //     <TechStackSection />
    //     <DetailsPage />
    //     <Contact />
    //     <Footer />
    //   </section>
    // </>
  );
}

export default App;
