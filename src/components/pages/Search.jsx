import React, { useState, useEffect } from "react";
import fetchTmdbApi from "../../api/tmdb";
import MovieCard from "../common/MovieCard";
import useDebouncedValue from "../../hooks/useDebounce";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedQuery = useDebouncedValue(query, 400);

  useEffect(() => {
    const trimmed = debouncedQuery.trim();
    if (trimmed.length < 2) {
      setSearchResults([]);
      return;
    }

    const searchUrl = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(trimmed)}`;

    fetchTmdbApi(searchUrl)
      .then((data) => setSearchResults(data.results || []))
      .catch((err) => console.log(err));
  }, [debouncedQuery]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies or TV shows..."
        className="bg-black border-b border-gray-600 outline-none p-2 w-full md:w-1/5 text-center mb-4"
      />

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mt-4">
          {searchResults.map((item) => {
            if (["movie", "tv"].includes(item.media_type)) {
              const imgPath = item.poster_path || item.backdrop_path;
              return (
                <MovieCard
                  key={item.id}
                  imgSrc={`https://image.tmdb.org/t/p/w500${imgPath}`}
                  title={item.title || item.name}
                  data={item}
                />
              );
            }
            return null;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <h2 className="text-gray-300 text-center">
            {query.trim().length === 0
              ? "Start typing to search..."
              : "No results found"}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Search;
