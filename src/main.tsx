import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { LoginProvider } from "./providers/LoginProvider.tsx";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import { getCurrentUserData, getCurrentUserRole } from "./services/thunk/auth.ts";


store.dispatch(getCurrentUserData());
store.dispatch(getCurrentUserRole());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
