import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import AboutMe from "./components/AboutMe/AboutMe";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          {/* <Menu /> */}
          {/* <NavBar /> */}
          <Route path="/" element={<NavBar />} />
          <Route path="/about" element={<AboutMe />} />
          {/* <AboutMe /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
