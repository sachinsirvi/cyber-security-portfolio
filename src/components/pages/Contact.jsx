import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-10 text-neutral-400 tracking-widest">
        CONTACT ME
      </h2>

      {/* Contact Cards */}
      <div className="flex flex-col justify-center gap-6 max-w-4xl w-full">
        {/* Email Card */}
        <a
          href="mailto:sirvisachin10@gmail.com"
          className="flex flex-col items-center rounded-lg p-6 shadow-[0_0_15px_2px_rgba(255,215,0,0.5)] hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(255,215,0,0.8)]"
        >
          <FaEnvelope className="text-4xl text-yellow-300 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-300 text-center text-sm">
            sirvisachin10@gmail.com
          </p>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/jessica-sylvia-clement"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 shadow-[0_0_15px_2px_rgba(0,119,181,0.5)] hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(0,119,181,0.7)]"
        >
          <FaLinkedin className="text-4xl text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <p className="text-gray-300 text-center text-sm">
            linkedin.com/in/jessica-sylvia-clement
          </p>
        </a>

        {/* GitHub Card */}
        {/* <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center rounded-lg p-6 shadow-[0_0_15px_2px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.6)]"
  >
    <FaLinkedin className="text-4xl text-white mb-3" />
    <h3 className="text-xl font-semibold mb-2">GitHub</h3>
    <p className="text-gray-300 text-center text-sm">
      github.com/yourusername
    </p>
  </a> */}
      </div>
    </div>
  );
}

export default Contact;
