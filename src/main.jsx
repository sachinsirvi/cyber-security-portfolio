import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { InfoModalProvider } from "./context/InfoModalContext";
import { WatchlistContextProvider } from "./context/WatchListContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <InfoModalProvider>
          <WatchlistContextProvider>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </WatchlistContextProvider>
        </InfoModalProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
