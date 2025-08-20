import React, { Suspense, lazy, useContext } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import LoadingFallback from "./components/common/LoadingFallback.jsx";
import AiChatToggle from "./components/common/AiChatToggle.jsx";
import { InfoModalContext } from "./context/InfoModalContext.jsx";

// Lazy load route pages
const Home = lazy(() => import("./components/pages/Home/Home.jsx"));
const Movies = lazy(() => import("./components/pages/Movies.jsx"));
const TvShows = lazy(() => import("./components/pages/TvShows.jsx"));
const MyWatchList = lazy(() => import("./components/pages/MyWatchList.jsx"));
const Search = lazy(() => import("./components/pages/Search.jsx"));
const NotFound = lazy(() => import("./components/pages/NotFound.jsx"));
const ChatBot = lazy(() => import("./components/pages/ChatBot.jsx"));

// Lazy load layout
const Footer = lazy(() => import("./components/layout/Footer.jsx"));
const InfoModal = lazy(() => import("./components/common/InfoModal.jsx"));

export default function App() {
  const { isModalOpen } = useContext(InfoModalContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback text="Loading page…" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/watchlist" element={<MyWatchList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/ai_chat" element={<ChatBot />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
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
