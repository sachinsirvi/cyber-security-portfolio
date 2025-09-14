import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // only import what you use

function Footer() {
  return (
    <footer
      className="bg-neutral-950 text-neutral-400 text-center p-4 border-t border-neutral-600 flex flex-col md:flex-row justify-center gap-4 items-center"
      aria-label="Footer"
    >
      {/* Copyright */}
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Jessica Sylvia Clement - Portfolio</span>
      </p>

      {/* Creator + Social */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <p className="text-sm md:text-base flex items-center">
          Built with{" "}
          <span className="mx-1 text-green-600" aria-hidden="true">♡</span> by Jess
        </p>

        <ul className="flex  space-x-4 text-xl" aria-label="Social Media Links">
          <li>
            <a
              href="https://www.linkedin.com/in/jessica-sylvia-clement/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-green-600 hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jessica-sylvia-clement"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-green-600 hover:scale-110 transition-transform duration-300"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
