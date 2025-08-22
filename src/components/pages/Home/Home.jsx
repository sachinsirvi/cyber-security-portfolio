import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import LazyWrapper from "../../common/LazyWrapper";
import Banner from "./Banner";

const Movies = lazy(() => import("../Movies"));
const TvShows = lazy(() => import("../TvShows"));

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Premiere.AI</title>
        <meta name="description" content="Discover the latest movies and TV shows." />
        <meta name="keywords" content="movies, tv shows, premiere, streaming" />

        {/* Open Graph */}
        <meta property="og:title" content="Home - Premiere.AI" />
        <meta property="og:description" content="Discover the latest movies and TV shows on Premiere.AI." />
        <meta property="og:image" content="https://image.tmdb.org/t/p/w780/sample.jpg" /> 
        <meta property="og:url" content="https://premiere-ai.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Preload LCP image */}
        <link rel="preload" as="image" href="https://image.tmdb.org/t/p/w780/sample.jpg" />
      </Helmet>

      <main className="w-full mx-auto">
        <section aria-label="Banner Section">
          <LazyWrapper spinnerSize="text-4xl">
            <Banner />
          </LazyWrapper>
        </section>

        <section aria-labelledby="movies-heading" className="mt-6">
          <h2 id="movies-heading" className="sr-only">Movies</h2>
          <LazyWrapper spinnerSize="text-2xl sm:text-3xl">
            <Movies />
          </LazyWrapper>
        </section>

        <section aria-labelledby="tv-heading" className="mt-6">
          <h2 id="tv-heading" className="sr-only">TV Shows</h2>
          <LazyWrapper spinnerSize="text-2xl sm:text-3xl">
            <TvShows />
          </LazyWrapper>
        </section>
      </main>
    </>
  );
}

export default Home;
