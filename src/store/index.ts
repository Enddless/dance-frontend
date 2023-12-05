import { createAPI } from "../services/api";
import { NameSpace } from "../const/const";
import { userSlice } from "./slices/user";
import { authSlice } from "./slices/auth";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const api = createAPI();

export const reducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Auth]: authSlice.reducer,
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
