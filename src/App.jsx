import React, { Suspense, lazy, useContext } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import LoadingFallback from "./components/common/LoadingFallback.jsx";
import AiChatToggle from "./components/common/AiChatToggle.jsx";
import { InfoModalContext } from "./context/InfoModalContext.jsx";

// Lazy-load components to reduce initial bundle size
const Footer = lazy(() => import("./components/layout/Footer.jsx"));
const InfoModal = lazy(() => import("./components/common/InfoModal.jsx"));

// Lazy-load route pages to reduce initial bundle
const Movies = lazy(() => import("./components/pages/Movies.jsx"));
const TvShows = lazy(() => import("./components/pages/TvShows.jsx"));
const MyWatchList = lazy(() => import("./components/pages/MyWatchList.jsx"));
const Search = lazy(() => import("./components/pages/Search.jsx"));
const Home = lazy(() => import("./components/pages/Home/Home.jsx"));
const LazyAIChatModal = lazy(() => import("./components/pages/AIChatModal.jsx"));

export default function App() {
  const { isModalOpen } = useContext(InfoModalContext);
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
                <LazyAIChatModal />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <Suspense fallback={<LoadingFallback text="Loading Footer…" />}>
        <Footer />
      </Suspense>
      <AiChatToggle />
      {isModalOpen && (
        <Suspense fallback={null}>
          <InfoModal />
        </Suspense>
      )}
    </div>
  );
}
