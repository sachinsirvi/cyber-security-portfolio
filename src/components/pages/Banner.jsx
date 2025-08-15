import React, { useEffect, useState, useContext } from "react";
import { imgBaseUrl } from "../../lib/constants";
import { END_POINTS } from "../../lib/constants";
import fetchTmdbApi from "../../api/tmdb";
import { InfoModalContext } from "../../context/InfoModalContext";

function Banner() {
  const [data, setData] = useState([]);
  const { openModal } = useContext(InfoModalContext);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    fetchTmdbApi(END_POINTS.movie.top_rated)
      .then((data) => setData(data.results || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

    // Large Screen Check
    useEffect(() => {
      const handleResize = () => {
        window.innerWidth >= 1024
          ? setIsLargeScreen(true)
          : setIsLargeScreen(false);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  const handleCardClick = (data) => {
    openModal({
      Title: data[0].title,
      Description: data[0].overview,
      VideoId: data[0].id,
      vote_average: data[0].vote_average,
      popularity: data[0].popularity,
    });
  };

  if (data.length > 0) {
    return (
      <div className="relative bg-black  w-full h-[92vh] flex justify-center items-center mb-2 ">
        <img
          src={`${imgBaseUrl}${
            isLargeScreen
              ? data[0].backdrop_path
              : data[0].poster_path
          }`}
          className="w-full h-full object-cover"
          alt="No image found"
        ></img>
        <section className="absolute left-0 p-4 hidden md:block ">
          <h1 className="text-4xl font-bold text-gray-200 break-words max-w-2xl">
            {data[0].title || data[0].name}
          </h1>
          <div className=" w-full space-x-4 mt-4">
            <button
              className="bg-black/10 backdrop-blur border text-gray-300 rounded-lg p-2 hover:bg-yellow-300 hover:text-black cursor-pointer text-md"
              onClick={() => handleCardClick(data)}
            >
              More Info
            </button>
            <button className="bg-black/10 backdrop-blur border text-gray-300 rounded-lg p-2 hover:bg-yellow-300 hover:text-black cursor-pointer text-md">
              {" "}
              <i className="fa-solid fa-plus"> </i> My List
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;
