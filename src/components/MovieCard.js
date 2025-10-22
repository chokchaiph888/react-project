// src/components/MovieCard.js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 10px;
  text-align: center;
  transition: transform 0.2s;
  &:hover { transform: scale(1.03); }
`;

const Poster = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
`;

export default function MovieCard({ movie }) {
  return (
    <Card>
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none", color: "black" }}>
        <Poster src={movie.Poster} alt={movie.Title} />
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </Link>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
  }).isRequired,
};
