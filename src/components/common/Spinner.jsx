import React from "react";

function Spinner({ size = "text-xl" }) {
  return (
    <div className={`text-yellow-300 flex items-center justify-center h-full ${size}`}>
      <i className="fa-sharp fa-solid fa-spinner fa-spin"></i>
    </div>
  );
}

export default Spinner;
