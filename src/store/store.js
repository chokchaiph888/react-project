// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";

// slice หลักของแต่ละคน
import favoritesReducer from "../features/favorites/favoritesSlice";
import moviesReducer from "../features/movies/moviesSlice"; // เผื่อเพื่อน A ใช้ใน Search/Detail
import uiReducer from "../features/ui/uiSlice"; // เผื่อเพื่อน C ใช้ใน UI Theme

// 🧩 รวม reducer ทั้งหมดไว้ใน store กลาง
const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer,
    ui: uiReducer,
  },
});

export default store;
