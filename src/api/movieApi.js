// src/api/movieApi.js
import axios from "axios";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "10d2cd09"; //  ใส่ key

// ดึงลิสต์หนังทั้งหมดตามคำค้น
export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: { s: query, apikey: API_KEY },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// ดึงข้อมูลหนังเฉพาะเรื่องจาก imdbID
export const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(API_URL, {
      params: { i: id, apikey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    return null;
  }
};
