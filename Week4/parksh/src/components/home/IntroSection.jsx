import React from 'react'
import styled from 'styled-components';
const Intro=styled.div`
  display: flex;
  flex-direction: column; /* 수직 방향으로 정렬 */
  justify-content: center; /* 수직 가운데 정렬 */
  align-items: center;     /* 수평 가운데 정렬 */
  text-align: center; /*문자 가운데 정렬 */
  background-color: #4A86FF;
  color:white;
  padding-top:3em;
  padding-bottom: 3em;
  font-size:2.5em;
  width:100%;
`;
export default function IntroSection() {
  return (
    <Intro> 안녕하세요!<br />
    제 이름은 박성훈 입니다.<br />
    소통하는 개발자가 되고 싶어요.<br />
    </Intro>
  )
}
