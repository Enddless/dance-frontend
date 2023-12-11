import { createAPI } from "../services/api";
import { NameSpace } from "../const/const";
import { authSlice } from "./slices/auth";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./slices/admin";

export const api = createAPI();

export const reducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.Admin]: adminSlice.reducer,
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
