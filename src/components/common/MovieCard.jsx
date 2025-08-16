import React, { useContext, useMemo } from "react";
import { InfoModalContext } from "../../context/InfoModalContext";
import { WatchListContext } from "../../context/WatchListContext";
import ImageWithFallback from "./ImageWithFallback";

const MovieCard = React.memo(function MovieCard({
  imgSrc,
  title,
  isPortrait,
  data,
}) {
  const { openModal } = useContext(InfoModalContext);
  const { toggleWatchlist, watchList } = useContext(WatchListContext);

  const watchListIds = useMemo(() => {
    return new Set(watchList.map((item) => item.id));
  }, [watchList]);
  const isInWatchlist = watchListIds.has(data?.id);

  // Handle modal toggle
  const infoModalToggle = () => {
    openModal({
      Title: data?.title || data?.name,
      Description: data?.overview,
      media_type: data?.media_type,
      VideoId: data?.id,
      vote_average: data?.vote_average,
      popularity: data?.popularity,
    });
  };

  // Handle watchlist toggle
  const handleWatchlistToggle = (e) => {
    e.stopPropagation();
    toggleWatchlist(data);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" ? infoModalToggle() : null}
      aria-label={`Movie Card for ${title}`}
      className="relative w-full  border-b-1 border-transparent hover:scale-105 hover:border-yellow-300  cursor-pointer transition-all duration-300 flex flex-col bg-neutral-950 rounded-md "
      onClick={infoModalToggle}
    >
      {/* Watchlist Button */}
      <div>
        <button
          aria-label={
            isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"
          }
          className={`absolute top-0 right-0 bg-black/20 border border-transparent text-gray-300 p-2 hover:bg-yellow-300 hover:text-black transition-colors duration-300 cursor-pointer ${
            isInWatchlist ? "text-yellow-300" : "text-gray-300"
          }`}
          onClick={handleWatchlistToggle}
        >
          <i
            className={`fa-solid ${isInWatchlist ? "fa-check" : "fa-plus"}`}
          ></i>
        </button>
      </div>

      <div className="flex flex-col h-full justify-between">
        <div className={isPortrait ? "aspect-[2/3]" : "aspect-video"}>
          <ImageWithFallback
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover rounded-t-md"
            isPortrait={isPortrait}
          />
        </div>
        <h3 className="hidden lg:block text-neutral-400 text-center bg-neutral-900 p-2 ">
          {title }
        </h3>
      </div>
    </div>
  );
});
export default MovieCard;

import PropTypes from "prop-types";

MovieCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    popularity: PropTypes.number,
  }).isRequired,
  isPortrait: PropTypes.bool,
};

MovieCard.defaultProps = {
  isPortrait: false,
};
