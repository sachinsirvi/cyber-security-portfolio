import React, { lazy } from "react";
import LazyWrapper from "../../common/LazyWrapper";
const Banner = lazy(() => import("./Banner"));
const Movies = lazy(() => import("../Movies"));
const TvShows = lazy(() => import("../TvShows"));

function Home() {
  return (
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
  );
}

export default Home;
