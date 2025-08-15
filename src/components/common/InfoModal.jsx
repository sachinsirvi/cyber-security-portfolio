import React, { useContext, useState, useEffect } from "react";
import { InfoModalContext } from "../../context/InfoModalContext";
import fetchTmdbApi from "../../api/tmdb";
import Spinner from "../common/Spinner";

function InfoModal() {
  const { isModalOpen, modalData, closeModal } = useContext(InfoModalContext);
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    if (modalData?.VideoId) {

      fetchTmdbApi(
        `https://api.themoviedb.org/3/movie/${modalData?.VideoId}/videos`
      )
        .then((data) => {
          const youtubeVideo = data.results.find(
            (video) => video.site === "YouTube" && video.type === "Trailer"
          );
          if (youtubeVideo) {
            setVideoKey(youtubeVideo.key);
          } else {
            setVideoKey(null);
          }
        })
        .catch((err) => console.error("Error fetching video data:", err));
    }
  }, [modalData?.VideoId]);

  if (!isModalOpen) return null;

  return (
    <>
      {/* {Backdrop} */}
      <div
        className="fixed inset-0 backdrop-blur z-50 bg-black/60"
        onClick={closeModal}
      ></div>
      {/* Modal */}
      <div className="fixed inset-0  flex flex-col  items-center justify-center z-50 ">
        <button
          className="font-bold text-red-500 cursor-pointer text-xl hover:text-yellow-300 "
          onClick={closeModal}
        >
          X
        </button>
        {/* Content */}
        <div className="flex  flex-col  w-full max-w-4xl  bg-neutral-900 rounded-md ">
          <div className="w-full aspect-video flex items-center justify-center ">
            {videoKey ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoKey}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md border-b border-neutral-600"
              ></iframe>
            ) : (
              <Spinner />
            )}
          </div>

          <div className="w-full p-2 font-semibold text-center text-gray-300 border-b border-neutral-600 flex flex-row justify-between items-center ">
            {/* Rating */}
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-star text-yellow-400"></i>
              {modalData.vote_average
                ? modalData.vote_average.toFixed(1)
                : "N/A"}{" "}
            </span>

            {/* Title */}
            <span className="text-lg font-bold ">
              {modalData.Title || "No Title Available"}
            </span>

            {/* Popularity */}
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-fire text-red-500"></i>
              {modalData.popularity
                ? Math.round(modalData.popularity)
                : "N/A"}{" "}
            </span>
          </div>
          <div className=" w-full text-center text-gray-300 rounded-lg p-4 ">
            {modalData.Description}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoModal;
