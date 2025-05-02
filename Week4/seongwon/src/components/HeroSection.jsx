import React from "react";
import styled from "styled-components";

const StartLayout = styled.div`
  background-color: skyblue;
  color: white;
  text-align: center;
  padding: 100px;
  font-size: 1.5rem;
`;

export default function HeroSection() {
  return (
    <StartLayout>
      <h2>
        안녕하세요!<br />
        제 이름은 진성원입니다!<br />
        쌈뽕한 개발자가 되보겠습니다.<br />
      </h2>
    </StartLayout>
  );
}