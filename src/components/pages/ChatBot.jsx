import React, { useState, useRef, useEffect } from "react";
import { PORTFOLIO_INSTRUCTIONS } from "../../lib/constants";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [chatMessage, setChatMessage] = useState([]);
  const chatEndRef = useRef(null);

  // Define the quick access buttons and their corresponding messages
  const quickAccessButtons = [
    { label: "About", text: "Tell me about yourself." },
    { label: "Skills", text: "What are your skills and expertise?" },
    { label: "Work Experience", text: "What is your work experience?" },
    { label: "Volunteering", text: "What is your volunteering experience?" },
    { label: "Contact", text: "How can I contact you?" },
  ];

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessage]);

  // Unified function to handle the API call
  const callGeminiApi = async (userMessage) => {
    const aiPlaceholder = { role: "ai", text: "Thinking..." };
    setChatMessage((prev) => [...prev, aiPlaceholder]);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [
              { role: "model", parts: [{ text: PORTFOLIO_INSTRUCTIONS }] },
              ...chatMessage.map((msg) => ({
                role: msg.role === "user" ? "user" : "model",
                parts: [{ text: msg.text }],
              })),
              { role: "user", parts: [{ text: userMessage }] }, // latest user input
            ],
          }),
        }
      );

      const data = await response.json();

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I didn't understand that.";

      setChatMessage((prev) => [
        ...prev.slice(0, -1),
        { role: "ai", text: botReply },
      ]);
    } catch (err) {
      console.error("Error fetching Gemini API:", err);
      setChatMessage((prev) => [
        ...prev.slice(0, -1),
        { role: "ai", text: "Something went wrong." },
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { role: "user", text: message };
    setChatMessage((prev) => [...prev, userMessage]);
    setMessage(""); // Clear the input field

    callGeminiApi(message);
  };

  const handleQuickAccessClick = (text) => {
    const userMessage = { role: "user", text: text };
    setChatMessage((prev) => [...prev, userMessage]);
    callGeminiApi(text);
  };

  return (
    <div className="flex flex-col items-center bg-neutral-950 p-4 rounded-lg w-full">
      <div className="bg-neutral-900 w-full md:w-[50vw] lg:w-[40vw] h-full rounded-lg p-4 justify-between flex flex-col border border-green-800">
        <h3 className="text-center text-md font-semibold text-green-600 mb-4">
          Ask Jess's AI
        </h3>
        {/* Outer Chat Window */}
        <div className="w-full h-[60vh] bg-neutral-950 mb-2 rounded-md border-neutral-600 p-2 overflow-y-scroll">
          {/* scroll */}
          <div className="flex flex-col space-y-1">
            {chatMessage.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.role === "user"
                    ? "flex justify-end text-green-400"
                    : "flex justify-start "
                }`}
              >
                <p className="max-w-[80%] break-words border border-neutral-800 text-sm md:text-base p-2 rounded-xl">
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div ref={chatEndRef}></div>
        </div>
        {/* Quick Access Buttons */}
        <div className="mt-4 my-4 flex flex-wrap justify-center gap-2">
          {quickAccessButtons.map((button) => (
            <button
              key={button.label}
              type="button"
              className="p-1 px-2 rounded-md text-center cursor-pointer text-green-400 border border-green-600 hover:bg-neutral-600 hover:text-white transition-colors duration-200 text-sm md:text-md"
              onClick={() => handleQuickAccessClick(button.text)}
            >
              {button.label}
            </button>
          ))}
        </div>
        {/* Input Form */}
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            className="w-full border border-neutral-600 outline-none p-2 rounded-md bg-neutral-900 text-sm md:text-base"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            aria-label="Send message"
            className="p-1 rounded-md mt-2 text-center cursor-pointer text-green-600 border border-neutral-600 hover:bg-green-600 hover:text-black transition-colors duration-200"
          >
            Send
          </button>
        </form>
        <button
          type="button"
          aria-label="Clear Chat"
          className="p-1 rounded-md mt-2 text-center cursor-pointer text-red-400 border border-neutral-600 hover:bg-red-500 hover:text-white transition-colors duration-200"
          onClick={() => setChatMessage([])}
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
