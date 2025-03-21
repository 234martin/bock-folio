import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #222;
  padding: 15px;
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #f4a261;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
