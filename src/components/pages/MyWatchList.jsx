import React, { useContext } from "react";
import { WatchListContext } from "../../context/WatchListContext";
import MovieCard from "../common/MovieCard";
import { imgBaseUrl } from "../../lib/constants";
import useIsLargeScreen from "../../hooks/useIsLargeScreen";

function MyWatchList() {
  const { watchList } = useContext(WatchListContext);
  const isLargeScreen = useIsLargeScreen();

  if (!watchList?.length) {
    return (
      <div className="text-center text-neutral-400 text-lg p-8">
        Your watchlist is empty.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-yellow-300 font-bold p-4">My Watchlist</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 w-full">
        {watchList.map((movie) => {
          const imgPath = isLargeScreen ? movie?.backdrop_path : movie?.poster_path;

          return (
            <MovieCard
              key={movie.id}
              imgSrc={imgPath ? `${imgBaseUrl}${imgPath}` : null}
              title={movie?.title || movie?.name || "Untitled"}
              data={movie}
              isPortrait={!isLargeScreen}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyWatchList;
