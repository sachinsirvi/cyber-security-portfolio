import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { InfoModalProvider } from "./context/InfoModalContext";
import { WatchlistContextProvider } from "./context/WatchListContext"; 
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <InfoModalProvider>
        <WatchlistContextProvider>
          <App />
        </WatchlistContextProvider>
      </InfoModalProvider>
    </BrowserRouter>
  </StrictMode>
);
