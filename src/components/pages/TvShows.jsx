import { END_POINTS } from "../../lib/constants";
import MediaRow from "./MediaRow";
import { Helmet } from "react-helmet-async";

function TvShows() {
  const tvCategories = [
    { endpoint: END_POINTS.tv.airing_today, title: "Airing Today TV Shows" },
    { endpoint: END_POINTS.tv.on_the_air, title: "On The Air TV Shows" },
    { endpoint: END_POINTS.tv.popular, title: "Popular TV Shows" },
    { endpoint: END_POINTS.tv.top_rated, title: "Top Rated TV Shows" },
  ];

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>TV Shows - Premiere.AI</title>
        <meta
          name="description"
          content="Browse the latest TV shows: airing today, on the air, popular, and top rated on Premiere.AI."
        />
        <meta
          name="keywords"
          content="tv shows, airing today, popular, top rated, on the air, streaming, Premiere.AI"
        />

        {/* Open Graph / Social sharing */}
        <meta property="og:title" content="TV Shows - Premiere.AI" />
        <meta
          property="og:description"
          content="Discover trending, popular, and top-rated TV shows on Premiere.AI."
        />
        <meta
          property="og:image"
          content="https://image.tmdb.org/t/p/w780/sample-tv.jpg"
        />
        <meta property="og:url" content="https://premiere-ai.netlify.app/tv" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section aria-labelledby="tv-section-title">
        <h1 id="tv-section-title" className="sr-only">
          TV Shows Section
        </h1>
        {tvCategories.map((category) => (
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

export default TvShows;
