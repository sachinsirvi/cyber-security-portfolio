
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-10 flex flex-col items-center justify-center text-center min-h-[70vh] text-yellow-300">
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
