import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2>My Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
