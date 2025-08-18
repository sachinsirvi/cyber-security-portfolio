import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { InfoModalContext } from "../../context/InfoModalContext";
import { WatchListContext } from "../../context/WatchListContext";
import ImageWithFallback from "./ImageWithFallback";

const MovieCard = React.memo(function MovieCard({
  path,
  title,
  isPortrait = false,
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
      media_type: data?.media_type || "movie",
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
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Open info for ${title}`}
      className="relative w-full border-b-1 border-transparent hover:border-yellow-300 cursor-pointer transition-all duration-300 flex flex-col bg-neutral-950 rounded-md"
      onClick={infoModalToggle}
    >
      {/* Watchlist button */}
      <button
        aria-label={
          isInWatchlist
            ? `Remove ${title} from watchlist`
            : `Add ${title} to watchlist`
        }
        type="button"
        onClick={handleWatchlistToggle}
        className={`absolute top-0 right-0 bg-black/20 text-white border border-transparent p-2 md:p-3 hover:bg-yellow-300 hover:text-black transition-colors duration-300 cursor-pointer ${isInWatchlist ? "text-yellow-300" : "text-white"}`}
      >
        <i className={`fa-solid ${isInWatchlist ? "fa-check" : "fa-plus"}`} />
      </button>

      {/* Poster */}
      <ImageWithFallback
        path={path}
        alt={title}
        isPortrait={isPortrait}
        className="w-full h-full object-cover rounded-t-md"
        loading="lazy"
      />

      {/* Title */}
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

export default MovieCard;
