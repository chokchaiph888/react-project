import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../features/favorites/favoritesSlice";

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

const Button = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  background: ${(props) => (props.added ? "#aaa" : "#ff4d6d")};
  color: white;
  transition: background 0.2s;
  &:hover {
    background: ${(props) => (props.added ? "#999" : "#e63946")};
  }
`;

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isAdded = favorites.some((m) => m.imdbID === movie.imdbID);

  const handleAddFavorite = () => {
    if (!isAdded) dispatch(addFavorite(movie));
  };

  return (
    <Card>
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none", color: "black" }}>
        <Poster src={movie.Poster} alt={movie.Title} />
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </Link>

      <Button added={isAdded} onClick={handleAddFavorite} disabled={isAdded}>
        {isAdded ? "✅ Added to Favorites" : "Add to Favorites"}
      </Button>
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
