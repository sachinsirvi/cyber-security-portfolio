import React from "react";
import { Link } from "react-router-dom";

function AiChatToggle() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <Link to="/ai_chat" aria-label="AI Chat">
        <button
          className="cursor-pointer border border-neutral-500 rounded-full w-8 h-8 flex items-center justify-center hover:border-yellow-300 hover:scale-110 transition-all duration-300 bg-black/50"
        >
          <i className="fa-solid fa-user-astronaut text-white text-sm"></i>
        </button>
      </Link>
    </div>
  );
}

export default AiChatToggle;
