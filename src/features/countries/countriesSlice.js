import { createSlice } from "@reduxjs/toolkit";
import countryService from "../../services/countries";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    loading: "false",
    search: "",
    favourites: [],
  },
  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    search(state, action) {
      state.search = action.payload;
    },
    favourite(state, action) {
      state.favourites.push(action.payload);
      },
    unfavourite(state, action) {
          state.favourites = state.favourites.filter(favourite => favourite.name.common !== action.payload.name.common);
        
    }
    }
});

// initFavourites to get the favourites initial state and set to localStorage

export const initCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(getCountries(countries));
    dispatch(isLoading(false));
  };
};

export const { getCountries, isLoading, search, favourites, favourite, unfavourite} = countriesSlice.actions;

export default countriesSlice.reducer;
