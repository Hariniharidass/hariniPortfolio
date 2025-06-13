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
  const handleClick = () => {
    toggleTheme();
    if (isMenuDisplayed) {
      toggleMenu();
    }
  };
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between flex-wrap bg-background-secondary px-3 py-2 min-h-[60px] lg:min-h-fit">
        <div className="flex items-center flex-shrink-0 text-text-primary  mr-6">
          <Link to="/">
            <img
              src={logo}
              className="fill-current md:h-13 md:w-13 h-7 w-7 mr-2"
              alt="logo"
            />
          </Link>
          <span className="font-semibold sm:block md:block md:text-xl text-base ">
            {" "}
            <Link to="/">Harini Natarajan</Link>
          </span>
        </div>
        <div className="flex items-center ml-auto">
          <div className="inline-flex mr-5 ">
            <button
              className={`border-2 px-3 py-2 rounded-l-md transition-all duration-200 cursor-pointer
                        ${
                          theme === "light"
                            ? "border-accent-primary text-text-primary bg-background-secondary  "
                            : "border-none text-text-primary  "
                        }`}
              onClick={handleClick}
            >
              <FiSun />
            </button>
            <button
              className={`border-2 px-3 py-2 rounded-r-md transition-all duration-200 cursor-pointer
                        ${
                          theme === "dark"
                            ? "border-accent-primary text-text-primary bg-background-secondary "
                            : "border-none text-text-primary "
                        }`}
              onClick={handleClick}
            >
              <FiMoon />
            </button>
          </div>
          <div className="block lg:hidden ">
            <button
              onClick={toggleMenu}
              type="button"
              className="flex items-center px-3 py-2 border rounded text-text-primary border-text-primaryhover:text-text-secondary hover:border-gray-600 cursor-pointer"
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
            className={`hidden lg:flex lg:items-center lg:w-auto ${
              isMenuDisplayed ? "block" : "hidden"
            } lg:flex-grow`}
          >
            <div className="text-sm lg:flex-grow">
              <ul className="lg:flex lg:justify-end lg:gap-10 lg:items-center">
                <li
                  className={`lg:inline-block cursor-pointer text-text-primary bg-transparent hover:text-background-secondary     text-xl  rounded-xl hover:bg-text-primary   transition duration-100 ease-in-out ${
                    activeLink === "/" ? "underline underline-offset-4" : ""
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
                  className={`lg:inline-block cursor-pointer text-text-primary bg-transparent hover:text-background-secondary     text-xl  rounded-xl hover:bg-text-primary   transition duration-100 ease-in-out ${
                    activeLink === "/about"
                      ? "underline underline-offset-4"
                      : ""
                  }`}
                >
                  <Link
                    to="/about"
                    onClick={toggleMenu}
                    className=" block my-1 mx-2 p-1 "
                  >
                    About
                  </Link>
                </li>
                <li
                  className={`lg:inline-block cursor-pointer text-text-primary bg-transparent hover:text-background-secondary    text-xl  rounded-xl hover:bg-text-primary   transition duration-100 ease-in-out ${
                    activeLink === "/projects"
                      ? " underline underline-offset-4"
                      : ""
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
        </div>
        {/* Menus for mobile view*/}
        <div
          className={`w-full ${
            isMenuDisplayed ? "block" : "hidden"
          } lg:hidden`}
        >
          <div className="text-sm">
            <ul className="flex flex-col items-center">
              <li
                className={`cursor-pointer text-text-primary bg-transparent hover:text-background-secondary text-xl rounded-xl hover:bg-text-primary transition duration-100 ease-in-out ${
                  activeLink === "/" ? "underline underline-offset-4" : ""
                }`}
              >
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block my-1 mx-2 p-1 "
                >
                  Home
                </Link>
              </li>
              <li
                className={`cursor-pointer text-text-primary bg-transparent hover:text-background-secondary text-xl rounded-xl hover:bg-text-primary transition duration-100 ease-in-out ${
                  activeLink === "/about" ? "underline underline-offset-4" : ""
                }`}
              >
                {" "}
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className="block my-1 mx-2 p-1 "
                >
                  About
                </Link>
              </li>
              <li
                className={`cursor-pointer text-text-primary bg-transparent hover:text-background-secondary text-xl rounded-xl hover:bg-text-primary transition duration-100 ease-in-out ${
                  activeLink === "/projects"
                    ? " underline underline-offset-4"
                    : ""
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
