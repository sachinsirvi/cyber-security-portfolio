import React, { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import SkeletonCard from "../common/SkeletonCard";
import fetchTmdbApi from "../../api/tmdb";
import MovieCard from "../common/MovieCard";
import { InfoModalContext } from "../../context/InfoModalContext";
import useIsLargeScreen from "../../hooks/useIsLargeScreen";
import Button from "../common/Button";

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

  return (
    <div className="p-4 relative" aria-label={`Media Row for ${title}`}>
      <h1 className="text-neutral-300 text-md" aria-label={`Category: ${title}`}>
        {title}
      </h1>
      <div className="overflow-x-auto" aria-label="Scrollable Movie List">
        <div
          ref={scrollContainerRef}
          className="flex p-2 space-x-4 overflow-x-auto scrollbar-hide"
          aria-label="Movie Cards Container"
        >
          {loading ? (
            <div className="flex space-x-4" aria-label="Loading Skeleton Cards">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard
                  key={i}
                  isPortrait={!isLargeScreen ? true : false}
                  aria-label={`Skeleton Card ${i + 1}`}
                />
              ))}
            </div>
          ) : (
            data.map((movie) => (
              <div
                key={movie.id}
                className="min-w-[100px] sm:min-w-[150px] md:min-w-[250px]"
                onClick={() => handleCardClick(movie)}
                aria-label={`Movie Card for ${movie.title || movie.name}`}
              >
                <MovieCard
                  path={isLargeScreen ? movie.backdrop_path : movie.poster_path}
                  title={movie.title || movie.name}
                  data={movie}
                  isPortrait={!isLargeScreen}
                />
              </div>
            ))
          )}
        </div>
        <Button
          onClick={scrollLeft}
          className="absolute top-1/2 h-3/4 w-12 hover:bg-black/30 transform -translate-y-1/2 left-4 border border-transparent p-2 cursor-pointer"
          icon="fa-arrow-left"
        />
        <Button
          onClick={scrollRight}
          className="absolute top-1/2 h-3/4 w-12 hover:bg-black/30 transform -translate-y-1/2 right-4 border border-transparent p-2 cursor-pointer"
          icon="fa-arrow-right"
        />
      </div>
    </div>
  );
}

export default MoviesRow;

MoviesRow.propTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
