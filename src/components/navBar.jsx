import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logoDark.png";
function NavBar() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const toggleMenu = () => {
    setIsMenuDisplayed(!isMenuDisplayed);
  };
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <Link to="/">
            <img
              src={logo}
              className="fill-current h-13 w-13 mr-2"
              alt="logo"
            />
          </Link>
          <span className="font-semibold text-2xl ">
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
            <ul className="lg:flex lg:justify-end items-center">
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black-200   hover:text-white  text-xl px-10 hover:bg-black hover:py-3 hover:rounded-3xl ">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white  text-xl px-10  hover:bg-black hover:py-3 hover:rounded-3xl">
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white  text-xl px-10  hover:bg-black hover:py-3 hover:rounded-3xl">
                <Link to="/projects" onClick={toggleMenu}>
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
