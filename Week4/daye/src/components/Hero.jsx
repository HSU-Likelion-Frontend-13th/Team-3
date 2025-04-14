import React from 'react'
import styled from "styled-components";


//Hero style
const HeroLayout = styled.div`
    background-color: #4A86FF;
    display: flex;
    flex-direction: column; /*세로 방향*/
    justify-content: center;
    align-items: center;
    padding: 8rem;

`;

const HeroContent = styled.p`
    text-align: center;
    color: white;
    font-size: 3vw;
    padding: 1rem 0;
    font-weight: bold;

`;


export default function Hero() {
  return (
   <HeroLayout>
    <HeroContent>안녕하세요!</HeroContent>
    <HeroContent>제 이름은 김다예 입니다.</HeroContent>
    <HeroContent>소통하는 개발자가 되고 싶어요 :)</HeroContent>
   </HeroLayout>
  )
}
