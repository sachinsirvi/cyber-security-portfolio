import React, { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import fetchTmdbApi from "../../api/tmdb";
import MovieCard from "../common/MovieCard";
import Spinner from "../common/Spinner";
import { imgBaseUrl } from "../../lib/constants";
import { InfoModalContext } from "../../context/InfoModalContext";
import useIsLargeScreen from "../../hooks/useIsLargeScreen";

function MoviesRow({ endpoint, title }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const { openModal } = useContext(InfoModalContext);
  const isLargeScreen = useIsLargeScreen();

  // TMDB API fetch
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    fetchTmdbApi(endpoint, signal)
      .then((data) => {
        setData(data.results ?? []);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
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
  
  // handle card click
  const handleCardClick = (movie) => {
    openModal({
      Title: movie.title || movie.name,
      Description: movie.overview,
      media_type: endpoint.includes("/tv/") ? "tv" : "movie",
      VideoId: movie.id,
      vote_average: movie.vote_average,
      popularity: movie.popularity,
    });
  };

  // Render
  return (
    <div className="p-4 relative">
      <h1 className="text-neutral-300 text-lg">{title}</h1>
      <div className="overflow-x-auto">
        <div
          ref={scrollContainerRef}
          className="flex p-2 space-x-4 overflow-x-auto scrollbar-hide"
        >
          {loading ? (
            <div className="w-full h-56 flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            data.map((movie) => {
              let imgPath = null;
              let isPortrait = false;

              if (isLargeScreen && movie?.backdrop_path) {
                imgPath = movie.backdrop_path;
                isPortrait = false;
              } else if (!isLargeScreen && movie?.poster_path) {
                imgPath = movie.poster_path;
                isPortrait = true;
              }

              return (
                <div
                  key={movie.id}
                  className="min-w-[200px] md:min-w-[250px] "
                  onClick={() => handleCardClick(movie)}
                >
                  <MovieCard
                    imgSrc={imgPath ? `${imgBaseUrl}${imgPath}` : null}
                    title={movie.title || movie.name}
                    data={movie}
                    isPortrait={isPortrait}
                  />
                </div>
              );
            })
          )}
        </div>
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 h-3/4 w-12 hover:bg-black/30 transform -translate-y-1/2 left-4 border border-transparent p-2  cursor-pointer "
        > 
          <i className=" text-gray-400 fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 h-3/4 w-12 hover:bg-black/30 transform -translate-y-1/2 right-4 border border-transparent p-2  cursor-pointer "
        > 
          <i className=" text-gray-400 fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default MoviesRow;

MoviesRow.PropTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
