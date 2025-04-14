import React from "react";
import styled from "styled-components";
import runningImg from "../assets/running.jpg";
import travelImg from "../assets/travel.jpg";
import beatboxImg from "../assets/beatbox.jpg";

const HobbyTitle = styled.h3`
  text-align: center;
  color: skyblue;
  font-size: 1.7rem;
`;

const HobbyList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const HobbyItem = styled.div`
  width: 180px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  p {
    background-color: skyblue;
    color: white;
    border-radius: 5px;
    padding: 5px 0;
    margin: 0;
  }
`;

export default function Hobby() {
  return (
    <>
      <HobbyTitle id="hobby">HOBBY</HobbyTitle>
      <HobbyList>
        <HobbyItem>
          <p>러닝</p>
          <img src={runningImg} alt="러닝" />
        </HobbyItem>
        <HobbyItem>
          <p>여행 가기</p>
          <img src={travelImg} alt="여행" />
        </HobbyItem>
        <HobbyItem>
          <p>비트박스</p>
          <img src={beatboxImg} alt="비트박스" />
        </HobbyItem>
      </HobbyList>
    </>
  );
}
