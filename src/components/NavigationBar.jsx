import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="site-header">
      <nav className="navigation" aria-label="Main navigation" onKeyDown={(event) => { if (event.key === "Escape") setIsOpen(false); }}>
        <Link to="/" className="brand" onClick={() => setIsOpen(false)}><img className="brand-mark" src={`${import.meta.env.BASE_URL}images/favicon.svg`} width="42" height="42" alt="" /><span>Harini Natarajan</span></Link>
        <div className="nav-controls">
          <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
          <button className="icon-button menu-toggle" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="navigation-links" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiX /> : <FiMenu />}</button>
        </div>
        <div id="navigation-links" className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About & Experience</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <a href="mailto:hello2harinihari@gmail.com" onClick={() => setIsOpen(false)}>Contact ↗</a>
        </div>
      </nav>
    </header>
  );
}
export default NavigationBar;
