import React from "react";

function Footer() {
  return (
    <footer
      className="bg-neutral-950 h-18 text-neutral-400 text-center p-3 border-t border-neutral-600 flex flex-col md:flex-row justify-center items-center space-x-2"
      aria-label="Footer"
    >
      {/* Copyright Section */}
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Premiere.AI</span>
      </p>

      {/* Creator Info and Social Media Links */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <p className="text-sm md:text-base flex items-center">
          Built with <span className="mx-1 text-yellow-300" aria-hidden="true">♡</span> by Sachin Sirvi
        </p>
        <ul className="flex space-x-4 text-xl" aria-label="Social Media Links">
          <li className="w-6 h-6 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/sachin-sirvi/"
              target="_blank"
              rel="noopener noreferrer"
              title="Open LinkedIn Profile in new tab"
              className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
              aria-label="Visit LinkedIn Profile"
            >
              {/* Inline SVG for LinkedIn */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.6 4.11 5.5 3 5.5s-2-.9-2-2 .89-2 2-2c1.1 0 1.98.9 1.98 2zM.5 8h5v16h-5V8zM9 8h4.7v2.2h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V24h-5v-7.8c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.2V24H9V8z"/>
              </svg>
            </a>
          </li>
          <li className="w-6 h-6 flex items-center justify-center">
            <a
              href="https://github.com/sachinsirvi"
              target="_blank"
              rel="noopener noreferrer"
              title="Open GitHub Profile in new tab"
              className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
              aria-label="Visit GitHub Profile"
            >
              {/* Inline SVG for GitHub */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.1-1.1-1.4-1.1-1.4-.9-.7.1-.7.1-.7 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17 7.4 18 7.7 18 7.7c.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.8-5.6 6.1.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .3z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
