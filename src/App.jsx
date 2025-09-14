import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar.jsx";
import LoadingFallback from "./components/common/LoadingFallback.jsx";
import AiChatToggle from "./components/common/AiChatToggle.jsx";

// Lazy-loaded pages
const Home = lazy(() => import("./components/pages/Home/Home.jsx"));
const Skills = lazy(() => import("./components/pages/Skills.jsx"));
const Achievements = lazy(() => import("./components/pages/Home/MoreInfo.jsx"));
const Articles = lazy(() => import("./components/pages/Articles.jsx"));
const Contact = lazy(() => import("./components/pages/Contact.jsx"));
const ChatBot = lazy(() => import("./components/pages/ChatBot.jsx"));
const NotFound = lazy(() => import("./components/pages/NotFound.jsx"));

// Lazy-loaded layout
const Footer = lazy(() => import("./components/layout/Footer.jsx"));

// Centralized route config
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <Home /> }, // If "About" is part of Home
  { path: "/skills", element: <Skills /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/writeups", element: <Articles /> },
  { path: "/contact", element: <Contact /> },
  { path: "/ai_chat", element: <ChatBot /> },
  { path: "*", element: <NotFound /> },
];

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar stays visible */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback text="Loading page…" />}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </main>

      {/* Footer (lazy-loaded) */}
      <Suspense fallback={<LoadingFallback text="Loading footer…" />}>
        <Footer />
      </Suspense>

      {/* AI Chat Toggle (always visible) */}
      <AiChatToggle />
    </div>
  );
}
