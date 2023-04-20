import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { companiesApi } from "./services/CompaniesService";
import { geoLocationApi } from "./services/GeoLocationService";

const store = configureStore({
  reducer: {
    [geoLocationApi.reducerPath]: geoLocationApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(geoLocationApi.middleware)
      .concat(companiesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
