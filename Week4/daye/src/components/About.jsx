import React from 'react'
import styled from "styled-components";

const AboutLayout = styled.div`
background-color: #F3F5FF;
`;

const Title = styled.h1`
 color: #4A86FF; 
 text-weight: bold;
 text-align: center;
`;


export default function About() {
  return (
    <AboutLayout>
        <Title>ABOUT</Title>

    </AboutLayout>
  )
}
