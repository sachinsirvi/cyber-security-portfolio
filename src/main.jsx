import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { InfoModalProvider } from "./components/context/InfoModalContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <InfoModalProvider>
        <App />
      </InfoModalProvider>
    </BrowserRouter>
  </StrictMode>
);
