import React from 'react'
import styled from "styled-components";

const HobbyLayout = styled.div`
background-color: #F3F5FF;
width: 100%;
justify-content: center;
`;

const Title = styled.p`
 color: #4A86FF; 
 font-weight: bold;
 text-align: center;
 padding: 3rem;
 font-size: 2vw;
`;

export default function Hobby() {
  return (
    <HobbyLayout>
      <Title>HOBBY</Title>
    </HobbyLayout>
  )
}
