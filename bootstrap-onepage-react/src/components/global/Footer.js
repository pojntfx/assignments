import React from "react";
import styled from "styled-components";
import { Navbar } from "reactstrap";

export const Footer = props => (
  <Navbar color="light" light expand="sm" {...props}>
    <span className="navbar-text">
      <CopyleftIcon>&copy;</CopyleftIcon> 2018 Felicitas Pojtinger
    </span>
  </Navbar>
);

const CopyleftIcon = styled.span`
  display: inline-block;
  transform: rotate(180deg);
  padding-top: 0.15rem;
`;
