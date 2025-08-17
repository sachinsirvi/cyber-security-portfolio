import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import fetchTmdbApi from "../../api/tmdb";
import MovieCard from "../common/MovieCard";
import useDebouncedValue from "../../hooks/useDebounce";
import useIsLargeScreen from "../../hooks/useIsLargeScreen";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedQuery = useDebouncedValue(query, 400);
  const isLargeScreen = useIsLargeScreen();

  useEffect(() => {
    const trimmed = debouncedQuery.trim();
    if (trimmed.length < 2) {
      setSearchResults([]);
      return;
    }

    const searchUrl = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
      trimmed
    )}&language=en-US&page=1`;

    fetchTmdbApi(searchUrl)
      .then((data) => {
        // defensive check to avoid crashing
        setSearchResults(data?.results || []);
      })
      .catch((err) => {
        console.error("Search error:", err);
        setSearchResults([]); // fallback
      });
  }, [debouncedQuery]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      {/* Helmet for SEO */}
      <Helmet>
        <title>
          {query.trim()
            ? `Search results for "${query}" | Premiere.AI`
            : "Search Movies & TV Shows | Premiere.AI"}
        </title>
        <meta
          name="description"
          content={
            query.trim()
              ? `Browse search results for "${query}" including movies and TV shows.`
              : "Search movies and TV shows on Premiere.AI with real-time results."
          }
        />
      </Helmet>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies or TV shows..."
        className="bg-black border-b border-gray-600 outline-none p-2 w-full md:w-1/3 text-center mb-4"
        aria-label="Search movies and TV shows"
      />

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mt-4">
          {searchResults.map((item) =>
            ["movie", "tv"].includes(item.media_type) ? (
              <MovieCard
                key={`${item.media_type}-${item.id}`} // unique key
                path={isLargeScreen ? item.backdrop_path : item.poster_path}
                title={item.title || item.name}
                data={item}
                isPortrait={!isLargeScreen}
              />
            ) : null
          )}
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
