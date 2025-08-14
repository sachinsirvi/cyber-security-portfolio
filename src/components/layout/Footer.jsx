import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 text-center p-4 border-t border-gray-700 flex flex-col md:flex-row justify-center items-center gap-3 ">
      <p className="">
        © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Premiere.AI</span>
      </p>
      <p className="">
       Built with <span className="text-gray-500">♡</span> by Sachin Sirvi
      </p>
      <ul className="flex space-x-4 text-xl">
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
