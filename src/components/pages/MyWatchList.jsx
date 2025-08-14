import React, { useContext } from "react";
import { WatchListContext } from "../../context/WatchListContext";
import MovieCard from "../common/MovieCard";
import { imgBaseUrl } from "../../lib/constants";

function MyWatchList() {
  const { watchList } = useContext(WatchListContext); // <-- capital L

  if (!watchList?.length) {
    return <h2>Your watchlist is empty.</h2>;
  }

  return (
    <div className=" flex flex-col items-center ">
      <h1 className="p-4 ">My Watchlist</h1>
      <div className="grid grid-cols-3 md:grid-cols-5  gap-4">
        {watchList.map((movie) => {
          const isLargeScreen = window.innerWidth >= 1024;
          const imgPath = isLargeScreen
            ? movie.backdrop_path
            : movie.poster_path;
          return (
            <div key={movie.id} className="">
              <MovieCard
                imgSrc={`${imgBaseUrl}${imgPath}`}
                title={movie.title || movie.name}
                data={movie}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyWatchList;
