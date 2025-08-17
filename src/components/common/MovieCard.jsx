import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { InfoModalContext } from "../../context/InfoModalContext";
import { WatchListContext } from "../../context/WatchListContext";
import ImageWithFallback from "./ImageWithFallback";
import Button from "./Button";

const MovieCard = React.memo(function MovieCard({
  path,
  title,
  isPortrait,
  data,
}) {
  const { openModal } = useContext(InfoModalContext);
  const { toggleWatchlist, watchList } = useContext(WatchListContext);

  const watchListIds = useMemo(
    () => new Set(watchList.map((item) => item.id)),
    [watchList]
  );
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

  // Keyboard support for accessibility
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      infoModalToggle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Open info for ${title}`}
      className="relative w-full border-b-1 border-transparent hover:scale-105 hover:border-yellow-300 cursor-pointer transition-all duration-300 flex flex-col bg-neutral-950 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
      onClick={infoModalToggle}
    >
      {/* Watchlist button */}
      <Button
        aria-label={
          isInWatchlist
            ? `Remove ${title} from watchlist`
            : `Add ${title} to watchlist`
        }
        type="button"
        onClick={handleWatchlistToggle}
        className={`absolute top-0 right-1 bg-black/20 border border-transparent text-gray-300 p-1 sm:p-2 md:p-3 hover:bg-yellow-300 hover:text-black transition-colors duration-300 cursor-pointer ${
          isInWatchlist ? "text-yellow-300" : "text-gray-300"
        }`}
        icon={isInWatchlist ? "fa-check" : "fa-plus"}
      />

      {/* Poster */}
      <ImageWithFallback
        path={path}
        alt={title}
        isPortrait={isPortrait}
        className="w-full h-full object-cover rounded-t-md"
        loading="lazy"
      />

      {/* Title (not a heading, just text) */}
      <p className="hidden lg:block text-neutral-300 text-center bg-neutral-900 p-2 ">
        {title}
      </p>
    </div>
  );
});

MovieCard.propTypes = {
  path: PropTypes.string,
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

export default MovieCard;
