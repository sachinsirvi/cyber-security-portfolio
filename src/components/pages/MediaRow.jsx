import React, { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import SkeletonCard from "../common/SkeletonCard";
import fetchTmdbApi from "../../api/tmdb";
import MovieCard from "../common/MovieCard";
import { InfoModalContext } from "../../context/InfoModalContext";
import useIsLargeScreen from "../../hooks/useIsLargeScreen";

function MediaRow({ endpoint, title }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const { openModal } = useContext(InfoModalContext);
  const isLargeScreen = useIsLargeScreen();
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  // Fetch data
  useEffect(() => {
    const controller = new AbortController();
    fetchTmdbApi(endpoint, controller.signal)
      .then((data) => {
        setData(data.results ?? []);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") console.error(error);
        setLoading(false);
      });
    return () => controller.abort();
  }, [endpoint]);

  // Check scroll position to hide/show arrows
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScroll({
      left: el.scrollLeft > 0,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth,
    });
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [data]);

  // Smooth scroll by container width
  const scrollBy = (direction) => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollBy({
        left: direction * el.clientWidth * 0.9,
        behavior: "smooth",
      });
    }
  };

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
    <div className="p-4 relative" aria-label={`Row for ${title}`}>
      <h2 className="text-neutral-300 text-lg font-semibold mb-2">{title}</h2>

      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex p-2 space-x-4 overflow-x-auto scrollbar-hide focus:outline-none"
          tabIndex="0" // keyboard scroll
        >
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard
                key={i}
                isPortrait={!isLargeScreen}
                className="aspect-[2/3] w-[150px] md:w-[250px]"
              />
            ))
          ) : (
            data.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleCardClick(movie)}
                className="min-w-[120px] sm:min-w-[150px] md:min-w-[250px] rounded overflow-hidden"
                aria-label={`More info about ${movie.title || movie.name}`}
              >
                <MovieCard
                  path={isLargeScreen ? movie.backdrop_path : movie.poster_path}
                  title={movie.title || movie.name}
                  data={movie}
                  isPortrait={!isLargeScreen}
                  lazy
                />
              </div>
            ))
          )}
        </div>

        {/* Left arrow */}
        {canScroll.left && (
          <button
            onClick={() => scrollBy(-1)}
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {canScroll.right && (
          <button
            onClick={() => scrollBy(1)}
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

MediaRow.propTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MediaRow;
