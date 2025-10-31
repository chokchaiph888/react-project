// src/features/movies/MovieList.js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieCard from "../../components/MovieCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p> ไม่พบภาพยนตร์ที่ค้นหา</p>;
  }

  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </Grid>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
