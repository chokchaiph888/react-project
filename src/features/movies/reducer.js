// src/features/movies/reducer.js
import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../favorites/favoritesSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,

});

export default rootReducer;
