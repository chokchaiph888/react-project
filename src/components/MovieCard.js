import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((f) => f.imdbID === movie.imdbID);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
