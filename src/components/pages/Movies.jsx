import { END_POINTS } from "../../lib/constants";
import MediaRow from "./MediaRow";
import { Helmet } from "react-helmet-async";

function Movies() {
  const movieCategories = [
    { endpoint: END_POINTS.movie.now_playing, title: "Now Playing Movies" },
    { endpoint: END_POINTS.movie.top_rated, title: "Top Rated Movies" },
    { endpoint: END_POINTS.movie.popular, title: "Popular Movies" },
    { endpoint: END_POINTS.movie.upcoming, title: "Upcoming Movies" },
  ];

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Movies - Premiere.AI</title>
        <meta
          name="description"
          content="Browse the latest movies: now playing, top rated, popular, and upcoming on Premiere.AI."
        />
        <meta
          name="keywords"
          content="movies, now playing, top rated, popular, upcoming, Premiere.AI, streaming"
        />

        {/* Open Graph / Social sharing */}
        <meta property="og:title" content="Movies - Premiere.AI" />
        <meta
          property="og:description"
          content="Discover trending, popular, and top-rated movies on Premiere.AI."
        />
        <meta
          property="og:image"
          content="https://image.tmdb.org/t/p/w780/sample-movie.jpg"
        />
        <meta property="og:url" content="https://premiere-ai.netlify.app/movies" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section aria-labelledby="movies-section-title">
        <h1 id="movies-section-title" className="sr-only">Movies Section</h1>
        {movieCategories.map((category) => (
          <MediaRow
            key={category.title}
            endpoint={category.endpoint}
            title={category.title}
          />
        ))}
      </section>
    </>
  );
}

export default Movies;
