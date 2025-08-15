import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-500 text-center p-2 border-t border-neutral-600 flex flex-col md:flex-row justify-center items-center gap-6">
      <p className="">
        © {new Date().getFullYear()} <span className="text-neutral-500 font-semibold">Premiere.AI</span>
      </p>
      <p className="">
       Built with <span className="text-neutral-500">♡</span> by Sachin Sirvi
      </p>
      <ul className="flex space-x-2 text-xl">
        <li>
          <a href="https://www.linkedin.com/in/sachin-sirvi/" className="hover:text-yellow-300 hover:scale=105 transition-colors duration-300">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/sachinsirvi" className="hover:text-yellow-300 hover:scale=105 transition-colors duration-300">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
