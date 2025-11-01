import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMovieById } from "../api/movieApi";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 20px;
`;

const DetailBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  padding: 25px;
`;

const Poster = styled.img`
  width: 280px;
  border-radius: 12px;
  object-fit: cover;
  background: #f1f1f1;
`;

const Info = styled.div`
  flex: 1;
  min-width: 260px;
`;

const Title = styled.h1`
  font-size: 1.9rem;
  margin-bottom: 10px;
`;

const Meta = styled.p`
  margin: 4px 0;
  line-height: 1.4;
  strong {
    display: inline-block;
    width: 85px;
  }
`;

const Plot = styled.p`
  margin-top: 14px;
  line-height: 1.6;
`;

const FavButton = styled.button`
  background-color: ${(props) => (props.remove ? "#999" : "#ff3366")};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.remove ? "#777" : "#ff0044")};
  }
`;

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      const data = await fetchMovieById(id);
      setMovie(data);
      setLoading(false);
    };
    loadMovie();
  }, [id]);

  if (loading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }

  if (!movie || movie.Response === "False") {
    return (
      <Wrapper>
        <p>Movie not found.</p>
      </Wrapper>
    );
  }

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <Wrapper>
      <DetailBox>
        <Poster
          src={
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
        />
        <Info>
          <Title>
            {movie.Title} {movie.Year ? `(${movie.Year})` : ""}
          </Title>
          <Meta>
            <strong>Genre:</strong> {movie.Genre || "-"}
          </Meta>
          <Meta>
            <strong>Actors:</strong> {movie.Actors || "-"}
          </Meta>
          <Meta>
            <strong>Director:</strong> {movie.Director || "-"}
          </Meta>
          <Meta>
            <strong>IMDB:</strong> ⭐ {movie.imdbRating || "-"}
          </Meta>
          <Plot>
            <strong>Plot:</strong> {movie.Plot || "No plot"}
          </Plot>

          {/* ปุ่ม Favorites */}
          <FavButton onClick={toggleFavorite} remove={isFavorite}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </FavButton>
        </Info>
      </DetailBox>
    </Wrapper>
  );
}
