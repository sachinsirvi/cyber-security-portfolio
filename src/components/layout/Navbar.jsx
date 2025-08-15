import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // nav links array
  const navlinks = [
    {name: "Search", path: "/search"},
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
    <header className="relative bg-black/50 backdrop-blur w-full sticky top-0 z-50">
      {/* Navbar */}
      <nav className="text-white  p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold text-neutral-300 hover:text-yellow-300 transition-colors duration-300">
        Premiere.AI
        </Link>
        {/* Mobile Navigation Links */}
        <button
          type="button"
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <i className="fa-solid fa-xmark"> </i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          {navlinks.map((item) => {
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={navlinkClassname}
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
        <div className="md:hidden absolute flex flex-col items-center bg-black/90 backdrop-blur text-white p-4 top-full  top-0 right-0  border-t border-yellow-300 w-1/2 ">
          <ul className="space-y-2">
            {navlinks.map((item) => {
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.end}
                    className={navlinkClassname}
                    onClick={toggleMenu}
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
