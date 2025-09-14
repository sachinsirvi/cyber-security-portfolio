import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function AiChatToggle() {
  const [showNotification, setShowNotification] = useState(false);
  const intervalRef = useRef(null); // Create a ref to store the interval ID

  useEffect(() => {
    // This function will toggle the notification visibility
    const showAndHideNotification = () => {
      // First, show the notification
      setShowNotification(true);

      // Then, schedule it to disappear after 2 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    };

    // Call the function once after 2 seconds to start the first cycle
    const initialTimer = setTimeout(showAndHideNotification, 2000);

    // Set an interval to repeat the show/hide cycle every 4 seconds
    intervalRef.current = setInterval(showAndHideNotification, 4000);

    // Cleanup function to clear both timers when the component unmounts
    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleButtonClick = () => {
    // Clear the recurring interval to stop the popping behavior
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Clear the ref after stopping the interval
    }
    setShowNotification(false); // Also hide the notification immediately
  };

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50">
      <Link to="/ai_chat" aria-label="AI Chat">
        <button
          className="cursor-pointer  md:w-10 md:h-10 flex items-center justify-center hover:border-green-600 hover:scale-120 transition-all duration-300"
          onClick={handleButtonClick}
        >
          <i className="fa-solid fa-robot text-white text-2xl"></i>
        </button>
      </Link>
      {showNotification && (
        <div className="absolute left-1/2 -translate-x-1/2 text-green-500 bg-black/50 text-sm md:text-base px-3 py-1 rounded-lg border border-green-500 whitespace-nowrap mt-2 md:mt-0">
          Ask me anything about Jess
        </div>
      )}
    </div>
  );
}

export default AiChatToggle;
