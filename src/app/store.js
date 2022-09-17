import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countries/countriesSlice";
import { loadState } from "./localStorage";

const preloadedState = loadState();

export default configureStore({
  reducer: {
    countries: countriesSlice,
  },
  preloadedState
});
