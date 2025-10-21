import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const exist = state.find((m) => m.imdbID === action.payload.imdbID);
      if (!exist) state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter((m) => m.imdbID !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
