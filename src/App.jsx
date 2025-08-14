import React, { Suspense, lazy } from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import InfoModal from "./components/common/InfoModal.jsx";
import { Routes, Route } from "react-router-dom";

// Lazy-load route pages to reduce initial bundle
const Banner = lazy(() => import("./components/pages/Home/Banner.jsx"));
const Movies = lazy(() => import("./components/pages/Movies.jsx"));
const Tv = lazy(() => import("./components/pages/Tv.jsx"));
const MyWatchList = lazy(() => import("./components/pages/MyWatchList.jsx"));
const Search = lazy(()=> import("./components/pages/Search.jsx"));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<div className="p-4 text-gray-300">Loading…</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Movies />
                  <Tv />
                </>
              }
            />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<Tv />} />
            <Route path="/watchlist" element={<MyWatchList />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <InfoModal />
    </div>
  );
}