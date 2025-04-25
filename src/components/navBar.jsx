import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logoDark.png";
function navBar() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const toggleMenu = () => {
    setIsMenuDisplayed(!isMenuDisplayed);
  };
  return (
    <div className="flex m-2 p-4 bg-white justify-between">
      <div className="md:inline-flex items-center w-1/2">
        <img src={logo} className="h-30 mr-2 border-2" alt="logo" />
        <h2 className="text-2xl md:text-4xl">Harini Natarajan</h2>
      </div>
      <div className="flex justify-end items-center w-1/2">
        <nav className={`${isMenuDisplayed ? "block" : "hidden"} md:block`}>
          <ul className="md:inline-flex text-xl md:text-3xl flex-col md:flex-row items-end">
            <li className="md:ml-8 mt-2 md:mt-0">
              <Link to="/">Home</Link>
            </li>
            <li className="md:ml-8 mt-2 md:mt-0">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="md:ml-8 mt-2 md:mt-0">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={toggleMenu}
          type="button"
          className="m-2 p-4 rounded-2xl hover:bg-amber-50 focus:outline-none md:hidden "
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default navBar;
