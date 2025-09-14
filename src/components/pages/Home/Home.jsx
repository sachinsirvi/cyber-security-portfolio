import React from "react";
import { Helmet } from "react-helmet-async";
import About from "./About";
import MoreInfo from "./MoreInfo"

function Home() {
  return (
    <>
      <main className="w-full mx-auto">
        <section aria-label="About Section">
            <About />
        </section>
        <section aria-label="More Info Section" className="my-10 px-4">
            <MoreInfo />
        </section>
      </main>
    </>
  );
}

export default Home;
