import React from "react";

function ErrorFallbackUI({ error }) {
  return (
    <div className="text-xl bg-neutral-800 p-4 w-full flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl text-yellow-300">Something went wrong</h2>
      <p className="text-red-500">Error: {error.message} </p>
    </div>
  );
}

export default ErrorFallbackUI;
