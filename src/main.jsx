import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
const redirectedRoute = new URLSearchParams(window.location.search).get("route");
if (redirectedRoute !== null) {
  const restored = new URL(import.meta.env.BASE_URL + redirectedRoute, window.location.origin);
  if (restored.origin === window.location.origin && restored.pathname.startsWith(import.meta.env.BASE_URL)) {
    window.history.replaceState(null, "", restored.pathname + restored.search + restored.hash);
  }
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
