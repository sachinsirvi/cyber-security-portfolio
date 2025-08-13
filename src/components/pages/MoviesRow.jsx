import React, { useEffect, useState, useRef, useContext } from "react";
import fetchTmdbApi from "../../api/tmdb";
import MovieCard from "../common/MovieCard";
import { imgBaseUrl } from "../../lib/constants";
import { InfoModalContext } from "../context/InfoModalContext";

function MoviesRow({ endpoint, title }) {
  const [data, setData] = useState([]);
  const scrollContainerRef = useRef(null);
  const { openModal } = useContext(InfoModalContext);

  useEffect(() => {
    fetchTmdbApi(endpoint)
      .then((data) => setData(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, [endpoint]);

  // scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -700,
        behavior: "smooth",
      });
    }
  };

  // scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 700,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (movie) => {
    openModal({
      Title: movie.title,
      Description: movie.overview,
    });
  };

  return (
    <div className="p-4  relative">
      <h1 className=" text-gray-400 text-xl  ">{title}</h1>
      <div className=" overflow-x-auto ">
        <div
          ref={scrollContainerRef}
          className="flex p-2 space-x-2 overflow-x-auto scrollbar-hide "
        >
          {data.map((movie) => {
            const isLargeScreen = window.innerWidth >= 1024;
            const imgPath = isLargeScreen
              ? movie.backdrop_path
              : movie.poster_path;
            return (
              <div
                key={movie.id}
                className="min-w-[160px] md:min-w-[250px] "
                onClick={() => handleCardClick(movie)}
              >
                <MovieCard
                  imgSrc={`${imgBaseUrl}${imgPath}`}
                  title={movie.title}
                />
              </div>
            );
          })}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 border border-transparent p-2 rounded-full  hover:border-yellow-300 hover:text-black cursor-pointer bg-black/40"
          onClick={scrollLeft}
        >
          <i className=" text-gray-400 fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 border border-transparent p-2 rounded-full  hover:border-yellow-300 hover:text-black cursor-pointer bg-black/40"
        >
          <i className=" text-gray-400 fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default MoviesRow;
