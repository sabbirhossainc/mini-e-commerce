import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PortalProvider from "./Providers/PortalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PortalProvider>
        <App />
      </PortalProvider>
    </BrowserRouter>
  </StrictMode>
);
