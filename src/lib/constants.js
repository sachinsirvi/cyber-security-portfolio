// Base URL for tmdb api
export const TMDB_API_BASE_URL = "https://api.themoviedb.org/3";

// Common paths
const MOVIE_PATH = "/movie";
const TV_PATH = "/tv";

// Helper function
const createEndpoint = (base, path, endpoint) => {
  if (
    typeof base !== "string" ||
    typeof path !== "string" ||
    typeof endpoint !== "string"
  ) {
    throw new Error("All parameters must be strings");
  }
  return `${base}${path}${endpoint}`;
};

// Endpoints for movies and tv shows
export const END_POINTS = {
  movie: {
    now_playing: createEndpoint(TMDB_API_BASE_URL, MOVIE_PATH, "/now_playing"),
    popular: createEndpoint(TMDB_API_BASE_URL, MOVIE_PATH, "/popular"),
    top_rated: createEndpoint(TMDB_API_BASE_URL, MOVIE_PATH, "/top_rated"),
    upcoming: createEndpoint(TMDB_API_BASE_URL, MOVIE_PATH, "/upcoming"),
  },
  tv: {
    airing_today: createEndpoint(TMDB_API_BASE_URL, TV_PATH, "/airing_today"),
    on_the_air: createEndpoint(TMDB_API_BASE_URL, TV_PATH, "/on_the_air"),
    popular: createEndpoint(TMDB_API_BASE_URL, TV_PATH, "/popular"),
    top_rated: createEndpoint(TMDB_API_BASE_URL, TV_PATH, "/top_rated"),
  },
};


export const imgBaseUrl = "https://image.tmdb.org/t/p/";
export const videoBaseUrl = "https://api.themoviedb.org/3/movie";

