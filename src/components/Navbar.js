// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 15px;
  background-color: #222;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    color: #ffcc00;
  }
`;

export default function Navbar() {
  return (
    <NavBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </NavBar>
  );
}
