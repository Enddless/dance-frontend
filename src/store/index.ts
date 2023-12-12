import { createAPI } from "../services/api";
import { NameSpace } from "../const/const";
import { authSlice } from "./slices/auth";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./slices/admin";
import { userSlice } from "./slices/user";

export const api = createAPI();

export const reducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.Admin]: adminSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
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
