import React, { useContext, useState, useEffect } from "react";
import { InfoModalContext } from "../../context/InfoModalContext";
import fetchTmdbApi from "../../api/tmdb";
import Spinner from "../common/Spinner";

function InfoModal() {
  const { isModalOpen, modalData, closeModal } = useContext(InfoModalContext);
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    if (modalData?.VideoId && modalData?.media_type) {
      setVideoKey(null);
      const type = modalData.media_type === "tv" ? "tv" : "movie";

      fetchTmdbApi(
        `https://api.themoviedb.org/3/${type}/${modalData.VideoId}/videos`
      )
        .then((data) => {
          const youtubeVideo = data.results.find(
            (video) =>
              video.site === "YouTube" &&
              (video.type === "Trailer" )
          );
          setVideoKey(youtubeVideo ? youtubeVideo.key : "NO_TRAILER_FOUND");
        })
        .catch((err) => {
          console.error("Error fetching video data:", err);
          setVideoKey("NO_TRAILER_FOUND");
        });
    }
  }, [modalData?.VideoId, modalData?.media_type]);

  if (!isModalOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={closeModal}
        aria-hidden="true"
      ></div>

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative flex flex-col w-full max-w-4xl bg-neutral-900 rounded-md shadow-lg">
          {/* Close Button */}
          <button
            aria-label="Close modal"
            onClick={closeModal}
            className="absolute top-0 right-4 p-2 text-gray-300  
                       text-red-400 "
          >
            <span aria-hidden="true" className="text-3xl font-bold">&times;</span>
          </button>

          {/* Trailer / Teaser */}
          <div className="w-full aspect-video flex items-center justify-center">
            {videoKey === null ? (
              <Spinner />
            ) : videoKey === "NO_TRAILER_FOUND" ? (
              <p className="text-gray-400 text-sm text-center px-4">
                🚫 No official trailer or teaser available for this title.
              </p>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoKey}`}
                title={`${modalData.Title || modalData.name} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-md border-b border-neutral-600"
                loading="lazy"
              ></iframe>
            )}
          </div>

          {/* Metadata */}
          <div className="w-full p-2 font-semibold text-center text-gray-300 border-b border-neutral-600 flex flex-row justify-between items-center">
            {/* Rating */}
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-star text-yellow-400"></i>
              {modalData.vote_average
                ? modalData.vote_average.toFixed(1)
                : "N/A"}
            </span>

            {/* Title */}
            <span className="text-md font-bold">
              {modalData.Title || modalData.name || "N/A"}
            </span>

            {/* Popularity */}
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-fire text-red-500"></i>
              {modalData.popularity ? Math.round(modalData.popularity) : "N/A"}
            </span>
          </div>

          {/* Description */}
          <div className="w-full text-center text-gray-300 rounded-lg p-4 text-sm">
            {modalData.Description}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoModal;
