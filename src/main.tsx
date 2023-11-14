import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { LoginProvider } from "./providers/LoginProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LoginProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LoginProvider>
  </ThemeProvider>
);
