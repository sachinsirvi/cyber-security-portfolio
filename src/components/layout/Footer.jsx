import React from "react";

function Footer() {
  return (
    <footer
      className="bg-neutral-950 h-18 text-neutral-500 text-center p-2 border-t border-neutral-600 flex flex-col md:flex-row justify-center items-center space-x-2"
      aria-label="Footer"
    >
      {/* Copyright Section */}
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()}{" "}
        <span className="text-neutral-500 font-semibold">Premiere.AI{" "} </span>
      </p>

      {/* Creator Info and Social Media Links */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0 ">
        <p className="text-sm md:text-base flex items-center">
          Built with <span className="text-neutral-500 mx-1" aria-label="love">♡</span> by Sachin Sirvi
        </p>
        <ul className="flex space-x-4 text-xl" aria-label="Social Media Links">
          <li className="w-6 h-6 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/sachin-sirvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
              aria-label="Visit LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li className="w-6 h-6 flex items-center justify-center">
            <a
              href="https://github.com/sachinsirvi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
              aria-label="Visit GitHub Profile"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;