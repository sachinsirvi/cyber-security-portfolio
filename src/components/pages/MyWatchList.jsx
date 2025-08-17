import React, { useContext } from "react";
import { WatchListContext } from "../../context/WatchListContext";
import MovieCard from "../common/MovieCard";
import useIsLargeScreen from "../../hooks/useIsLargeScreen";
import { Helmet } from "react-helmet-async";

function MyWatchList() {
  const { watchList } = useContext(WatchListContext);
  const isLargeScreen = useIsLargeScreen();

  if (!watchList?.length) {
    return (
      <>
        <Helmet>
          <title>My Watchlist | Premiere.AI</title>
          <meta name="description" content="Your saved movies and shows will appear here." />
        </Helmet>
        <section
          role="region"
          aria-label="Watchlist"
          className="text-center text-neutral-400 text-lg p-8"
        >
          Your watchlist is empty.
        </section>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>My Watchlist | Premiere.AI</title>
        <meta
          name="description"
          content="Browse and manage all movies and TV shows saved in your watchlist on Premiere.AI."
        />
      </Helmet>

      <h1 className="text-2xl text-yellow-300 font-bold p-4">My Watchlist</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 w-full">
        {watchList.map((movie) => (
          <MovieCard
            key={movie.id}
            path={isLargeScreen ? movie.backdrop_path : movie.poster_path}
            title={movie?.title || movie?.name || "Untitled"}
            data={movie}
            isPortrait={!isLargeScreen}
          />
        ))}
      </div>
    </div>
  );
}

export default MyWatchList;
