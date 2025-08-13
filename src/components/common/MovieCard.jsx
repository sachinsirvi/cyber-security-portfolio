import React, { useContext } from "react";
import { InfoModalContext } from "../context/InfoModalContext";

function MovieCard({ imgSrc, title }) {
  const { isModalOpen, setIsModalOpen } = useContext(InfoModalContext);

  const infoModalToggle = () => {
    console.log("Toggling modal. Current state:", isModalOpen); // Debugging log
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className="relative w-full h-full border border-transparent hover:scale-105 shadow-md hover:shadow-yellow-300 rounded-lg cursor-pointer transition-all duration-300 flex flex-col"
      onClick={infoModalToggle}
    >
      {/* {Plus button} */}
      <div>
        <button className="absolute top-0 right-0 bg-black/20 border border-transparent text-gray-300 p-2 hover:bg-yellow-300 hover:text-black transition-colors duration-300 cursor-pointer">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      {/* Poster */}
      <div className="flex-grow aspect-video">
        <img
          src={imgSrc}
          alt="No image found"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      {/* Title */}
      <h3 className="text-gray-300 text-center bg-black p-4 rounded-b-lg">
        {title}
      </h3>
    </div>
  );
}

export default MovieCard;
