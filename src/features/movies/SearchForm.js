// src/features/movies/SearchForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 280px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px 0 0 6px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #2ecc71;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 0 6px 6px 0;
  padding: 10px 15px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background-color: #27ae60;
  }
`;

export default function SearchForm({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() !== "") {
      onSearch(term);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="ค้นหาภาพยนตร์ เช่น Spiderman..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button type="submit">🔍 Search</Button>
    </Form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
