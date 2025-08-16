import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import LazyWrapper from "../../common/LazyWrapper";
import Banner from "./Banner";
const Movies = lazy(() => import("../Movies"));
const TvShows = lazy(() => import("../TvShows"));

function Home() {
  return (
    <>
      {/* Helmet for SEO*/}
      <Helmet>
        <title>Home - Premiere.AI</title>
        <meta name="description" content="Discover the latest movies and tv shows."/>
        <meta name="keywords" content="movies, tv shows, premiere, streaming" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Home - Premiere.AI" />
        <meta property="og:description" content="Discover the latest movies and TV shows on Premiere.AI."/>
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://premiere-ai.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
        <section aria-label="Banner Section">
          <LazyWrapper spinnerSize="text-4xl">
            <Banner />
          </LazyWrapper>
        </section>

        <section aria-label="Movies Section">
          <LazyWrapper spinnerSize="text-xl">
            <Movies />
          </LazyWrapper>
        </section>

        <section aria-label="Tv Section">
          <LazyWrapper spinnerSize="text-xl">
            <TvShows />
          </LazyWrapper>
        </section>
      </div>
    </>
  );
}

export default Home;
