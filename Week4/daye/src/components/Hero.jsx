import React from 'react'
import styled from "styled-components";


//Hero style
const HeroLayout = styled.div`
    background-color: #4A86FF;
    display: flex;
    flex-direction: row; /*세로 방향*/
    justify-content: center;
    align-items: center;

`;

const HeroContent = styled.p`
    padding: 62px 0;
    text-align: center;
    color: white;
    font-size: 25px;
`;


export default function Hero() {
  return (
   <HeroLayout>
    <HeroContent>안녕하세요</HeroContent>
    <HeroContent>제 이름은 김다예 입니다.</HeroContent>
    <HeroContent>소통하는 개발자가 되고 싶어요.</HeroContent>
   </HeroLayout>
  )
}
