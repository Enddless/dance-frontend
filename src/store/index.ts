import { createAPI } from "../services/api";
import { NameSpace } from "../const/const";
import { authSlice } from "./slices/auth";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./slices/admin";
import { ticketSlice } from "./slices/tickets";
import { studioSlice } from "./slices/studio";
import { mainPageSlice } from "./slices/mainPage";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

export const api = createAPI();
export const persistConfig = {
  key: 'root',
  storage,
}
export const reducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.Admin]: adminSlice.reducer,
  [NameSpace.Ticket]: ticketSlice.reducer,
  [NameSpace.Studio]: studioSlice.reducer,
  [NameSpace.MainPage]: mainPageSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
    
});
export const persistor = persistStore(store)