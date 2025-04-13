import React from 'react'
import styled from 'styled-components'
import F1Img from'../../assets/home/f1.png'
import BaseballImg from'../../assets/home/baseball.jpg'
import GameImg from'../../assets/home/game.jpg'

const HobbyLayout=styled.div`
  display: flex;
  background-color: #F3F5FF;
  flex-direction: column;
`;
const Title=styled.div`
  text-align: center;
  color: #6c82ff;
  font-size: 3em;
  font-weight: bold;
  margin: 1em 0;
`
const ContentWrapper=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4em;
  padding: 2em;
`
const HobbyCard=styled.div`
  background-color: white;
  text-align: center;/*가운데 정렬*/
  border-radius: 3em;
  width: 20em;
  height: 23em;
`
const HobbyInfo=styled.div`
  background-color: #4A86FF;
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.5em;
  /*위쪽만 궁글게*/
  color: white;
  font-size: 1.6em;
  font-weight: bold;
  padding: 0.8em;
`
const HobbyImg=styled.img`
  width: 18em;
  height: 14em;
  border-radius: 0.5em;
  object-fit: cover;/* 이미지 비율을 유지하며 잘라냄 */
  margin-top: 2em;
`
export default function HobbySection() {
  return (
    <HobbyLayout>
      <Title>Hobby</Title>
      <ContentWrapper>
        <HobbyCard>
          <HobbyInfo>야구 보러가기</HobbyInfo>
          <HobbyImg src={BaseballImg}alt="야구구 사진"></HobbyImg>
        </HobbyCard>
        <HobbyCard>
          <HobbyInfo>f1 시청</HobbyInfo>
          <HobbyImg src={F1Img}alt="f1 사진"></HobbyImg>
        </HobbyCard>
        <HobbyCard>
          <HobbyInfo>게임</HobbyInfo>
          <HobbyImg src={GameImg}alt="롤 사진"></HobbyImg>
        </HobbyCard>
      </ContentWrapper>
    </HobbyLayout>
  )
}
