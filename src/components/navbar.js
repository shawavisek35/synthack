import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to={`/`} className="font-semibold text-xl tracking-tight">Synthack</Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="flex items-center px-3 py-2 border rounded text-red-200 border-red-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          toggle ? `block trasition duration-300` : `hidden`
        }  flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
          >
            Getting Started
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
          >
            Rules
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white"
          >
            About
          </a>
        </div>
        <div>
          <a
            href="/"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
