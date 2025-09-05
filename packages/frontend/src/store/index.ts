import { configureStore } from "@reduxjs/toolkit";
import { songsApi } from "./api";
import invoicesReducer from "./invoicesSlice";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    [songsApi.reducerPath]: songsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
