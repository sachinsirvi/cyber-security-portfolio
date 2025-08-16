import React from "react";

function LoadingFallback({ text = "Loading…" }) {
  return (
    <div className="p-4 text-gray-300 animate-pulse">
      {text}
    </div>
  );
}

export default LoadingFallback;
