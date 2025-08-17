import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../common/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // nav links array
  const navlinks = [
    { name: "Search", path: "/search" },
    { name: "Home", path: "/", end: true },
    { name: "Movies", path: "/movies" },
    { name: "TV Shows", path: "/tvshows" },
    { name: "Watchlist", path: "/watchlist" },
  ];

  // navlink classname(helper function)
  const navlinkClassname = ({ isActive }) => {
    return isActive ? "text-yellow-300" : "text-neutral-400";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className="relative bg-black/50 backdrop-blur w-full sticky top-0 z-50"
      aria-label="Main Navigation"
    >
      {/* Navbar */}
      <nav className="text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-md font-semibold text-neutral-300 hover:text-yellow-300 transition-colors duration-300"
          aria-label="Go to Premiere.AI Home"
        >
          Premiere.AI
        </Link>

        {/* Mobile Navigation Toggle Button */}
        <Button
          aria-label="Toggle mobile navigation menu"
          type="button"
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-xl"
          icon={menuOpen ? "fa-xmark" : "fa-bars"}
        />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4" aria-label="Desktop Navigation Links">
          {navlinks.map((item) => {
            return (
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
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <div
          className="md:hidden absolute flex flex-col items-center w-screen bg-black/90 backdrop-blur text-white p-4 top-full right-0 border-t border-yellow-300 w-1/2"
          aria-label="Mobile Navigation Links"
        >
          <ul className="space-y-2">
            {navlinks.map((item) => {
              return (
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
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;