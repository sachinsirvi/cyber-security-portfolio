import React, { useEffect, useState, useContext } from "react";
import { imgBaseUrl, END_POINTS } from "../../../lib/constants";
import fetchTmdbApi from "../../../api/tmdb";
import { InfoModalContext } from "../../../context/InfoModalContext";
import SkeletonHero from "../../common/SkeletonBanner";
import ImageWithFallback from "../../common/ImageWithFallback";
import useIsLargeScreen from "../../../hooks/useIsLargeScreen";
import { WatchListContext } from "../../../context/WatchListContext";

function Banner() {
  const [topMovie, setTopMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { openModal } = useContext(InfoModalContext);
  const { toggleWatchlist, watchList } = useContext(WatchListContext);
  const isLargeScreen = useIsLargeScreen();

  // Fetch top rated movie
  useEffect(() => {
    fetchTmdbApi(END_POINTS.movie.top_rated)
      .then((data) => {
        setTopMovie(data.results?.[0] || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching top rated movie:", error);
        setLoading(false);
      });
  }, []);

  // Preload backdrop image for performance (LCP optimization)
  useEffect(() => {
    if (topMovie?.backdrop_path) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = `${imgBaseUrl}w1280${topMovie.backdrop_path}`;
      document.head.appendChild(link);
    }
  }, [topMovie]);

  // Handle watchlist toggle
  const handleWatchlistToggle = (e) => {
    e.stopPropagation();
    toggleWatchlist(topMovie);
  };

  // Handle card click to open modal
  const handleCardClick = () => {
    if (!topMovie) return;
    openModal({
      Title: topMovie.title,
      Description: topMovie.overview,
      VideoId: topMovie.id,
      vote_average: topMovie.vote_average,
      popularity: topMovie.popularity,
    });
  };

  if (loading) {
    return <SkeletonHero />;
  }

  if (!topMovie) {
    return (
      <div className="flex justify-center items-center h-[92vh] bg-neutral-800">
        <p className="text-gray-400 text-lg">
          No movie data available. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`relative ${
        isLargeScreen
          ? "w-full h-full border-transparent"
          : "w-[90vw] border-neutral-400 mt-2"
      } mx-auto rounded-md border flex justify-center items-center mb-2 bg-neutral-900`}
      aria-label="Banner Section"
    >
      <ImageWithFallback
        path={isLargeScreen ? topMovie.backdrop_path : topMovie.poster_path}
        alt={topMovie.title}
        className="w-full h-full object-cover rounded-md"
        isPortrait={!isLargeScreen}
        loading="eager"
        fetchpriority="high"
        aria-label={`Backdrop image of ${topMovie.title || topMovie.name}`}
      />

      <section
        className={`absolute ${
          isLargeScreen ? "left-0 p-4" : "bottom-0 p-2"
        }`}
        aria-label="Movie Information Section"
      >
        <h1
          className="text-4xl hidden md:block font-bold text-gray-200 break-words max-w-2xl"
          aria-label={`Title: ${topMovie.title || topMovie.name}`}
        >
          {topMovie.title || topMovie.name}
        </h1>
        <div className="w-full space-x-4 mt-4" aria-label="Action Buttons">
          <button
            aria-label="More info about movie"
            className="bg-black/10 backdrop-blur border text-gray-300 rounded-lg p-2 hover:bg-yellow-300 hover:text-black cursor-pointer text-md"
            onClick={handleCardClick}
          >
            More Info
          </button>
          <button
            aria-label="Add movie to my list"
            onClick={handleWatchlistToggle}
            className="bg-black/10 backdrop-blur border text-gray-300 rounded-lg p-2 hover:bg-yellow-300 hover:text-black cursor-pointer text-md"
          >
            <i
              className={`fa-solid ${
                watchList?.some((item) => item.id === topMovie.id)
                  ? "fa-check"
                  : "fa-plus"
              }`}
              aria-hidden="true"
            ></i>{" "}
            My List
          </button>
        </div>
      </section>
    </div>
  );
}

export default Banner;
