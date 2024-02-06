import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import {
  getCurrentUserData,
  getCurrentUserRole,
} from "./services/thunk/auth.ts";
import { BrowserRouter } from "react-router-dom";
import "./main.module.scss";

store.dispatch(getCurrentUserData());
store.dispatch(getCurrentUserRole());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
