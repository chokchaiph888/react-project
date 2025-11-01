// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { fetchMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";


const SearchBox = styled.input`
  padding: 10px;
  width: 80%;
  margin: 20px auto;
  display: block;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default function Home() {
  const [query, setQuery] = useState("avengers");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(query);
      setMovies(data);
    };
    loadMovies();
  }, [query]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Movie Explorer</h1>
      <SearchBox
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </MovieGrid>
    </div>
  );
  
}
