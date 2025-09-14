import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navlinks = [
    { name: "About Me", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Achievements", path: "/achievements" },
    { name: "Writeups", path: "/writeups" },
    { name: "Contact Me", path: "/contact" },
  ];

  const navlinkClassname = ({ isActive }) =>
    isActive ? "text-green-500" : "text-neutral-300";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="relative bg-black/50 backdrop-blur-sm w-full sticky top-0 z-50">
      <nav
        className="text-white p-4 flex justify-between items-center"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-md font-semibold text-neutral-300 hover:text-green-600 transition-colors duration-300"
          aria-label="Go to Portfolio Home"
        >
          {location.pathname === "/" ? (
            <h1 className="text-lg md:text-xl">
              {/* Show short name on small screens, full name on md+ */}
              <span className="block md:hidden">Jessica</span>
              <span className="hidden md:block">Jessica Sylvia Clement</span>
            </h1>
          ) : (
            <p className="text-lg md:text-xl">
              <span className="block md:hidden">Jessica</span>
              <span className="hidden md:block">Jessica Sylvia Clement</span>
            </p>
          )}
        </Link>

        {/* Mobile Navigation Toggle Button */}
        <button
          aria-label="Toggle mobile navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-2xl"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
        </button>

        {/* Desktop Navigation */}
        <ul
          className="hidden md:flex space-x-4"
          aria-label="Desktop Navigation Links"
        >
          {navlinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={navlinkClassname}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full w-full p-6 transition duration-300 ease-in-out bg-black/90 text-white border-t border-yellow-300 transform transition-transform duration-300 ease-in-out  ${
          menuOpen ? "block" : "hidden"
        }`}
        aria-label="Mobile Navigation Links"
      >
        <ul className="flex flex-col items-center space-y-8 ">
          {navlinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={navlinkClassname}
                onClick={toggleMenu}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
