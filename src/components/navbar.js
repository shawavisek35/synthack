import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          to={`/`}
          className="font-semibold text-xl tracking-tight"
          onClick={() => {
            setToggle(false);
          }}
        >
          <span role="img" aria-label="emoji">
            🔥
          </span>{" "}
          Synthax
        </Link>
      </div>
      <div className="block lg:hidden">
        {toggle ? (
          <CgClose
            onClick={() => {
              setToggle(!toggle);
            }}
            size={"2rem"}
            color="white"
            className="flex items-center"
          />
        ) : (
          <CgMenuRight
            onClick={() => {
              setToggle(!toggle);
            }}
            size={"2rem"}
            color="white"
            className="flex items-center"
          />
        )}
      </div>
      <div
        className={`w-full ${
          toggle ? `block trasition duration-300` : `hidden`
        }  flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {NavLinks.map((l) => (
            <NavLink
              key={l.name}
              to={`${l.path}`}
              onClick={() => {
                setToggle(!toggle);
              }}
              activeStyle={{ color: "white" }}
              className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
              exact
            >
              {l.name}
            </NavLink>
          ))}
        </div>
        <div>
          <Link
            to="/apply"
            onClick={() => {
              setToggle(false);
            }}
            className="animate-bounce inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-600 hover:bg-white mt-4 lg:mt-0"
          >
            Apply Now!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavLinks = [
  // { path: "/gettingStarted", name: "Getting Started" },
  { path: "/rules", name: "Rules" },
  { path: "/faq", name: "FAQ" },
];
