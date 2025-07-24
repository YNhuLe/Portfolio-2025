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
        <Route path="/:slug" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
