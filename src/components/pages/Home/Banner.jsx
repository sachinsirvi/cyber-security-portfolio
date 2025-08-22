import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { END_POINTS } from "../../../lib/constants";
import fetchTmdbApi from "../../../api/tmdb";
import { InfoModalContext } from "../../../context/InfoModalContext";
import SkeletonHero from "../../common/SkeletonBanner";
import useIsLargeScreen from "../../../hooks/useIsLargeScreen";
import { WatchListContext } from "../../../context/WatchListContext";
import ImageWithFallback from "../../common/ImageWithFallback";

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
        setTopMovie(data.results?.[3] || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching top rated movie:", error);
        setLoading(false);
      });
  }, []);

  const handleWatchlistToggle = (e) => {
    e.stopPropagation();
    toggleWatchlist(topMovie);
  };

  const handleCardClick = () => {
    if (!topMovie) return;
    openModal({
      Title: topMovie.title,
      Description: topMovie.overview,
      VideoId: topMovie.id,
      media_type: "movie",
      vote_average: topMovie.vote_average,
      popularity: topMovie.popularity,
    });
  };

  if (loading) return <SkeletonHero />;

  if (!topMovie) {
    return (
      <div className="flex justify-center items-center h-[92vh] bg-neutral-800">
        <p className="text-gray-400 text-lg">
          No movie data available. Please try again later.
        </p>
      </div>
    );
  }

  // pick correct image
  const bannerPath = isLargeScreen
    ? topMovie.backdrop_path
    : topMovie.poster_path;

  const bannerImage = bannerPath
    ? `https://image.tmdb.org/t/p/${isLargeScreen ? "w1280" : "w500"}${bannerPath}`
    : "https://via.placeholder.com/1280x720?text=No+Image";

  return (
    <div
    className={`
      relative
      w-[90vw] mx-auto mt-2 rounded-md border border-neutral-600
      h-[70vh] md:h-[80vh] 
      lg:w-screen lg:h-[92vh] lg:mx-0 lg:rounded-none lg:border-0
      flex flex-col mb-2 overflow-hidden
    `}
    aria-label="Banner Section"
  >
      {/* Preload hero for LCP */}
      <Helmet>
        <link rel="preload" as="image" href={bannerImage} />
      </Helmet>

      {/* Poster / Backdrop */}
      <ImageWithFallback
        path={bannerPath}
        alt={topMovie.title || topMovie.name}
        isPortrait={!isLargeScreen}
        className="w-full h-full object-cover rounded-md aspect-video" 
        width={isLargeScreen ? "1280" : "500"}
        height={isLargeScreen ? "720" : "750"}
        fetchpriority="high" 
        decoding="async"
      />

      {/* Desktop Overlay */}
      {isLargeScreen && (
        <section
          className="absolute left-0 top-1/2 -translate-y-1/2 p-6"
          aria-labelledby="banner-title"
        >
          <h2
            id="banner-title"
            className="text-3xl font-bold text-gray-200 max-w-2xl break-words"
          >
            {topMovie.title || topMovie.name}
          </h2>

          <div
            className="flex gap-4 mt-4"
            role="group"
            aria-label="Movie Actions"
          >
            <button
              onClick={handleCardClick}
              className="bg-black/60 text-white rounded-lg px-4 py-2 hover:bg-yellow-300 hover:text-black transition"
            >
              More Info
            </button>
            <button
              onClick={handleWatchlistToggle}
              aria-pressed={watchList?.some((item) => item.id === topMovie.id)}
              className="bg-black/60 text-white rounded-lg px-4 py-2 hover:bg-yellow-300 hover:text-black transition"
            >
              {watchList?.some((item) => item.id === topMovie.id)
                ? "✓ Added"
                : "+ My List"}
            </button>
          </div>
        </section>
      )}

      {/* Mobile Buttons (below poster) */}
      {!isLargeScreen && (
        <div
          className="flex gap-3 w-full bg-black rounded-md p-4"
          role="group"
          aria-label="Movie Actions"
        >
          <button
            onClick={handleCardClick}
            className="flex-1 bg-neutral-800 rounded-lg px-4 py-3 text-md text-white transition"
          >
            More Info
          </button>
          <button
            onClick={handleWatchlistToggle}
            aria-pressed={watchList?.some((item) => item.id === topMovie.id)}
            className="flex-1 bg-neutral-800 rounded-lg px-4 py-3 text-md text-white transition"
          >
            {watchList?.some((item) => item.id === topMovie.id)
              ? "✓ Added"
              : "+ My List"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Banner;
