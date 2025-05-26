import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/images/logo.png";
function NavBar() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
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
      <nav className="flex items-center justify-between flex-wrap bg-gray-300 px-3 py-2 min-h-[60px] lg:min-h-fit">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <Link to="/">
            <img
              src={logo}
              className="fill-current h-13 w-13 mr-2"
              alt="logo"
            />
          </Link>
          <span className="font-semibold text-xl ">
            {" "}
            <Link to="/">Harini Natarajan</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-gray-600 hover:border-gray-600"
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
              <li
                className={`lg:inline-block  text-black-200   hover:text-white  text-xl  rounded-xl hover:bg-black    transition duration-100 ease-in-out ${
                  activeLink === "/" ? "bg-black text-white" : ""
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

export default NavBar;
