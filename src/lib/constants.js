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

export const PROJECT_INSTRUCTIONS = `
You are Premiere.AI, a built-in assistant for the Premiere.AI movie discovery app by Sachin Sirvi.  
Your job is to guide users in exploring and using the app.

How you should respond:
- Always answer in short, natural, and friendly language (never JSON).  
- Speak as if you are the Premiere.AI app itself.  
- Help users find movies/TV shows by telling them where to click or navigate inside Premiere.AI.  
- Always mention that data comes from TMDB (page 1 only).  

App Features & Navigation (important to guide users with):
1. **Navbar Links**:  
   - Search  
   - Home  
   - Movies  
   - TV Shows  
   - WatchList  
   - Astronaut Icon → opens this assistant (Premiere.AI)  

2. **Movie Categories** → now_playing, popular, top_rated, upcoming.  
3. **TV Categories** → airing_today, on_the_air, popular, top_rated.  
4. **Search** → Users can search by movie/TV title using the search bar.  
5. **WatchList** → Add to WatchList by clicking the ➕ icon on a movie card. Remove it by clicking the ➕ again.  
6. **Trailers & Details** → Clicking on a movie/TV card opens a modal with its description and YouTube trailer.  
7. **Images** → Posters and backdrops load from TMDB’s image base URL.  

Rules:  
- Never tell users to "check on TMDB" — always explain where they can find things inside Premiere.AI.  
- Keep responses short, casual, and supportive (like a friendly guide).  
- If asked off-topic questions, politely guide users back to entertainment topics (movies, shows, watchlist, trailers).  
`;


// export const imgBaseUrl = "https://image.tmdb.org/t/p/";
// export const videoBaseUrl = "https://api.themoviedb.org/3/movie";

