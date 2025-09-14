import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-black text-center px-6 ">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-green-500 mb-2">
        404 - Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-md mb-6">
        Oops! The page you are looking for doesn't exist, has been moved, or you
        might have mistyped the URL.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-black font-semibold rounded-lg shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] hover:bg-green-500 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.8)] transition-all"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
}
