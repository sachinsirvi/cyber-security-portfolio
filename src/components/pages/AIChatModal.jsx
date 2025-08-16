// src/pages/AiChat.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AIChatModal() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;
    // console.log("User message:", input);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center p-4">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start text-yellow-300 cursor-pointer mb-4"
      >
        ← Back
      </button>

      <h1 className="text-xl font-bold text-yellow-300 mb-6">Ask PremiereAI</h1>

      <div className="w-full max-w-2xl flex flex-col flex-grow gap-4 bg-neutral-900 rounded-md p-4 shadow-lg border border-neutral-800">
        {/* Chat Window */}
        <div className="flex-grow overflow-y-auto min-h-[300px] max-h-[500px] p-2 border border-neutral-700 rounded text-sm text-gray-300">
        <p className="text-center text-sm sm:text-base text-gray-400 italic leading-relaxed px-4">
  Hello!!! <br />
  I’m your friendly AI movie geek... <span className="text-yellow-300 font-semibold">but I’m still in training.</span> <br />
  Right now, I know *nothing* and I’m proud of it 😎 <br />
  Come back later when I’m smart enough to answer your questions! <br />
</p>


        </div>

        {/* Input */}
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            type="text"
            placeholder="Ask me anything about movies or Tv shows..."
            className="flex-grow px-4 py-2 rounded bg-neutral-800 border border-neutral-600 text-white outline-none"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 font-semibold rounded bg-yellow-300 text-black hover:bg-yellow-400 transition cursor-pointer"
          >
            Shoot
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIChatModal;
