import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import Navbar from "./components/NavigationBar.jsx";

function PageContent() {
  const location = useLocation();
  const main = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function backToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    main.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    main.current?.focus({ preventScroll: true });
  }, [location.pathname]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1} ref={main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<div className="page-shell"><h1>Page not found</h1><Link className="button" to="/">Back to home</Link></div>} />
      </Routes>
    </main>
    {showBackToTop && <button className="back-to-top" onClick={backToTop} aria-label="Back to top">↑ <span>Back to top</span></button>}
    <footer className="site-footer" aria-label="Contact">
      <div><strong>Let’s connect.</strong><p>Harini Natarajan · Fullstack Software Developer</p></div>
      <div><a href="mailto:hello2harinihari@gmail.com">hello2harinihari@gmail.com</a><p><a href="https://hariniharidass.github.io/hariniPortfolio/">Portfolio</a> · <a href="https://github.com/Hariniharidass" target="_blank" rel="noopener noreferrer">GitHub</a> · <a href="https://linkedin.com/in/harini-natarajan-854b9510a" target="_blank" rel="noopener noreferrer">LinkedIn</a></p></div>
    </footer>
  </>;
}
function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><PageContent /></BrowserRouter>;
}
export default App;
