import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import Navbar from "./components/NavigationBar.jsx";

function App() {

  return (

      <BrowserRouter basename="/hariniPortfolio/">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
            Home{" "}
          </Route>
          <Route path="/about" element={<About />}>
            {" "}
            About{" "}
          </Route>
          <Route path="/projects" element={<Projects />}>
            {" "}
            Projects{" "}
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
