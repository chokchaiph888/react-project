// src/pages/Detail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../api/movieApi";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
`;

const Poster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Info = styled.div`
  flex: 1;
  color: #333;
`;

const Title = styled.h2`
  margin-top: 0;
`;

export default function Detail() {
  const { id } = useParams(); // อ่าน id จาก URL เช่น tt0468569
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieById(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  if (!movie) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <Container>
      <Poster src={movie.Poster} alt={movie.Title} />
      <Info>
        <Title>{movie.Title} ({movie.Year})</Title>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </Info>
    </Container>
  );
}
