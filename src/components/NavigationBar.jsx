import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/images/logo.png";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
function NavigationBar() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuDisplayed(!isMenuDisplayed);
  };
  useEffect(() => {
    setActiveLink(location.pathname);
    setIsMenuDisplayed(false);
  }, [location]);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-background-secondary dark:bg-background-secondary px-3 py-2 min-h-[60px] lg:min-h-fit">
        <div className="flex items-center flex-shrink-0 text-text-primary dark:text-text-primary mr-6">
          <Link to="/">
            <img
              src={logo}
              className="fill-current md:h-13 md:w-13 h-7 w-7 mr-2"
              alt="logo"
            />
          </Link>
          <span className="font-semibold md:text-xl text-base ">
            {" "}
            <Link to="/">Harini Natarajan</Link>
          </span>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-text-secondary dark:hover:text-text-secondary hover:border-gray-600"
          >
            <svg
              viewBox="0 0 100 80"
              width="40"
              height="40"
              className="fill-current h-3 w-3"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isMenuDisplayed ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <ul className="lg:flex lg:justify-end lg:gap-10 lg:items-center">
              <li>
                <div className="inline-flex lg:items-center lg:justify-center lg:flex-1 mt-3">
                  <button
                    className={`border-2 m-4 p-2 rounded-l-md transition-all duration-200
                        ${
                          theme === "light"
                            ? "border-accent-primary text-text-primary bg-background-secondary dark:bg-background-secondary dark:text-text-primary"
                            : "border-none text-text-primary dark:text-background-primary dark:bg-text-primary dark:border-none"
                        }`}
                    onClick={toggleTheme}
                  >
                    <FiSun />
                  </button>
                  <button
                    className={`border-2 p-2 rounded-r-md transition-all duration-200
                        ${
                          theme === "dark"
                            ? "border-accent-primary text-text-primary bg-background-secondary dark:bg-background-secondary dark:text-text-primary"
                            : "border-none text-text-primary dark:text-gray-300 dark:border-none"
                        }`}
                    onClick={toggleTheme}
                  >
                    <FiMoon />
                  </button>
                </div>
              </li>
              <li
                className={`lg:inline-block  text-text-primary bg-transparent hover:text-accent-primary  dark:text-text-primary dark:hover:text-accent-primary  text-xl  rounded-xl hover:bg-text-primary dark:hover:bg-background-primary    transition duration-100 ease-in-out ${
                  activeLink === "/" ? "bg-accent-secondary dark:text-text-primary" : ""
                }`}
              >
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className=" block my-1 mx-2 p-1 "
                >
                  Home
                </Link>
              </li>
              <li
                className={`lg:inline-block  text-black-200   hover:text-white  text-xl  rounded-xl hover:bg-black    transition duration-100 ease-in-out ${
                  activeLink === "/about" ? "bg-black text-white" : ""
                }`}
              >
                {" "}
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className=" block my-1 mx-2 p-1 "
                >
                  About
                </Link>
              </li>
              <li
                className={`lg:inline-block  text-black-200   hover:text-white  text-xl  rounded-xl hover:bg-black    transition duration-100 ease-in-out ${
                  activeLink === "/projects" ? "bg-black text-white" : ""
                }`}
              >
                <Link
                  to="/projects"
                  onClick={toggleMenu}
                  className="block my-1 mx-2 p-1 "
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
