import React, { useEffect, useState, useRef, useContext } from "react";
import fetchTmdbApi from "../../api/tmdb";
import MovieCard from "../common/MovieCard";
import Spinner from "../common/Spinner";
import { imgBaseUrl } from "../../lib/constants";
import { InfoModalContext } from "../../context/InfoModalContext";

function MoviesRow({ endpoint, title }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const { openModal } = useContext(InfoModalContext);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // TMDB API fetch
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);

    fetchTmdbApi(endpoint, signal)
      .then((data) => {
        setData(data.results ?? []);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [endpoint]);

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

  // scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -700,
        behavior: "smooth",
      });
    }
  };

  // scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 700,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (movie) => {
    openModal({
      Title: movie.title,
      Description: movie.overview,
      VideoId: movie.id,
      vote_average: movie.vote_average,
      popularity: movie.popularity,
    });
  };

  {
    loading;
  }
  return (
    <div className="p-4  relative">
      <h1 className=" text-gray-400 text-xl  ">{title}</h1>
      <div className=" overflow-x-auto ">
        <div
          ref={scrollContainerRef}
          className="flex p-2 space-x-2 overflow-x-auto scrollbar-hide "
        >
          {loading ? (
           <div className="w-full h-56 flex justify-center items-center">
           <Spinner />
         </div>
            
          ) : (
            data.map((movie) => {
              const imgPath = isLargeScreen
                ? movie.backdrop_path
                : movie.poster_path;
              return (
                <div
                  key={movie.id}
                  className="min-w-[160px] md:min-w-[250px] "
                  onClick={() => handleCardClick(movie)}
                >
                  <MovieCard
                    imgSrc={`${imgBaseUrl}${imgPath}`}
                    title={movie.title || movie.name}
                    data={movie}
                  />
                </div>
              );
            })
          )}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 border border-transparent p-2 rounded-full  hover:border-yellow-300 hover:text-black cursor-pointer bg-black/40"
          onClick={scrollLeft}
        >
          <i className=" text-gray-400 fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 border border-transparent p-2 rounded-full  hover:border-yellow-300 hover:text-black cursor-pointer bg-black/40"
        >
          <i className=" text-gray-400 fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default MoviesRow;
