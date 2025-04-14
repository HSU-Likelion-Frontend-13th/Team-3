import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
  background-color: white;
`;

const NavItem = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: skyblue;
  }
`;

export default function Nav() {
  return (
    <NavWrapper>
      <NavItem href="#about">ABOUT</NavItem>
      <NavItem href="#hobby">HOBBY</NavItem>
      <NavItem href="#contact">CONTACT</NavItem>
    </NavWrapper>
  );
}