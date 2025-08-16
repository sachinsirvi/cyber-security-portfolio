import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import LoadingFallback from "./components/common/LoadingFallback.jsx";
import AiChatToggle from "./components/common/AiChatToggle.jsx";
import AIChatModal from "./components/pages/AIChatModal.jsx";
// Lazy-load route pages to reduce initial bundle
const Movies = lazy(() => import("./components/pages/Movies.jsx"));
const TvShows = lazy(() => import("./components/pages/TvShows.jsx"));
const MyWatchList = lazy(() => import("./components/pages/MyWatchList.jsx"));
const Search = lazy(() => import("./components/pages/Search.jsx"));
const Home = lazy(() => import("./components/pages/Home/Home.jsx"));
const InfoModal = lazy(() => import("./components/common/InfoModal.jsx"));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingFallback text="Loading Home..." />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<LoadingFallback text="Loading Movies…" />}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="/tvshows"
            element={
              <Suspense fallback={<LoadingFallback text="Loading TV Shows…" />}>
                <TvShows />
              </Suspense>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Suspense
                fallback={<LoadingFallback text="Loading WatchList…" />}
              >
                <MyWatchList />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<LoadingFallback text="Loading Search…" />}>
                <Search />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <div className="p-10 flex flex-col items-center justify-center text-center min-h-[70vh] text-yellow-300">
                <h1 className="text-2xl font-bold mb-2">
                  404 - Page Not Found
                </h1>
                <p className="text-gray-400">
                  Oops! The page you are looking for does not exist.
                </p>
              </div>
            }
          />

          <Route
            path="/ai_chat"
            element={
              <Suspense fallback={<LoadingFallback text="Loading AI Chat…" />}>
                <AIChatModal />
              </Suspense>
            }
          />

        </Routes>
      </div>
      <Footer />
      
      <AiChatToggle />
      
      <Suspense fallback={null}>
        <InfoModal />
      </Suspense>
    </div>
  );
}
