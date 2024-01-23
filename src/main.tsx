import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { LoginProvider } from "./providers/LoginProvider.tsx";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import { getCurrentUserData, getCurrentUserRole } from "./services/thunk/auth.ts";
import { BrowserRouter } from "react-router-dom";



store.dispatch(getCurrentUserData());
store.dispatch(getCurrentUserRole());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
