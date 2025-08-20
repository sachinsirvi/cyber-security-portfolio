import React, { useState, useRef, useEffect } from "react";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [chatMessage, setChatMessage] = useState([]);
  const chatEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setChatMessage([...chatMessage, message]);
    setMessage("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessage]);

  return (
    <div className="flex flex-col items-center bg-neutral-900 p-4 rounded-lg w-full">
      <div className="bg-neutral-900 w-full md:w-[50vw] lg:w-[40vw] h-full rounded-lg p-4 justify-between flex flex-col">
        <h3 className="text-center text-lg font-semibold text-yellow-300 mb-4">
          Ask Premiere.AI
        </h3>
        {/* Outer Chat Window */}
        <div className="w-full h-[50vh] bg-neutral-900 mb-4 rounded-md border border-neutral-600 p-3 overflow-y-scroll">
          {/* scroll */}
          <div className="flex flex-col space-y-2">
            {chatMessage.map((msg, index) => (
              <div key={index} className="flex justify-end">
                <p className="max-w-[80%] break-words border border-neutral-600 bg-yellow-300 text-black p-2 rounded-lg">
                  {msg}
                </p>
              </div>
            ))}
          </div>
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Form */}
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            className="w-full border border-neutral-600 outline-none p-2  rounded-md  bg-neutral-900"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            aria-label="Send message"
            className="p-2 rounded-md mt-2 text-center cursor-pointer text-yellow-300 border border-neutral-600 hover:bg-yellow-400 hover:text-black transition-colors duration-200"
          >
            Send
          </button>
        </form>
        <button
          type="button"
          aria-label="Clear Chat"
          className="p-2 rounded-md mt-2 text-center cursor-pointer  text-red-400 border border-neutral-600 hover:bg-red-500 hover:text-white transition-colors duration-200"
          onClick={() => setChatMessage([])}
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
