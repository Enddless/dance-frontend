import { createAPI } from "../services/api";
import { NameSpace } from "../const/const";
import { authSlice } from "./slices/auth";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./slices/admin";
import { ticketSlice } from "./slices/tickets";
import { studioSlice } from "./slices/studio";
import { mainPageSlice } from "./slices/mainPage";

export const api = createAPI();

export const reducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.Admin]: adminSlice.reducer,
  [NameSpace.Ticket]: ticketSlice.reducer,
  [NameSpace.Studio]: studioSlice.reducer,
  [NameSpace.MainPage]: mainPageSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
