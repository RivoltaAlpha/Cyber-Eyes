import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-yellow-500">
      <nav className="container mx-auto px-6 py-3 flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold">
          Cyber-Eyes Networks
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-yellow-500 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.293 17.293a1 1 0 011.414 0L12 21.586l4.293-4.293a1 1 0 011.414 1.414L12 24.414l-5.707-5.707a1 1 0 010-1.414zM4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 6a1 1 0 000 2h14a1 1 0 000-2H5z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
            <NavLink to="/" className="text-yellow-500 hover:text-white px-3 py-2">
              Home
            </NavLink>
            <NavLink to="/about-us" className="text-yellow-500 hover:text-white px-3 py-2">
              About Us
            </NavLink>
            <NavLink to="/CTFPlatform" className="text-yellow-500 hover:text-white px-3 py-2">
              CTF Platform
            </NavLink>
            <NavLink to="/cyber-security" className="text-yellow-500 hover:text-white px-3 py-2">
              Cyber Security
            </NavLink>
            <NavLink to="/software-engineering" className="text-yellow-500 hover:text-white px-3 py-2">
              Software Engineering
            </NavLink>
            <NavLink to="/News Hub" className="text-yellow-500 hover:text-white px-3 py-2">
              News Hub
            </NavLink>
            <NavLink to="/materials" className="text-yellow-500 hover:text-white px-3 py-2">
              Academy
            </NavLink>
            <NavLink to="/contact" className="text-yellow-500 hover:text-white px-3 py-2">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white lg:font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </NavLink>
            <Link to="/register" className="bg-yellow-500 hover:bg-yellow-600 text-white lg:font-bold py-2 px-4 lg:w-28 rounded mt-4 lg:mt-0  lg:ml-4">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

