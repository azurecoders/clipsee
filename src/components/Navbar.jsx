// src/components/Navbar.js
import React, { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLink
                to="/"
                className="text-xl font-bold text-indigo-600"
                activeClassName="text-purple-600 underline"
              >
                Clipsee
              </NavLink>{" "}
              {/* Use NavLink for Home */}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink
                exact
                to="/"
                activeClassName="text-purple-600"
                className="text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="text-purple-600"
                className="text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="text-purple-600"
                className="text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="bg-indigo-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <NavLink
            exact
            to="/"
            activeClassName="text-purple-600"
            className="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-purple-600"
            className="text-gray-500 block pl-3 pr-4 py-2 text-base font-medium"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-purple-600"
            className="text-gray-500 block pl-3 pr-4 py-2 text-base font-medium"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
