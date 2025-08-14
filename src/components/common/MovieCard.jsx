import React, { useContext } from "react";
import { InfoModalContext } from "../../context/InfoModalContext";
import { WatchListContext } from "../../context/WatchListContext";

function MovieCard({ imgSrc, title, data }) {
  const { openModal } = useContext(InfoModalContext);
  const { toggleWatchlist, watchList } = useContext(WatchListContext);

  // Check if the movie is in the watchlist
  const isInWatchlist = watchList.some((item) => item.id === data?.id);

  // Handle modal toggle
  const infoModalToggle = () => {
    openModal({
      Title: data.title,
      Description: data.overview,
      VideoId: data.id,
      vote_average: data.vote_average,
      popularity: data.popularity,
    });
  };

  // Handle watchlist toggle
  const handleWatchlistToggle = (e) => {
    e.stopPropagation();
    toggleWatchlist(data);
  };

  return (
    <div
      className="relative w-full h-full border border-transparent hover:scale-105 shadow-md hover:shadow-yellow-300 rounded-sm cursor-pointer transition-all duration-300 flex flex-col"
      onClick={infoModalToggle}
    >
      {/* Watchlist Button */}
      <div>
        <button
          className={`absolute top-0 right-0 bg-black/20 border border-transparent text-gray-300 p-2 hover:bg-yellow-300 hover:text-black transition-colors duration-300 cursor-pointer ${
            isInWatchlist ? "text-yellow-300" : "text-gray-300"
          }`}
          onClick={handleWatchlistToggle}
        >
          <i className={`fa-solid ${isInWatchlist ? "fa-check" : "fa-plus"}`}></i>
        </button>
      </div>

      {/* Poster */}
      <div className="flex-grow aspect-video">
        <img
          src={imgSrc}
          alt="No image found"
          className="w-full h-full object-cover "
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