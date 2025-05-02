import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: skyblue;
`;

export default function Header() {
  return (
    <HeaderLayout>
      <Title>PORTFOLIO.</Title>
      <Nav />
    </HeaderLayout>
  );
}
