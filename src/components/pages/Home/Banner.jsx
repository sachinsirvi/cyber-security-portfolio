import React, { useEffect, useState, useContext } from "react";
import { imgBaseUrl, END_POINTS } from "../../../lib/constants";
import fetchTmdbApi from "../../../api/tmdb";
import { InfoModalContext } from "../../../context/InfoModalContext";
import Spinner from "../../common/Spinner";
import ImageWithFallback from "../../common/ImageWithFallback";
import useIsLargeScreen from "../../../hooks/useIsLargeScreen";

function Banner() {
  const [topMovie, setTopMovie] = useState(null);
  const { openModal } = useContext(InfoModalContext);
  const isLargeScreen = useIsLargeScreen();

  // Fetch top rated movie
  useEffect(() => {
    fetchTmdbApi(END_POINTS.movie.top_rated)
      .then((data) => setTopMovie(data.results?.[0]) || null)
      .catch((error) =>
        console.error("Error fetching top rated movie:", error)
      );
  }, []);

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

  if (!topMovie) {
    return <Spinner size="text-3xl" />;
  }
  const imageSrc = `${imgBaseUrl}${isLargeScreen ? topMovie.backdrop_path : topMovie.poster_path}`;
  
  return (
    <div className="relative bg-black  w-full h-[92vh] flex justify-center items-center mb-2 bg-neutral-800">
      <ImageWithFallback
        src={imageSrc}
        alt={topMovie?.title || "Movie poster"}
        className="w-full h-full object-cover"
        isPortrait={!isLargeScreen}
      />

      <section className="absolute left-0 p-4 hidden md:block ">
        <h1 className="text-4xl font-bold text-gray-200 break-words max-w-2xl">
          {topMovie.title || topMovie.name}
        </h1>
        <div className=" w-full space-x-4 mt-4">
          <button
            aria-label="More info about movie"
            className="bg-black/10 backdrop-blur border text-gray-300 rounded-lg p-2 hover:bg-yellow-300 hover:text-black cursor-pointer text-md"
            onClick={handleCardClick}
          >
            More Info
          </button>
          <button
            aria-label="Add movie to my list"
            className="bg-black/10 backdrop-blur border text-gray-300 rounded-lg p-2 hover:bg-yellow-300 hover:text-black cursor-pointer text-md"
          >
            <i className="fa-solid fa-plus"> </i> My List
          </button>
        </div>
      </section>
    </div>
  );
}

export default Banner;
